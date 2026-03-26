import type {
  MetaProps,
  OpenGraphImage,
  ResolvedSeoMetadata,
  RobotsDirectives,
  SiteConfig,
} from '../../types/seo';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  siteName: 'MyRockHomes.com',
  siteUrl: 'https://myrockhomes.com',
  brandName: 'My Rock Realty',
  organizationName: 'My Rock Realty',
  defaultLocale: 'en_US',
  defaultTitle: 'MyRockHomes.com',
  defaultDescription:
    'Denver-first real estate authority platform for homes, neighborhoods, suburbs, property types, guides, comparisons, and relocation.',
  defaultImage: 'https://myrockhomes.com/og/default.jpg',
  twitterHandle: '@myrockhomes',
};

const TITLE_SEPARATOR = ' | ';

function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '');
}

function ensureLeadingSlash(value: string): string {
  if (!value) return '/';
  return value.startsWith('/') ? value : `/${value}`;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function clampText(value: string, maxLength: number): string {
  const clean = normalizeWhitespace(value);
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1).trimEnd()}…`;
}

export function resolveSiteConfig(overrides?: Partial<SiteConfig>): SiteConfig {
  return {
    ...DEFAULT_SITE_CONFIG,
    ...overrides,
  };
}

export function toAbsoluteUrl(pathOrUrl: string | undefined, siteUrl?: string): string {
  const base = stripTrailingSlash(siteUrl || DEFAULT_SITE_CONFIG.siteUrl);

  if (!pathOrUrl) return base;
  if (/^https?:\/\//i.test(pathOrUrl)) {
    // Preserve trailing slash on root URLs (e.g. https://myrockhomes.com/) but strip from paths
    const isRootUrl = /^https?:\/\/[^\/]+\/?$/.test(pathOrUrl);
    return isRootUrl ? pathOrUrl.replace(/\/*$/, '/') : stripTrailingSlash(pathOrUrl);
  }

  return `${base}${ensureLeadingSlash(pathOrUrl)}`;
}

export function buildPageTitle(title: string, siteName?: string): string {
  const cleanTitle = normalizeWhitespace(title);
  const resolvedSiteName = normalizeWhitespace(siteName || DEFAULT_SITE_CONFIG.siteName);

  if (!cleanTitle) return resolvedSiteName;
  if (cleanTitle.includes(resolvedSiteName)) return cleanTitle;

  return `${cleanTitle}${TITLE_SEPARATOR}${resolvedSiteName}`;
}

export function buildCanonicalUrl(
  input: Pick<MetaProps, 'canonicalUrl' | 'path'>,
  siteConfig?: Partial<SiteConfig>,
): string {
  const config = resolveSiteConfig(siteConfig);
  const candidate = input.canonicalUrl || input.path || '/';
  return toAbsoluteUrl(candidate, config.siteUrl);
}

export function buildRobotsContent(robots?: RobotsDirectives): string {
  const resolved: Required<RobotsDirectives> = {
    index: robots?.index ?? true,
    follow: robots?.follow ?? true,
    noarchive: robots?.noarchive ?? false,
    nosnippet: robots?.nosnippet ?? false,
    noimageindex: robots?.noimageindex ?? false,
    maxSnippet: robots?.maxSnippet ?? -1,
    maxImagePreview: robots?.maxImagePreview ?? 'large',
    maxVideoPreview: robots?.maxVideoPreview ?? -1,
  };

  const directives: string[] = [
    resolved.index ? 'index' : 'noindex',
    resolved.follow ? 'follow' : 'nofollow',
  ];

  if (resolved.noarchive) directives.push('noarchive');
  if (resolved.nosnippet) directives.push('nosnippet');
  if (resolved.noimageindex) directives.push('noimageindex');

  directives.push(`max-snippet:${resolved.maxSnippet}`);
  directives.push(`max-image-preview:${resolved.maxImagePreview}`);
  directives.push(`max-video-preview:${resolved.maxVideoPreview}`);

  return directives.join(', ');
}

export function resolveOpenGraphImage(
  image: string | OpenGraphImage | undefined,
  siteConfig?: Partial<SiteConfig>,
): OpenGraphImage | undefined {
  const config = resolveSiteConfig(siteConfig);
  const fallback = config.defaultImage;

  if (!image && !fallback) return undefined;

  const normalized: OpenGraphImage =
    typeof image === 'string'
      ? { url: image }
      : image || { url: fallback as string };

  return {
    ...normalized,
    url: toAbsoluteUrl(normalized.url, config.siteUrl),
  };
}

export function buildSeoMetadata(
  input: MetaProps,
  siteConfig?: Partial<SiteConfig>,
): ResolvedSeoMetadata {
  const config = resolveSiteConfig(siteConfig);

  const title = buildPageTitle(input.title, config.siteName);
  const description = clampText(input.description, 160);
  const canonicalUrl = buildCanonicalUrl(input, config);
  const image = resolveOpenGraphImage(input.image, config);

  const openGraph = {
    type: input.openGraph?.type || 'website',
    title: input.openGraph?.title || title,
    description: input.openGraph?.description || description,
    url: input.openGraph?.url || canonicalUrl,
    siteName: input.openGraph?.siteName || config.siteName,
    locale: input.openGraph?.locale || config.defaultLocale || 'en_US',
    images: input.openGraph?.images?.length
      ? input.openGraph.images.map((item) => ({
          ...item,
          url: toAbsoluteUrl(item.url, config.siteUrl),
        }))
      : image
        ? [image]
        : [],
  };

  const twitter = {
    card: input.twitter?.card || (image ? 'summary_large_image' : 'summary'),
    title: input.twitter?.title || title,
    description: input.twitter?.description || description,
    image: input.twitter?.image
      ? toAbsoluteUrl(input.twitter.image, config.siteUrl)
      : image?.url || '',
    creator: input.twitter?.creator || config.twitterHandle || '',
    site: input.twitter?.site || config.twitterHandle || '',
  } as const;

  return {
    title,
    description,
    canonicalUrl,
    robots: buildRobotsContent(input.robots),
    image,
    openGraph,
    twitter,
  };
}
