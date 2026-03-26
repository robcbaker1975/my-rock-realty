import { useEffect, useMemo, useRef } from 'react';
import { buildBreadcrumbs } from '../../lib/seo/breadcrumbs';
import { buildSeoMetadata, resolveSiteConfig } from '../../lib/seo/metadata';
import {
  buildBreadcrumbListSchema,
  buildOrganizationSchema,
  buildRealEstateAgentSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
  mergeSchemas,
  serializeJsonLd,
} from '../../lib/seo/schema';
import type { SchemaNode, SeoHeadProps } from '../../types/seo';

const OWNER_ATTR = 'data-seo-head-owner';
const OWNER_VALUE = 'myrockhomes-seo';

type ManagedNode = HTMLMetaElement | HTMLLinkElement | HTMLScriptElement;

function setManagedMeta(
  head: HTMLHeadElement,
  key: string,
  content: string,
  attrName: 'name' | 'property',
  attrValue: string,
): HTMLMetaElement {
  let element = head.querySelector<HTMLMetaElement>(
    `meta[${OWNER_ATTR}="${OWNER_VALUE}"][data-seo-key="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(OWNER_ATTR, OWNER_VALUE);
    element.setAttribute('data-seo-key', key);
    head.appendChild(element);
  }

  element.removeAttribute('name');
  element.removeAttribute('property');
  element.setAttribute(attrName, attrValue);
  element.setAttribute('content', content);

  return element;
}

function setManagedCanonical(head: HTMLHeadElement, href: string): HTMLLinkElement {
  let element = head.querySelector<HTMLLinkElement>(
    `link[${OWNER_ATTR}="${OWNER_VALUE}"][data-seo-key="canonical"]`,
  );

  if (!element) {
    element = document.createElement('link');
    element.setAttribute(OWNER_ATTR, OWNER_VALUE);
    element.setAttribute('data-seo-key', 'canonical');
    head.appendChild(element);
  }

  element.setAttribute('rel', 'canonical');
  element.setAttribute('href', href);

  return element;
}

function setManagedJsonLd(
  head: HTMLHeadElement,
  key: string,
  schema: SchemaNode,
): HTMLScriptElement {
  let element = head.querySelector<HTMLScriptElement>(
    `script[${OWNER_ATTR}="${OWNER_VALUE}"][data-seo-key="${key}"]`,
  );

  const serialized = serializeJsonLd(schema);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute(OWNER_ATTR, OWNER_VALUE);
    element.setAttribute('data-seo-key', key);
    head.appendChild(element);
  }

  if (element.text !== serialized) {
    element.text = serialized;
  }

  return element;
}

function removeManagedNodes(nodes: ManagedNode[]): void {
  nodes.forEach((node) => {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

export default function SeoHead({
  metadata,
  siteConfig,
  schema = [],
  includeAgentSchema = true,
  includeWebsiteSchema = true,
  agentSchemaOptions,
}: SeoHeadProps): null {
  const previousTitleRef = useRef<string | null>(null);

  const resolvedConfig = useMemo(() => resolveSiteConfig(siteConfig), [siteConfig]);
  const resolvedMetadata = useMemo(
    () => buildSeoMetadata(metadata, resolvedConfig),
    [metadata, resolvedConfig],
  );

  const schemaNodes = useMemo(() => {
    const breadcrumbItems = metadata.breadcrumbs?.length
      ? buildBreadcrumbs(metadata.breadcrumbs, {
          siteUrl: resolvedConfig.siteUrl,
          includeHome: true,
          homeLabel: 'Home',
        })
      : [];

    return mergeSchemas(
      buildOrganizationSchema(resolvedConfig),
      includeAgentSchema ? buildRealEstateAgentSchema(agentSchemaOptions, resolvedConfig) : null,
      includeWebsiteSchema ? buildWebsiteSchema(resolvedConfig) : null,
      buildWebPageSchema(resolvedMetadata, resolvedConfig),
      breadcrumbItems.length ? buildBreadcrumbListSchema(breadcrumbItems) : null,
      ...schema,
    );
  }, [
    includeAgentSchema,
    includeWebsiteSchema,
    metadata.breadcrumbs,
    resolvedConfig,
    resolvedMetadata,
    schema,
  ]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const head = document.head;
    const managedNodes: ManagedNode[] = [];

    if (previousTitleRef.current === null) {
      previousTitleRef.current = document.title;
    }

    document.title = resolvedMetadata.title;

    managedNodes.push(
      setManagedMeta(head, 'description', resolvedMetadata.description, 'name', 'description'),
    );
    managedNodes.push(setManagedMeta(head, 'robots', resolvedMetadata.robots, 'name', 'robots'));
    managedNodes.push(setManagedCanonical(head, resolvedMetadata.canonicalUrl));

    managedNodes.push(
      setManagedMeta(head, 'og:type', resolvedMetadata.openGraph.type, 'property', 'og:type'),
    );
    managedNodes.push(
      setManagedMeta(head, 'og:title', resolvedMetadata.openGraph.title, 'property', 'og:title'),
    );
    managedNodes.push(
      setManagedMeta(
        head,
        'og:description',
        resolvedMetadata.openGraph.description,
        'property',
        'og:description',
      ),
    );
    managedNodes.push(
      setManagedMeta(head, 'og:url', resolvedMetadata.openGraph.url, 'property', 'og:url'),
    );
    managedNodes.push(
      setManagedMeta(
        head,
        'og:site_name',
        resolvedMetadata.openGraph.siteName,
        'property',
        'og:site_name',
      ),
    );
    managedNodes.push(
      setManagedMeta(
        head,
        'og:locale',
        resolvedMetadata.openGraph.locale,
        'property',
        'og:locale',
      ),
    );

    resolvedMetadata.openGraph.images.forEach((image, index) => {
      managedNodes.push(
        setManagedMeta(head, `og:image:${index}`, image.url, 'property', 'og:image'),
      );

      if (image.alt) {
        managedNodes.push(
          setManagedMeta(head, `og:image:alt:${index}`, image.alt, 'property', 'og:image:alt'),
        );
      }

      if (typeof image.width === 'number') {
        managedNodes.push(
          setManagedMeta(
            head,
            `og:image:width:${index}`,
            String(image.width),
            'property',
            'og:image:width',
          ),
        );
      }

      if (typeof image.height === 'number') {
        managedNodes.push(
          setManagedMeta(
            head,
            `og:image:height:${index}`,
            String(image.height),
            'property',
            'og:image:height',
          ),
        );
      }

      if (image.type) {
        managedNodes.push(
          setManagedMeta(
            head,
            `og:image:type:${index}`,
            image.type,
            'property',
            'og:image:type',
          ),
        );
      }
    });

    managedNodes.push(
      setManagedMeta(head, 'twitter:card', resolvedMetadata.twitter.card, 'name', 'twitter:card'),
    );
    managedNodes.push(
      setManagedMeta(
        head,
        'twitter:title',
        resolvedMetadata.twitter.title,
        'name',
        'twitter:title',
      ),
    );
    managedNodes.push(
      setManagedMeta(
        head,
        'twitter:description',
        resolvedMetadata.twitter.description,
        'name',
        'twitter:description',
      ),
    );

    if (resolvedMetadata.twitter.image) {
      managedNodes.push(
        setManagedMeta(
          head,
          'twitter:image',
          resolvedMetadata.twitter.image,
          'name',
          'twitter:image',
        ),
      );
    }

    if (resolvedMetadata.twitter.site) {
      managedNodes.push(
        setManagedMeta(
          head,
          'twitter:site',
          resolvedMetadata.twitter.site,
          'name',
          'twitter:site',
        ),
      );
    }

    if (resolvedMetadata.twitter.creator) {
      managedNodes.push(
        setManagedMeta(
          head,
          'twitter:creator',
          resolvedMetadata.twitter.creator,
          'name',
          'twitter:creator',
        ),
      );
    }

    schemaNodes.forEach((node, index) => {
      managedNodes.push(setManagedJsonLd(head, `jsonld:${index}`, node));
    });

    const activeKeys = new Set(
      managedNodes
        .map((node) => node.getAttribute('data-seo-key'))
        .filter((value): value is string => Boolean(value)),
    );

    const existingManagedNodes = Array.from(
      head.querySelectorAll<ManagedNode>(`[${OWNER_ATTR}="${OWNER_VALUE}"]`),
    );

    existingManagedNodes.forEach((node) => {
      const key = node.getAttribute('data-seo-key');
      if (!key || !activeKeys.has(key)) {
        node.parentNode?.removeChild(node);
      }
    });

    return () => {
      removeManagedNodes(managedNodes);

      if (previousTitleRef.current !== null) {
        document.title = previousTitleRef.current;
      }
    };
  }, [resolvedMetadata, schemaNodes]);

  return null;
}
