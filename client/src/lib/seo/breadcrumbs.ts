import type {
  BreadcrumbItem,
  BreadcrumbItemInput,
  BreadcrumbOptions,
} from '../../types/seo';
import { toAbsoluteUrl } from './metadata';

export function buildBreadcrumbs(
  items: BreadcrumbItemInput[],
  options: BreadcrumbOptions = {},
): BreadcrumbItem[] {
  const { siteUrl, homeLabel = 'Home', includeHome = true } = options;

  const inputItems: BreadcrumbItemInput[] = includeHome
    ? [{ label: homeLabel, href: '/' }, ...items]
    : [...items];

  return inputItems.map((item, index) => ({
    label: item.label,
    href: item.href ? toAbsoluteUrl(item.href, siteUrl) : undefined,
    position: index + 1,
    isCurrent: index === inputItems.length - 1,
  }));
}

export function breadcrumbsToSchemaItems(
  items: BreadcrumbItem[],
): Record<string, unknown>[] {
  return items
    .filter((item) => Boolean(item.href))
    .map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.label,
      item: item.href,
    }));
}
