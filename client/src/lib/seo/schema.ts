import type {
  ArticleSchemaOptions,
  BreadcrumbItem,
  FaqQuestion,
  RealEstateSchemaOptions,
  ResolvedSeoMetadata,
  SchemaNode,
  SiteConfig,
} from '../../types/seo';
import { breadcrumbsToSchemaItems } from './breadcrumbs';
import { resolveSiteConfig, toAbsoluteUrl } from './metadata';

function createRootId(siteUrl: string, suffix: string): string {
  return `${siteUrl.replace(/\/+$/, '')}${suffix}`;
}

export function getRealEstateAgentId(siteConfig?: Partial<SiteConfig>): string {
  const config = resolveSiteConfig(siteConfig);
  return createRootId(config.siteUrl, '/#real-estate-agent');
}

export function getOrganizationId(siteConfig?: Partial<SiteConfig>): string {
  const config = resolveSiteConfig(siteConfig);
  return createRootId(config.siteUrl, '/#organization');
}

export function serializeJsonLd(schema: SchemaNode): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export function buildOrganizationSchema(siteConfig?: Partial<SiteConfig>): SchemaNode {
  const config = resolveSiteConfig(siteConfig);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': getOrganizationId(config),
    name: config.organizationName || config.brandName || config.siteName,
    url: config.siteUrl,
  };
}

export function buildRealEstateAgentSchema(
  options?: Partial<RealEstateSchemaOptions>,
  siteConfig?: Partial<SiteConfig>,
): SchemaNode {
  const config = resolveSiteConfig(siteConfig);
  const resolvedId = options?.id || getRealEstateAgentId(config);

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': resolvedId,
    name: options?.name || config.organizationName || config.brandName || config.siteName,
    url: options?.url || config.siteUrl,
    ...(options?.image ? { image: toAbsoluteUrl(options.image, config.siteUrl) } : {}),
    ...(options?.description ? { description: options.description } : {}),
    ...(options?.telephone ? { telephone: options.telephone } : {}),
    ...(options?.email ? { email: options.email } : {}),
    ...(options?.sameAs?.length ? { sameAs: options.sameAs } : {}),
    ...(options?.areaServed
      ? {
          areaServed: Array.isArray(options.areaServed)
            ? options.areaServed.map((area) => ({
                '@type': 'AdministrativeArea',
                name: area,
              }))
            : {
                '@type': 'AdministrativeArea',
                name: options.areaServed,
              },
        }
      : {}),
    ...(options?.address
      ? {
          address: {
            '@type': 'PostalAddress',
            ...(options.address.streetAddress
              ? { streetAddress: options.address.streetAddress }
              : {}),
            ...(options.address.addressLocality
              ? { addressLocality: options.address.addressLocality }
              : {}),
            ...(options.address.addressRegion
              ? { addressRegion: options.address.addressRegion }
              : {}),
            ...(options.address.postalCode ? { postalCode: options.address.postalCode } : {}),
            ...(options.address.addressCountry
              ? { addressCountry: options.address.addressCountry }
              : {}),
          },
        }
      : {}),
    parentOrganization: {
      '@id': getOrganizationId(config),
    },
  };
}

export function buildWebsiteSchema(siteConfig?: Partial<SiteConfig>): SchemaNode {
  const config = resolveSiteConfig(siteConfig);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': createRootId(config.siteUrl, '/#website'),
    url: config.siteUrl,
    name: config.siteName,
    publisher: {
      '@id': getRealEstateAgentId(config),
    },
    inLanguage: 'en-US',
  };
}

export function buildWebPageSchema(
  metadata: ResolvedSeoMetadata,
  siteConfig?: Partial<SiteConfig>,
): SchemaNode {
  const config = resolveSiteConfig(siteConfig);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${metadata.canonicalUrl}#webpage`,
    url: metadata.canonicalUrl,
    name: metadata.title,
    description: metadata.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': createRootId(config.siteUrl, '/#website'),
    },
    about: {
      '@id': getRealEstateAgentId(config),
    },
    ...(metadata.image?.url
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: metadata.image.url,
          },
        }
      : {}),
  };
}

export function buildBreadcrumbListSchema(items: BreadcrumbItem[]): SchemaNode | null {
  if (!items.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbsToSchemaItems(items),
  };
}

export function buildFAQPageSchema(questions: FaqQuestion[]): SchemaNode | null {
  const validQuestions = questions.filter(
    (item) => item.question.trim().length > 0 && item.answer.trim().length > 0,
  );

  if (!validQuestions.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validQuestions.map((item) => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };
}

export function buildArticleSchema(
  options: ArticleSchemaOptions,
  siteConfig?: Partial<SiteConfig>,
): SchemaNode {
  const config = resolveSiteConfig(siteConfig);

  const imageUrl =
    typeof options.image === 'string'
      ? toAbsoluteUrl(options.image, config.siteUrl)
      : options.image?.url
        ? toAbsoluteUrl(options.image.url, config.siteUrl)
        : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${options.url}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${options.url}#webpage`,
    },
    headline: options.headline,
    url: options.url,
    ...(options.description ? { description: options.description } : {}),
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    author: {
      '@id': getRealEstateAgentId(config),
      '@type': 'RealEstateAgent',
      name: options.authorName || config.organizationName || config.brandName || config.siteName,
    },
    publisher: {
      '@id': getRealEstateAgentId(config),
      '@type': 'RealEstateAgent',
      name:
        options.publisherName || config.organizationName || config.brandName || config.siteName,
    },
  };
}

export function buildImageObjectSchema(
  imageUrl: string,
  siteConfig?: Partial<SiteConfig>,
  alt?: string,
): SchemaNode {
  const config = resolveSiteConfig(siteConfig);

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: toAbsoluteUrl(imageUrl, config.siteUrl),
    ...(alt ? { caption: alt } : {}),
  };
}

export function mergeSchemas(...schemas: Array<SchemaNode | null | undefined>): SchemaNode[] {
  return schemas.filter(Boolean) as SchemaNode[];
}
