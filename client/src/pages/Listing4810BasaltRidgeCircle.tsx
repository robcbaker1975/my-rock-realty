/**
 * Featured Listing Page — 4810 Basalt Ridge Circle, Castle Rock, CO 80108
 *
 * To update listing data: edit client/src/data/listings/4810-basalt-ridge-circle.ts
 * To create a new listing page: duplicate this file and the data file, then register a new route in App.tsx.
 */

import { useEffect } from "react";
import FeaturedListingPage from "@/components/FeaturedListingPage";
import listing from "@/data/listings/4810-basalt-ridge-circle";

export default function Listing4810BasaltRidgeCircle() {
  // Always open at the top of the page regardless of scroll position on the previous page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FeaturedListingPage listing={listing} />;
}
