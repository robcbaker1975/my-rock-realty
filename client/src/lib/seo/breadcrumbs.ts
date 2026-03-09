import type {
  BreadcrumbItem,
  BreadcrumbItemInput,
  BreadcrumbOptions,
} from '../../types/seo';

function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '');
}

function normalizeHref(href?: string, siteUrl?: string): string | undefined {
  if (!href) return undefined;

  if (/^https?:\/\//i.test(href)) {
    return stripTrailingSlash(href);
  }

  const normalizedPath = href.startsWith('/') ? href : `/${href}`;

  if (!siteUrl) return normalizedPath;
  return `${stripTrailingSlash(siteUrl)}${normalizedPath}`;
}

function normalizeLabel(label: string): string {
  return label.replace(/\s+/g, ' ').trim();
}

export function buildBreadcrumbs(
  items: BreadcrumbItemInput[],
  options: BreadcrumbOptions = {},
): BreadcrumbItem[] {
  const {
    siteUrl,
    homeLabel = 'Home',
    includeHome = true,
  } = options;

  const normalizedItems = items
    .filter((item) => item && normalizeLabel(item.label).length > 0)
    .map((item) => ({
      label: normalizeLabel(item.label),
      href: normalizeHref(item.href, siteUrl),
    }));

  const withHome = includeHome
    ? [{ label: homeLabel, href: normalizeHref('/', siteUrl) }, ...normalizedItems]
    : normalizedItems;

  return withHome.map((item, index) => ({
    label: item.label,
    href: index === withHome.length - 1 ? undefined : item.href,
    position: index + 1,
    isCurrent: index === withHome.length - 1,
  }));
}

export function breadcrumbsToSchemaItems(items: BreadcrumbItem[]): Array<{
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}> {
  return items.map((item) => ({
    '@type': 'ListItem',
    position: item.position,
    name: item.label,
    ...(item.href ? { item: item.href } : {}),
  }));
}
