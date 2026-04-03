/**
 * seo-metadata-map.mjs
 *
 * Centralized SEO metadata for all ranking pages that require route-specific
 * title / description / canonical / OG / schema injection.
 *
 * Each entry:
 *   slug        — matches the output HTML filename (without .html)
 *   title       — route-specific page title
 *   description — route-specific meta description (≤160 chars)
 *   canonical   — full canonical URL
 *   ogImage     — OG image URL (defaults to OG_IMAGE_DEFAULT if omitted)
 *   pageType    — used to select the correct schema group
 *
 * Page types and their schema:
 *   city        — RealEstateAgent + BreadcrumbList
 *   neighborhood — RealEstateAgent + BreadcrumbList
 *   guide       — RealEstateAgent + BreadcrumbList
 *   comparison  — RealEstateAgent + BreadcrumbList
 *   county      — RealEstateAgent + BreadcrumbList
 *   hub         — RealEstateAgent + BreadcrumbList
 */

export const SEO_METADATA_MAP = {
  // ── HOMEPAGE ─────────────────────────────────────────────────────────────
  "denver-homes-for-sale": {
    title: "Denver, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Denver, CO. My Rock Realty helps buyers find the right neighborhood, price range, and property type across the Denver metro.",
    canonical: "https://myrockhomes.com/denver-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
    ],
  },

  // ── CITY PAGES ────────────────────────────────────────────────────────────
  "boulder-co-homes-for-sale": {
    title: "Boulder, CO Homes for Sale | My Rock Realty",
    description:
      "Explore homes for sale in Boulder, CO. Find neighborhoods, pricing, and what to expect when buying in one of Colorado's most desirable cities.",
    canonical: "https://myrockhomes.com/boulder-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Homes for Sale", item: "https://myrockhomes.com/boulder-co-homes-for-sale/" },
    ],
  },
  "boulder-homes-for-sale": {
    title: "Living in Boulder, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Boulder, Colorado? Get a clear look at what Boulder actually feels like, who it fits, where the tradeoffs show up, and when Lafayette, Longmont, or University Hill may fit better.",
    canonical: "https://myrockhomes.com/boulder-homes-for-sale/",
    pageType: "hub",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
    ],
  },
  "fort-collins-co-homes-for-sale": {
    title: "Fort Collins, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Fort Collins, CO. Discover neighborhoods, pricing trends, and what to expect when buying in Fort Collins.",
    canonical: "https://myrockhomes.com/fort-collins-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Fort Collins Homes for Sale", item: "https://myrockhomes.com/fort-collins-co-homes-for-sale/" },
    ],
  },
  "fort-collins-homes-for-sale": {
    title: "Fort Collins Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Fort Collins, Colorado. My Rock Realty covers the Fort Collins market, neighborhoods, and what buyers should know.",
    canonical: "https://myrockhomes.com/fort-collins-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Fort Collins Homes for Sale", item: "https://myrockhomes.com/fort-collins-homes-for-sale/" },
    ],
  },
  "greeley-co-homes-for-sale": {
    title: "Greeley, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Greeley, CO. Explore neighborhoods, price ranges, and what buyers need to know about the Greeley real estate market.",
    canonical: "https://myrockhomes.com/greeley-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Greeley Homes for Sale", item: "https://myrockhomes.com/greeley-co-homes-for-sale/" },
    ],
  },
  "greeley-homes-for-sale": {
    title: "Greeley Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Greeley, Colorado. My Rock Realty covers the Greeley market, neighborhoods, and pricing for buyers.",
    canonical: "https://myrockhomes.com/greeley-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Greeley Homes for Sale", item: "https://myrockhomes.com/greeley-homes-for-sale/" },
    ],
  },
  "loveland-co-homes-for-sale": {
    title: "Loveland, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Loveland, CO. Explore neighborhoods, price ranges, and what to expect when buying in Loveland, Colorado.",
    canonical: "https://myrockhomes.com/loveland-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Loveland Homes for Sale", item: "https://myrockhomes.com/loveland-co-homes-for-sale/" },
    ],
  },
  "longmont-co-homes-for-sale": {
    title: "Living in Longmont, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Longmont, Colorado? Learn what Longmont actually feels like, who it fits, what the tradeoffs are, and when Boulder or Lafayette may make more sense.",
    canonical: "https://myrockhomes.com/longmont-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Longmont CO Homes for Sale", item: "https://myrockhomes.com/longmont-co-homes-for-sale/" },
    ],
  },
  "lafayette-co-homes-for-sale": {
    title: "Living in Lafayette, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Lafayette, Colorado? Learn what Lafayette actually feels like, who it fits, what the tradeoffs are, and when Boulder or Longmont may make more sense.",
    canonical: "https://myrockhomes.com/lafayette-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Lafayette CO Homes for Sale", item: "https://myrockhomes.com/lafayette-co-homes-for-sale/" },
    ],
  },
  "niwot-co-homes-for-sale": {
    title: "Niwot, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Niwot, CO. My Rock Realty covers the Niwot market, neighborhood character, and what buyers need to know.",
    canonical: "https://myrockhomes.com/niwot-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Niwot Homes for Sale", item: "https://myrockhomes.com/niwot-co-homes-for-sale/" },
    ],
  },
  "niwot-co-real-estate": {
    title: "Living in Niwot, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Niwot, Colorado? Learn what Niwot actually feels like, who it fits, what the tradeoffs are, and when Boulder, Longmont, or Louisville may make more sense.",
    canonical: "https://myrockhomes.com/niwot-co-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Niwot", item: "https://myrockhomes.com/niwot-co-real-estate/" },
    ],
  },
  "gunbarrel-co-real-estate": {
    title: "Living in Gunbarrel, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Gunbarrel, Colorado? Learn what Gunbarrel actually feels like, who it fits, what the tradeoffs are, and when Boulder or other neighborhoods may make more sense.",
    canonical: "https://myrockhomes.com/gunbarrel-co-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Gunbarrel", item: "https://myrockhomes.com/gunbarrel-co-real-estate/" },
    ],
  },
  "table-mesa-south-boulder-real-estate": {
    title: "Living in Table Mesa and South Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Table Mesa or South Boulder? Learn what the neighborhood actually feels like, who it fits, what the tradeoffs are, and when other Boulder neighborhoods may make more sense.",
    canonical: "https://myrockhomes.com/table-mesa-south-boulder-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Table Mesa / South Boulder", item: "https://myrockhomes.com/table-mesa-south-boulder-real-estate/" },
    ],
  },
  "north-boulder-nobo-real-estate": {
    title: "Living in North Boulder and NoBo: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in North Boulder (NoBo)? Learn what the neighborhood actually feels like, who it fits, what the tradeoffs are, and when other Boulder neighborhoods may make more sense.",
    canonical: "https://myrockhomes.com/north-boulder-nobo-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "North Boulder (NoBo)", item: "https://myrockhomes.com/north-boulder-nobo-real-estate/" },
    ],
  },
  "newlands-boulder-real-estate": {
    title: "Living in Newlands, Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Newlands, Boulder? Learn what the neighborhood actually feels like, who it fits, what the tradeoffs are, and when other Boulder neighborhoods may make more sense.",
    canonical: "https://myrockhomes.com/newlands-boulder-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Newlands", item: "https://myrockhomes.com/newlands-boulder-real-estate/" },
    ],
  },
  "mapleton-hill-boulder-real-estate": {
    title: "Living in Mapleton Hill, Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Mapleton Hill, Boulder? Learn what the neighborhood actually feels like, who it fits, what the tradeoffs are, and when other Boulder neighborhoods may make more sense.",
    canonical: "https://myrockhomes.com/mapleton-hill-boulder-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Mapleton Hill", item: "https://myrockhomes.com/mapleton-hill-boulder-real-estate/" },
    ],
  },
  "louisville-co-homes-for-sale": {
    title: "Living in Louisville, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Louisville, Colorado? Learn what Louisville actually feels like, who it fits, what the tradeoffs are, and when Boulder, Lafayette, or Superior may make more sense.",
    canonical: "https://myrockhomes.com/louisville-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Louisville", item: "https://myrockhomes.com/louisville-co-homes-for-sale/" },
    ],
  },
  "superior-co-homes-for-sale": {
    title: "Living in Superior, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Superior, Colorado? Learn what Superior actually feels like, who it fits, what the tradeoffs are, and when Louisville, Lafayette, or Boulder may make more sense.",
    canonical: "https://myrockhomes.com/superior-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Superior", item: "https://myrockhomes.com/superior-co-homes-for-sale/" },
    ],
  },
  "lyons-co-homes-for-sale": {
    title: "Living in Lyons, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living in Lyons, Colorado? Learn what Lyons actually feels like, who it fits, what the tradeoffs are, and when Boulder or Longmont may make more sense.",
    canonical: "https://myrockhomes.com/lyons-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder Area", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Lyons", item: "https://myrockhomes.com/lyons-co-homes-for-sale/" },
    ],
  },
  "windsor-co-homes-for-sale": {
    title: "Windsor, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Windsor, CO. Explore neighborhoods, pricing, and what buyers should know about Windsor real estate.",
    canonical: "https://myrockhomes.com/windsor-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Windsor Homes for Sale", item: "https://myrockhomes.com/windsor-co-homes-for-sale/" },
    ],
  },
  "johnstown-co-homes-for-sale": {
    title: "Johnstown, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Johnstown, CO. My Rock Realty covers Johnstown neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/johnstown-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Johnstown Homes for Sale", item: "https://myrockhomes.com/johnstown-co-homes-for-sale/" },
    ],
  },
  "evans-co-homes-for-sale": {
    title: "Evans, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Evans, CO. Discover neighborhoods, price ranges, and what to expect in the Evans real estate market.",
    canonical: "https://myrockhomes.com/evans-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Evans Homes for Sale", item: "https://myrockhomes.com/evans-co-homes-for-sale/" },
    ],
  },
  "platteville-co-homes-for-sale": {
    title: "Platteville, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Platteville, CO. My Rock Realty covers the Platteville market and what buyers need to know.",
    canonical: "https://myrockhomes.com/platteville-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Platteville Homes for Sale", item: "https://myrockhomes.com/platteville-co-homes-for-sale/" },
    ],
  },
  "lasalle-co-homes-for-sale": {
    title: "LaSalle, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in LaSalle, CO. My Rock Realty covers the LaSalle market and what buyers should know about this Weld County community.",
    canonical: "https://myrockhomes.com/lasalle-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "LaSalle Homes for Sale", item: "https://myrockhomes.com/lasalle-co-homes-for-sale/" },
    ],
  },
  "highlands-ranch-co-homes-for-sale": {
    title: "Highlands Ranch, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Highlands Ranch, CO. Explore neighborhoods, pricing, and what buyers need to know about this Douglas County community.",
    canonical: "https://myrockhomes.com/highlands-ranch-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Highlands Ranch Homes for Sale", item: "https://myrockhomes.com/highlands-ranch-co-homes-for-sale/" },
    ],
  },
  "castle-rock-co-homes-for-sale": {
    title: "Castle Rock, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Castle Rock, CO. Discover neighborhoods, pricing, and what to expect in the Castle Rock real estate market.",
    canonical: "https://myrockhomes.com/castle-rock-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Castle Rock Homes for Sale", item: "https://myrockhomes.com/castle-rock-co-homes-for-sale/" },
    ],
  },
  "castle-pines-co-homes-for-sale": {
    title: "Castle Pines, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Castle Pines, CO. My Rock Realty covers Castle Pines neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/castle-pines-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Castle Pines Homes for Sale", item: "https://myrockhomes.com/castle-pines-co-homes-for-sale/" },
    ],
  },
  "parker-co-homes-for-sale": {
    title: "Parker, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Parker, CO. Explore neighborhoods, pricing, and what buyers need to know about the Parker real estate market.",
    canonical: "https://myrockhomes.com/parker-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Parker Homes for Sale", item: "https://myrockhomes.com/parker-co-homes-for-sale/" },
    ],
  },
  "littleton-co-homes-for-sale": {
    title: "Littleton, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Littleton, CO. Discover neighborhoods, pricing, and what to expect when buying in Littleton.",
    canonical: "https://myrockhomes.com/littleton-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Littleton Homes for Sale", item: "https://myrockhomes.com/littleton-co-homes-for-sale/" },
    ],
  },
  "centennial-co-homes-for-sale": {
    title: "Centennial, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Centennial, CO. My Rock Realty covers Centennial neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/centennial-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Centennial Homes for Sale", item: "https://myrockhomes.com/centennial-co-homes-for-sale/" },
    ],
  },
  "lone-tree-co-homes-for-sale": {
    title: "Lone Tree, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Lone Tree, CO. Explore neighborhoods, pricing, and what buyers need to know about this Douglas County city.",
    canonical: "https://myrockhomes.com/lone-tree-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Lone Tree Homes for Sale", item: "https://myrockhomes.com/lone-tree-co-homes-for-sale/" },
    ],
  },
  "arvada-co-homes-for-sale": {
    title: "Arvada, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Arvada, CO. Discover neighborhoods, pricing, and what to expect when buying in Arvada.",
    canonical: "https://myrockhomes.com/arvada-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Arvada Homes for Sale", item: "https://myrockhomes.com/arvada-co-homes-for-sale/" },
    ],
  },
  "lakewood-co-homes-for-sale": {
    title: "Lakewood, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Lakewood, CO. My Rock Realty covers Lakewood neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/lakewood-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Lakewood Homes for Sale", item: "https://myrockhomes.com/lakewood-co-homes-for-sale/" },
    ],
  },
  "golden-homes-for-sale": {
    title: "Golden, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Golden, CO. Explore neighborhoods, pricing, and what buyers need to know about the Golden real estate market.",
    canonical: "https://myrockhomes.com/golden-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Golden Homes for Sale", item: "https://myrockhomes.com/golden-homes-for-sale/" },
    ],
  },
  "morrison-co-homes-for-sale": {
    title: "Morrison, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Morrison, CO. Discover what buyers need to know about this foothills community near Denver.",
    canonical: "https://myrockhomes.com/morrison-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Morrison Homes for Sale", item: "https://myrockhomes.com/morrison-co-homes-for-sale/" },
    ],
  },
  "westminster-co-homes-for-sale": {
    title: "Westminster, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Westminster, CO. My Rock Realty covers Westminster neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/westminster-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Westminster Homes for Sale", item: "https://myrockhomes.com/westminster-co-homes-for-sale/" },
    ],
  },
  "thornton-co-homes-for-sale": {
    title: "Thornton, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Thornton, CO. Explore neighborhoods, pricing, and what buyers need to know about the Thornton real estate market.",
    canonical: "https://myrockhomes.com/thornton-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Thornton Homes for Sale", item: "https://myrockhomes.com/thornton-co-homes-for-sale/" },
    ],
  },
  "northglenn-co-homes-for-sale": {
    title: "Northglenn, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Northglenn, CO. Discover neighborhoods, pricing, and what to expect in the Northglenn real estate market.",
    canonical: "https://myrockhomes.com/northglenn-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Northglenn Homes for Sale", item: "https://myrockhomes.com/northglenn-co-homes-for-sale/" },
    ],
  },
  "brighton-co-homes-for-sale": {
    title: "Brighton, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Brighton, CO. My Rock Realty covers Brighton neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/brighton-co-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Brighton Homes for Sale", item: "https://myrockhomes.com/brighton-co-homes-for-sale/" },
    ],
  },
  "commerce-city-homes-for-sale": {
    title: "Commerce City, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Commerce City, CO. Explore neighborhoods, pricing, and what buyers need to know about this Adams County city.",
    canonical: "https://myrockhomes.com/commerce-city-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Commerce City Homes for Sale", item: "https://myrockhomes.com/commerce-city-homes-for-sale/" },
    ],
  },
  "monument-co-real-estate": {
    title: "Monument, CO Real Estate | My Rock Realty",
    description:
      "Browse homes and real estate in Monument, CO. Discover what buyers need to know about this El Paso County community north of Colorado Springs.",
    canonical: "https://myrockhomes.com/monument-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Monument Real Estate", item: "https://myrockhomes.com/monument-co-real-estate/" },
    ],
  },
  "woodland-park-co-real-estate": {
    title: "Woodland Park, CO Real Estate | My Rock Realty",
    description:
      "Find homes and real estate in Woodland Park, CO. My Rock Realty covers this Teller County mountain community and what buyers need to know.",
    canonical: "https://myrockhomes.com/woodland-park-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Woodland Park Real Estate", item: "https://myrockhomes.com/woodland-park-co-real-estate/" },
    ],
  },
  "black-forest-co-real-estate": {
    title: "Black Forest, CO Real Estate | My Rock Realty",
    description:
      "Search homes and real estate in Black Forest, CO. Explore this El Paso County community, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/black-forest-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Black Forest Real Estate", item: "https://myrockhomes.com/black-forest-co-real-estate/" },
    ],
  },
  "peyton-co-real-estate": {
    title: "Peyton, CO Real Estate | My Rock Realty",
    description:
      "Browse homes and real estate in Peyton, CO. Discover what buyers need to know about this rural El Paso County community east of Colorado Springs.",
    canonical: "https://myrockhomes.com/peyton-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Peyton Real Estate", item: "https://myrockhomes.com/peyton-co-real-estate/" },
    ],
  },
  "palmer-lake-co-real-estate": {
    title: "Palmer Lake, CO Real Estate | My Rock Realty",
    description:
      "Find homes and real estate in Palmer Lake, CO. My Rock Realty covers this small mountain community between Denver and Colorado Springs.",
    canonical: "https://myrockhomes.com/palmer-lake-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Palmer Lake Real Estate", item: "https://myrockhomes.com/palmer-lake-co-real-estate/" },
    ],
  },
  "fountain-co-real-estate": {
    title: "Fountain, CO Real Estate | My Rock Realty",
    description:
      "Search homes and real estate in Fountain, CO. Explore this El Paso County community south of Colorado Springs, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/fountain-co-real-estate/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Fountain Real Estate", item: "https://myrockhomes.com/fountain-co-real-estate/" },
    ],
  },

  // ── DENVER NEIGHBORHOOD / PROPERTY TYPE PAGES ────────────────────────────
  "wash-park-denver-homes-for-sale": {
    title: "Washington Park Homes for Sale | Denver | My Rock Realty",
    description:
      "Find homes for sale in Washington Park, Denver. Explore Wash Park neighborhood character, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/wash-park-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Washington Park", item: "https://myrockhomes.com/wash-park-denver-homes-for-sale/" },
    ],
  },
  "cherry-creek-denver-homes-for-sale": {
    title: "Cherry Creek Homes for Sale | Denver | My Rock Realty",
    description:
      "Search homes for sale in Cherry Creek, Denver. Discover neighborhood character, pricing, and what buyers need to know about Cherry Creek real estate.",
    canonical: "https://myrockhomes.com/cherry-creek-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Cherry Creek", item: "https://myrockhomes.com/cherry-creek-denver-homes-for-sale/" },
    ],
  },
  "lohi-denver-homes-for-sale": {
    title: "LoHi Homes for Sale | Denver | My Rock Realty",
    description:
      "Find homes for sale in LoHi (Lower Highlands), Denver. Explore neighborhood character, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/lohi-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "LoHi", item: "https://myrockhomes.com/lohi-denver-homes-for-sale/" },
    ],
  },
  "rino-denver-homes-for-sale": {
    title: "RiNo Homes for Sale | Denver | My Rock Realty",
    description:
      "Search homes for sale in RiNo (River North Art District), Denver. Discover neighborhood character, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/rino-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "RiNo", item: "https://myrockhomes.com/rino-denver-homes-for-sale/" },
    ],
  },
  "central-park-denver-homes-for-sale": {
    title: "Central Park Homes for Sale | Denver | My Rock Realty",
    description:
      "Find homes for sale in Central Park, Denver. Explore this planned community, pricing, and what buyers need to know about Central Park real estate.",
    canonical: "https://myrockhomes.com/central-park-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Central Park", item: "https://myrockhomes.com/central-park-denver-homes-for-sale/" },
    ],
  },
  "sloan-lake-denver-homes-for-sale": {
    title: "Sloan Lake Homes for Sale | Denver | My Rock Realty",
    description:
      "Search homes for sale near Sloan Lake, Denver. Discover neighborhood character, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/sloan-lake-denver-homes-for-sale/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Homes for Sale", item: "https://myrockhomes.com/denver-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "Sloan Lake", item: "https://myrockhomes.com/sloan-lake-denver-homes-for-sale/" },
    ],
  },
  "denver-condos-for-sale": {
    title: "Denver Condos for Sale | My Rock Realty",
    description:
      "Browse condos for sale in Denver, CO. My Rock Realty covers condo neighborhoods, pricing, and what buyers need to know about Denver condo ownership.",
    canonical: "https://myrockhomes.com/denver-condos-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Condos for Sale", item: "https://myrockhomes.com/denver-condos-for-sale/" },
    ],
  },
  "denver-townhomes-for-sale": {
    title: "Denver Townhomes for Sale | My Rock Realty",
    description:
      "Find townhomes for sale in Denver, CO. Explore neighborhoods, pricing, and what buyers need to know about Denver townhome ownership.",
    canonical: "https://myrockhomes.com/denver-townhomes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Townhomes for Sale", item: "https://myrockhomes.com/denver-townhomes-for-sale/" },
    ],
  },
  "denver-luxury-homes-for-sale": {
    title: "Denver Luxury Homes for Sale | My Rock Realty",
    description:
      "Search luxury homes for sale in Denver, CO. My Rock Realty covers luxury neighborhoods, pricing, and what buyers need to know about the Denver luxury market.",
    canonical: "https://myrockhomes.com/denver-luxury-homes-for-sale/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Luxury Homes", item: "https://myrockhomes.com/denver-luxury-homes-for-sale/" },
    ],
  },
  "denver-new-construction-homes": {
    title: "Denver New Construction Homes | My Rock Realty",
    description:
      "Browse new construction homes in Denver, CO. Discover builders, communities, pricing, and what buyers need to know about buying new in Denver.",
    canonical: "https://myrockhomes.com/denver-new-construction-homes/",
    pageType: "city",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver New Construction", item: "https://myrockhomes.com/denver-new-construction-homes/" },
    ],
  },

  // ── COUNTY PAGES ─────────────────────────────────────────────────────────
  "adams-co-homes-for-sale": {
    title: "Adams County, CO Homes for Sale | My Rock Realty",
    description:
      "Search homes for sale in Adams County, CO. Explore cities, neighborhoods, pricing, and what buyers need to know about Adams County real estate.",
    canonical: "https://myrockhomes.com/adams-co-homes-for-sale/",
    pageType: "county",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Adams County Homes for Sale", item: "https://myrockhomes.com/adams-co-homes-for-sale/" },
    ],
  },
  "douglas-co-homes-for-sale": {
    title: "Douglas County, CO Homes for Sale | My Rock Realty",
    description:
      "Browse homes for sale in Douglas County, CO. Discover cities, neighborhoods, pricing, and what buyers need to know about Douglas County real estate.",
    canonical: "https://myrockhomes.com/douglas-co-homes-for-sale/",
    pageType: "county",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Douglas County Homes for Sale", item: "https://myrockhomes.com/douglas-co-homes-for-sale/" },
    ],
  },
  "jefferson-co-homes-for-sale": {
    title: "Jefferson County, CO Homes for Sale | My Rock Realty",
    description:
      "Find homes for sale in Jefferson County, CO. My Rock Realty covers Jeffco cities, neighborhoods, pricing, and what buyers need to know.",
    canonical: "https://myrockhomes.com/jefferson-co-homes-for-sale/",
    pageType: "county",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Jefferson County Homes for Sale", item: "https://myrockhomes.com/jefferson-co-homes-for-sale/" },
    ],
  },

  // ── MILITARY BASE PAGES (non-SEO-injected) ─────────────────────────────────
  "buckley-space-force-base": {
    title: "Buckley Space Force Base Housing & Relocation | My Rock Realty",
    description:
      "Homes and relocation resources near Buckley Space Force Base in Aurora, CO. My Rock Realty helps military buyers and PCS movers find housing near Buckley SFB.",
    canonical: "https://myrockhomes.com/buckley-space-force-base/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Military Relocation", item: "https://myrockhomes.com/military-relocation/" },
      { "@type": "ListItem", position: 3, name: "Buckley Space Force Base", item: "https://myrockhomes.com/buckley-space-force-base/" },
    ],
  },

  // ── GUIDES / BUYING RESOURCES ─────────────────────────────────────────────
  "buying-a-home-in-denver": {
    title: "Buying a Home in Denver, CO | My Rock Realty",
    description:
      "A practical guide to buying a home in Denver, CO. Learn the process, what to expect, and how My Rock Realty helps Denver buyers from search to close.",
    canonical: "https://myrockhomes.com/buying-a-home-in-denver/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Buying a Home in Denver", item: "https://myrockhomes.com/buying-a-home-in-denver/" },
    ],
  },
  "first-time-home-buyer-denver": {
    title: "First-Time Home Buyer in Denver | My Rock Realty",
    description:
      "A guide for first-time home buyers in Denver, CO. Learn the process, programs, and what to expect when buying your first home in Denver.",
    canonical: "https://myrockhomes.com/first-time-home-buyer-denver/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "First-Time Home Buyer Denver", item: "https://myrockhomes.com/first-time-home-buyer-denver/" },
    ],
  },
  "denver-home-buying-process": {
    title: "Denver Home Buying Process | My Rock Realty",
    description:
      "Understand the Denver home buying process step by step. My Rock Realty walks buyers through every stage from pre-approval to closing.",
    canonical: "https://myrockhomes.com/denver-home-buying-process/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Home Buying Process", item: "https://myrockhomes.com/denver-home-buying-process/" },
    ],
  },
  "cost-of-living-in-denver-colorado": {
    title: "Cost of Living in Denver, Colorado | My Rock Realty",
    description:
      "Understand the real cost of living in Denver, CO. My Rock Realty covers housing costs, expenses, and what buyers and movers need to know.",
    canonical: "https://myrockhomes.com/cost-of-living-in-denver-colorado/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Cost of Living in Denver", item: "https://myrockhomes.com/cost-of-living-in-denver-colorado/" },
    ],
  },
  "relocating-to-denver-colorado": {
    title: "Relocating to Denver, Colorado | My Rock Realty",
    description:
      "A guide to relocating to Denver, CO. My Rock Realty covers neighborhoods, the buying process, and what relocating buyers need to know.",
    canonical: "https://myrockhomes.com/relocating-to-denver-colorado/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Relocating to Denver", item: "https://myrockhomes.com/relocating-to-denver-colorado/" },
    ],
  },
  "denver-real-estate-market-report-2025": {
    title: "Denver Real Estate Market Report 2025 | My Rock Realty",
    description:
      "The 2025 Denver real estate market report. My Rock Realty covers pricing trends, inventory, and what buyers and sellers need to know about the Denver market.",
    canonical: "https://myrockhomes.com/denver-real-estate-market-report-2025/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Denver Market Report 2025", item: "https://myrockhomes.com/denver-real-estate-market-report-2025/" },
    ],
  },
  "colorado-home-buying-workshop-resources": {
    title: "Colorado Home Buying Workshop Resources | My Rock Realty",
    description:
      "Access Colorado home buying workshop resources from My Rock Realty. Guides, checklists, and tools for buyers navigating the Colorado real estate market.",
    canonical: "https://myrockhomes.com/colorado-home-buying-workshop-resources/",
    pageType: "guide",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Workshop Resources", item: "https://myrockhomes.com/colorado-home-buying-workshop-resources/" },
    ],
  },

  // ── COMPARISON PAGES ──────────────────────────────────────────────────────
  "adams-county-vs-jefferson-county": {
    title: "Adams County vs Jefferson County, CO | My Rock Realty",
    description:
      "Compare Adams County and Jefferson County, Colorado. My Rock Realty covers the real tradeoffs, pricing, and what buyers need to know before choosing.",
    canonical: "https://myrockhomes.com/adams-county-vs-jefferson-county/",
    pageType: "comparison",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Adams County vs Jefferson County", item: "https://myrockhomes.com/adams-county-vs-jefferson-county/" },
    ],
  },
  "douglas-county-vs-weld-county": {
    title: "Douglas County vs Weld County, CO | My Rock Realty",
    description:
      "Compare Douglas County and Weld County, Colorado. My Rock Realty covers the real tradeoffs, pricing, and what buyers need to know before choosing.",
    canonical: "https://myrockhomes.com/douglas-county-vs-weld-county/",
    pageType: "comparison",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Douglas County vs Weld County", item: "https://myrockhomes.com/douglas-county-vs-weld-county/" },
    ],
  },
  "boulder-vs-fort-collins": {
    title: "Boulder vs Fort Collins, CO | My Rock Realty",
    description:
      "Boulder vs Fort Collins: a real comparison for Colorado buyers. My Rock Realty covers the tradeoffs, pricing, and what buyers need to know before choosing.",
    canonical: "https://myrockhomes.com/boulder-vs-fort-collins/",
    pageType: "comparison",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder vs Fort Collins", item: "https://myrockhomes.com/boulder-vs-fort-collins/" },
    ],
  },
  "university-hill-cu-boulder-real-estate": {
    title: "Living Near University Hill and CU Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
    description:
      "Thinking about living near University Hill and CU Boulder? Learn what this part of Boulder actually feels like, who it fits, what the tradeoffs are, and when another part of Boulder may make more sense.",
    canonical: "https://myrockhomes.com/university-hill-cu-boulder-real-estate/",
    pageType: "neighborhood",
    breadcrumbs: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Boulder", item: "https://myrockhomes.com/boulder-homes-for-sale/" },
      { "@type": "ListItem", position: 3, name: "University Hill / CU Boulder", item: "https://myrockhomes.com/university-hill-cu-boulder-real-estate/" },
    ],
  },
};
