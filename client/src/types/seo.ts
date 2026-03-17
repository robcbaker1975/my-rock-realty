export type SchemaNode = Record<string, unknown>;

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  brandName?: string;
  organizationName?: string;
  defaultLocale?: string;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultImage?: string;
  twitterHandle?: string;
}

export interface OpenGraphImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface RobotsDirectives {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

export interface OpenGraphInput {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  locale?: string;
  images?: OpenGraphImage[];
}

export interface TwitterInput {
  card?: 'summary' | 'summary_large_image';
  title?: string;
  description?: string;
  image?: string;
  creator?: string;
  site?: string;
}

export interface BreadcrumbItemInput {
  label: string;
  href?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  position: number;
  isCurrent: boolean;
}

export interface BreadcrumbOptions {
  siteUrl?: string;
  homeLabel?: string;
  includeHome?: boolean;
}

export interface RealEstateSchemaOptions {
  id?: string;
  name: string;
  url?: string;
  image?: string;
  description?: string;
  telephone?: string;
  email?: string;
  areaServed?: string | string[];
  sameAs?: string[];
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface ArticleSchemaOptions {
  headline: string;
  url: string;
  description?: string;
  image?: string | OpenGraphImage;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  publisherName?: string;
}

export interface MetaProps {
  title: string;
  description: string;
  path?: string;
  canonicalUrl?: string;
  image?: string | OpenGraphImage;
  openGraph?: OpenGraphInput;
  twitter?: TwitterInput;
  robots?: RobotsDirectives;
  breadcrumbs?: BreadcrumbItemInput[];
}

export interface ResolvedSeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  image?: OpenGraphImage;
  openGraph: Required<OpenGraphInput>;
  twitter: Required<TwitterInput>;
}

export interface SeoHeadProps {
  metadata: MetaProps;
  siteConfig?: Partial<SiteConfig>;
  schema?: (SchemaNode | null)[];
  includeAgentSchema?: boolean;
  includeWebsiteSchema?: boolean;
}

export interface BreadcrumbsProps extends BreadcrumbOptions {
  items: BreadcrumbItemInput[];
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  separator?: string;
  ariaLabel?: string;
  renderSchema?: boolean;
}
