/**
 * Featured Listing Data — 4810 Basalt Ridge Circle, Castle Rock, CO 80108
 *
 * To update this listing: edit the fields below.
 * To duplicate for a new listing: copy this file, rename it, and update all fields.
 * Then create a new page file importing the new data (see pages/Listing4810BasaltRidgeCircle.tsx as reference).
 */

export interface ListingPhoto {
  url: string;
  alt: string;
}

export interface FeaturedListingData {
  // Core identity
  slug: string;
  status: "active" | "under-contract" | "sold" | "coming-soon";

  // Address
  address: string;
  city: string;
  state: string;
  zip: string;
  fullAddress: string;

  // Price & stats
  price: string;
  pricePerSqFt: string;
  estimatedMonthly: string;
  beds: number;
  baths: number;
  bathsFull: number;
  bathsThreeQuarter: number;
  bathsHalf: number;
  sqFt: string;
  aboveGradeSqFt: string;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  hoaMonthly: string;
  hoaQuarterly: string;
  community: string;
  annualTaxes: string;
  mlsNumber: string;
  dateOnMarket: string;

  // Copy
  tagline: string;
  shortOverview: string;
  mainDescription: string;
  highlights: string[];
  sellerConcession: string;

  // Photos
  heroPhoto: ListingPhoto;
  galleryPhotos: ListingPhoto[];

  // Agent / contact
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  brokerage: string;

  // SEO
  pageTitle: string;
  metaDescription: string;
  canonicalUrl: string;
}

const listing: FeaturedListingData = {
  slug: "4810-basalt-ridge-circle-castle-rock-co",
  status: "active",

  address: "4810 Basalt Ridge Circle",
  city: "Castle Rock",
  state: "CO",
  zip: "80108",
  fullAddress: "4810 Basalt Ridge Circle, Castle Rock, CO 80108",

  price: "$729,927",
  pricePerSqFt: "$197",
  estimatedMonthly: "$4,461/mo",
  beds: 3,
  baths: 4,
  bathsFull: 2,
  bathsThreeQuarter: 1,
  bathsHalf: 1,
  sqFt: "3,698",
  aboveGradeSqFt: "2,509",
  lotSize: "7,361 sq ft",
  yearBuilt: 2019,
  propertyType: "Single Family Residence",
  hoaMonthly: "$96/mo",
  hoaQuarterly: "$287/quarter",
  community: "Terrain",
  annualTaxes: "$4,817/yr",
  mlsNumber: "7194804",
  dateOnMarket: "March 19, 2026",

  tagline: "Refined Design. Colorado Lifestyle. Terrain Community.",
  shortOverview:
    "Beautifully appointed and filled with natural light, this exceptional home in Castle Rock's sought-after Terrain community offers the perfect balance of refined design, everyday comfort, and Colorado lifestyle.",

  mainDescription: `This beautifully designed home blends style, functionality, and livability in one of Castle Rock's most desirable communities. The kitchen is both elegant and practical, featuring granite countertops, abundant white cabinetry, stainless steel appliances, a custom KitchenAid range with hood, combo oven/microwave, and a large island that opens seamlessly into the spacious great room with fireplace.

A dramatic dining area with soaring ceilings and walls of glass creates an elevated setting for gatherings, while the main-floor office provides flexibility for remote work or additional living space. The home is prewired for sound in the living room, ready for speaker installation.

Upstairs, a versatile loft offers additional living space, while the private primary suite features a tray ceiling, dual vanities, and a custom shower. The unfinished basement provides excellent potential for future expansion.

Step outside to a covered patio and fenced backyard, ready for your personal landscaping vision. Located just a short walk to the Ravenwood pool and community trails, residents enjoy access to a clubhouse, parks, dog park, playgrounds, and miles of scenic trails — all with convenient access to Downtown Castle Rock, dining, shopping, and outdoor recreation.`,

  sellerConcession:
    "$12,500 seller concession available — may be used for interest rate buydown, closing costs, prepaid items, and other allowable buyer closing expenses, subject to lender approval.",

  highlights: [
    "$12,500 seller concession offered",
    "Sought-after Terrain community",
    "Bright, open floor plan",
    "Granite countertops & large kitchen island",
    "Custom KitchenAid range with hood",
    "Great room with fireplace",
    "Soaring-ceiling dining area with walls of glass",
    "Main-floor office",
    "Upstairs loft",
    "Primary suite with tray ceiling, dual vanities & custom shower",
    "Unfinished basement — future expansion potential",
    "Covered patio & fenced backyard",
    "Mountain views",
    "3-car attached garage",
    "Prewired living room sound system",
    "2-minute walk to Ravenwood pool",
    "5-minute walk to community trails",
    "Clubhouse, dog park, parks, playgrounds & miles of trails",
  ],

  heroPhoto: {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/3-web-or-mls-MSW22160-DayToDusk-Golden-4_f6034bf0.jpg",
    alt: "4810 Basalt Ridge Circle Castle Rock CO — twilight exterior",
  },

  galleryPhotos: [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/1-web-or-mls-MSW22155_2bcb3bd9.jpg",
      alt: "Exterior front — 4810 Basalt Ridge Circle",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/5-web-or-mls-MSW21924_with_fire_273f94ab.jpg",
      alt: "Great room with fireplace",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/10-web-or-mls-MSW21954_26074957.jpg",
      alt: "Kitchen with granite island and white cabinetry",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/21-web-or-mls-MSW22024_e8b730da.jpg",
      alt: "Dining area with soaring ceilings and walls of glass",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/26-web-or-mls-MSW22034_93768d17.jpg",
      alt: "Loft overview looking down at open floor plan",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/44-web-or-mls-MSW22109_fa31793c.jpg",
      alt: "Primary suite with barn door and tray ceiling",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/47-web-or-mls-MSW22119_d261e0d0.jpg",
      alt: "Primary bath with dual vanities and custom shower",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/38-web-or-mls-MSW22084_3957a7a5.jpg",
      alt: "Secondary bedroom",
    },
  ],

  agentName: "Robert Baker",
  agentPhone: "(720) 363-6544",
  agentEmail: "Rob@MyRockHomes.com",
  brokerage: "My Rock Realty, LLC",

  pageTitle:
    "4810 Basalt Ridge Circle, Castle Rock CO 80108 | $729,927 | My Rock Realty",
  metaDescription:
    "3 bed, 4 bath, 3,698 sq ft home in Castle Rock's Terrain community. Granite kitchen, great room with fireplace, primary suite, 3-car garage, covered patio. $12,500 seller concession. Listed by Robert Baker, My Rock Realty.",
  canonicalUrl:
    "https://www.myrockhomes.com/featured/4810-basalt-ridge-circle-castle-rock-co",
};

export default listing;
