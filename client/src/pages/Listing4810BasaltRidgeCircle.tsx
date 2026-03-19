/**
 * Featured Listing Page — 4810 Basalt Ridge Circle, Castle Rock, CO 80108
 *
 * To update listing data: edit client/src/data/listings/4810-basalt-ridge-circle.ts
 * To create a new listing page: duplicate this file and the data file, then register a new route in App.tsx.
 */

import FeaturedListingPage from "@/components/FeaturedListingPage";
import listing from "@/data/listings/4810-basalt-ridge-circle";

export default function Listing4810BasaltRidgeCircle() {
  return <FeaturedListingPage listing={listing} />;
}
