import type { JSX } from 'react';
import { buildBreadcrumbs } from '../../lib/seo/breadcrumbs';
import { buildBreadcrumbListSchema, serializeJsonLd } from '../../lib/seo/schema';
import type { BreadcrumbsProps } from '../../types/seo';

function joinClassNames(...values: Array<string | undefined | false | null>): string {
  return values.filter(Boolean).join(' ');
}

export default function Breadcrumbs({
  items,
  className,
  listClassName,
  itemClassName,
  separator = '/',
  ariaLabel = 'Breadcrumb',
  siteUrl,
  homeLabel = 'Home',
  includeHome = true,
  renderSchema = false,
}: BreadcrumbsProps): JSX.Element | null {
  const breadcrumbItems = buildBreadcrumbs(items, {
    siteUrl,
    homeLabel,
    includeHome,
  });

  if (!breadcrumbItems.length) {
    return null;
  }

  const breadcrumbSchema = renderSchema ? buildBreadcrumbListSchema(breadcrumbItems) : null;

  return (
    <>
      <nav aria-label={ariaLabel} className={joinClassNames('w-full', className)}>
        <ol
          className={joinClassNames(
            'flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-cream/60',
            listClassName,
          )}
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li
                key={`${item.label}-${item.position}`}
                className={joinClassNames('inline-flex items-center gap-2', itemClassName)}
              >
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="transition-colors text-cream/70 hover:text-gold hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span aria-current="page" className="font-medium text-cream">
                    {item.label}
                  </span>
                )}

                {!isLast ? (
                  <span aria-hidden="true" className="text-cream/30">
                    {separator}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>

      {/*
        Phase 1 breadcrumb schema rule:
        - SeoHead is the canonical source of page-level BreadcrumbList JSON-LD.
        - Breadcrumbs renders schema only when renderSchema is explicitly true.
        - Standard page usage should leave renderSchema as false to avoid duplicates.
      */}
      {breadcrumbSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
        />
      ) : null}
    </>
  );
}
