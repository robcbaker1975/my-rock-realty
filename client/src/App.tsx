import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import IdxTest from "./pages/IdxTest";
import ListingResults from "./pages/ListingResults";
import ListingDetails from "./pages/ListingDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import FairHousing from "./pages/FairHousing";
import WorkshopDraft from "./pages/WorkshopDraft";
import JoinUs from "./pages/JoinUs";
import Coaching from "./pages/Coaching";
import Accessibility from "./pages/Accessibility";
import DenverHomesForSale from "./pages/DenverHomesForSale";
import DenverCondosForSale from "./pages/DenverCondosForSale";
import DenverTownhomesForSale from "./pages/DenverTownhomesForSale";
import DenverLuxuryHomesForSale from "./pages/DenverLuxuryHomesForSale";
import DenverNewConstructionHomes from "./pages/DenverNewConstructionHomes";
import WashParkDenverHomesForSale from "./pages/WashParkDenverHomesForSale";
import CherryCreekDenverHomesForSale from "./pages/CherryCreekDenverHomesForSale";
import LohiDenverHomesForSale from "./pages/LohiDenverHomesForSale";
import RinoDenverHomesForSale from "./pages/RinoDenverHomesForSale";
import CentralParkDenverHomesForSale from "./pages/CentralParkDenverHomesForSale";
import SloanLakeDenverHomesForSale from "./pages/SloanLakeDenverHomesForSale";
import ParkerCoHomesForSale from "./pages/ParkerCoHomesForSale";
import HighlandsRanchCoHomesForSale from "./pages/HighlandsRanchCoHomesForSale";
import CastleRockCoHomesForSale from "./pages/CastleRockCoHomesForSale";
import LittletonCoHomesForSale from "./pages/LittletonCoHomesForSale";
import ArvadaCoHomesForSale from "./pages/ArvadaCoHomesForSale";
import WashParkDenverBuyerGuide from "./pages/WashParkDenverBuyerGuide";
import CherryCreekDenverBuyerGuide from "./pages/CherryCreekDenverBuyerGuide";
import LohiDenverBuyerGuide from "./pages/LohiDenverBuyerGuide";
import RiNoDenverBuyerGuide from "./pages/RiNoDenverBuyerGuide";
import CentralParkDenverBuyerGuide from "./pages/CentralParkDenverBuyerGuide";
import SloanLakeDenverBuyerGuide from "./pages/SloanLakeDenverBuyerGuide";
import BuyingAHomeInDenver from "./pages/BuyingAHomeInDenver";
import FirstTimeHomeBuyerDenver from "./pages/FirstTimeHomeBuyerDenver";
import DenverHomeBuyingProcess from "./pages/DenverHomeBuyingProcess";
import CostOfLivingInDenverColorado from "./pages/CostOfLivingInDenverColorado";
import RelocatingToDenverColorado from "./pages/RelocatingToDenverColorado";
import DenverVsColoradoSprings from "./pages/DenverVsColoradoSprings";
import DenverVsBoulder from "./pages/DenverVsBoulder";
import DenverVsFortCollins from "./pages/DenverVsFortCollins";
import BoulderCoHomesForSale from "./pages/BoulderCoHomesForSale";
import BoulderHomesForSale from "./pages/BoulderHomesForSale";
import LafayetteCoHomesForSale from "./pages/LafayetteCoHomesForSale";
import LongmontCoHomesForSale from "./pages/LongmontCoHomesForSale";
import NiwotCoHomesForSale from "./pages/NiwotCoHomesForSale";
import ColoradoSpringsCoHomesForSale from "./pages/ColoradoSpringsCoHomesForSale";
import MovingToColoradoSprings from "./pages/MovingToColoradoSprings";
import MonumentCoRealEstate from "./pages/MonumentCoRealEstate";
import BriargateColoradoSpringsRealEstate from "./pages/BriargateColoradoSpringsRealEstate";
import NorthgateColoradoSpringsRealEstate from "./pages/NorthgateColoradoSpringsRealEstate";
import FlyingHorseColoradoSpringsRealEstate from "./pages/FlyingHorseColoradoSpringsRealEstate";
import BlackForestCoRealEstate from "./pages/BlackForestCoRealEstate";
import FalconCoRealEstate from "./pages/FalconCoRealEstate";
import BanningLewisRanchColoradoSpringsRealEstate from "./pages/BanningLewisRanchColoradoSpringsRealEstate";
import OldColoradoCityColoradoSpringsRealEstate from "./pages/OldColoradoCityColoradoSpringsRealEstate";
import ColoradoSpringsHomesForSale from "./pages/ColoradoSpringsHomesForSale";
import ManitouSpringsCoHomesForSale from "./pages/ManitouSpringsCoHomesForSale";
import WidefieldCoHomesForSale from "./pages/WidefieldCoHomesForSale";
import PalmerLakeCoHomesForSale from "./pages/PalmerLakeCoHomesForSale";
import FortCollinsCoHomesForSale from "./pages/FortCollinsCoHomesForSale";
import FortCollinsHomesForSale from "./pages/FortCollinsHomesForSale";
import LovelandCoHomesForSale from "./pages/LovelandCoHomesForSale";
import WindsorCoHomesForSale from "./pages/WindsorCoHomesForSale";
import JohnstownCoHomesForSale from "./pages/JohnstownCoHomesForSale";
import PuebloCountyHomeSearchComingSoon from "./pages/PuebloCountyHomeSearchComingSoon";
import PuebloHomeSearchComingSoon from "./pages/PuebloHomeSearchComingSoon";
import GreeleyCoHomesForSale from "./pages/GreeleyCoHomesForSale";
import GreeleyHomesForSale from "./pages/GreeleyHomesForSale";
import EvansCoHomesForSale from "./pages/EvansCoHomesForSale";
import PlattevilleCoHomesForSale from "./pages/PlattevilleCoHomesForSale";
import LaSalleCoHomesForSale from "./pages/LaSalleCoHomesForSale";
import DouglasCoHomesForSale from "./pages/DouglasCoHomesForSale";
import CastlePinesCoHomesForSale from "./pages/CastlePinesCoHomesForSale";
import CentennialCoHomesForSale from "./pages/CentennialCoHomesForSale";
import LoneTreeCoHomesForSale from "./pages/LoneTreeCoHomesForSale";
import JeffersonCoHomesForSale from "./pages/JeffersonCoHomesForSale";
import GoldenHomesForSale from "./pages/GoldenHomesForSale";
import LakewoodCoHomesForSale from "./pages/LakewoodCoHomesForSale";
import MorrisonCoHomesForSale from "./pages/MorrisonCoHomesForSale";
import WestminsterCoHomesForSale from "./pages/WestminsterCoHomesForSale";
import AdamsCoHomesForSale from "./pages/AdamsCoHomesForSale";
import CommerceCityHomesForSale from "./pages/CommerceCityHomesForSale";
import BrightonCoHomesForSale from "./pages/BrightonCoHomesForSale";
import ThorntonCoHomesForSale from "./pages/ThorntonCoHomesForSale";
import NorthglennCoHomesForSale from "./pages/NorthglennCoHomesForSale";
import AdamsCountyVsJeffersonCounty from "./pages/AdamsCountyVsJeffersonCounty";
import DouglasCountyVsWeldCounty from "./pages/DouglasCountyVsWeldCounty";
import BoulderVsFortCollins from "./pages/BoulderVsFortCollins";
import FlexibleListingPlans from "./pages/FlexibleListingPlans";
import MilitaryRelocation from "./pages/MilitaryRelocation";
import PcsColorado from "./pages/PcsColorado";
import VaHomeLoansColorado from "./pages/VaHomeLoansColorado";
import FortCarson from "./pages/FortCarson";
import PetersonSpaceForceBase from "./pages/PetersonSpaceForceBase";
import SchrieverSpaceForceBase from "./pages/SchrieverSpaceForceBase";
import BuckleySpaceForceBase from "./pages/BuckleySpaceForceBase";
import UsAirForceAcademy from "./pages/UsAirForceAcademy";
import MilitarySpousesBuyingColorado from "./pages/MilitarySpousesBuyingColorado";
import VeteransBuyingColorado from "./pages/VeteransBuyingColorado";
import PcsTimelineChecklist from "./pages/PcsTimelineChecklist";
import TemporaryHousingColoradoSprings from "./pages/TemporaryHousingColoradoSprings";
import RemoteHomeTours from "./pages/RemoteHomeTours";
import PcsRelocationTourSupport from "./pages/PcsRelocationTourSupport";
import RentalTourSupport from "./pages/RentalTourSupport";
import DenverMarketReport2025 from "./pages/DenverMarketReport2025";
import BestCommunitiesNearFortCarson from "./pages/BestCommunitiesNearFortCarson";
import BestCommunitiesNearPetersonSpaceForceBase from "./pages/BestCommunitiesNearPetersonSpaceForceBase";
import BestCommunitiesNearSchrieverSpaceForceBase from "./pages/BestCommunitiesNearSchrieverSpaceForceBase";
import BestCommunitiesNearBuckleySpaceForceBase from "./pages/BestCommunitiesNearBuckleySpaceForceBase";
import AgentPartner from "./pages/AgentPartner";
import Listing4810BasaltRidgeCircle from "./pages/Listing4810BasaltRidgeCircle";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/fair-housing"} component={FairHousing} />
      <Route path={"/colorado-home-buying-workshop"} component={WorkshopDraft} />
      <Route path={"/join-us"} component={JoinUs} />
      <Route path={"/real-estate-coaching"} component={Coaching} />
      <Route path={"/coaching"}>{() => { window.location.href = "/real-estate-coaching"; return null; }}</Route>
      <Route path={"/accessibility"} component={Accessibility} />
      <Route path={"/denver-homes-for-sale"} component={DenverHomesForSale} />
      <Route path={"/denver-condos-for-sale"} component={DenverCondosForSale} />
      <Route path={"/denver-townhomes-for-sale"} component={DenverTownhomesForSale} />
      <Route path={"/denver-luxury-homes-for-sale"} component={DenverLuxuryHomesForSale} />
      <Route path={"/denver-new-construction-homes"} component={DenverNewConstructionHomes} />
      <Route path={"/wash-park-denver-homes-for-sale"} component={WashParkDenverHomesForSale} />
      <Route path={"/cherry-creek-denver-homes-for-sale"} component={CherryCreekDenverHomesForSale} />
      <Route path={"/lohi-denver-homes-for-sale"} component={LohiDenverHomesForSale} />
      <Route path={"/rino-denver-homes-for-sale"} component={RinoDenverHomesForSale} />
      <Route path={"/central-park-denver-homes-for-sale"} component={CentralParkDenverHomesForSale} />
      <Route path={"/sloan-lake-denver-homes-for-sale"} component={SloanLakeDenverHomesForSale} />
      <Route path={"/parker-co-homes-for-sale"} component={ParkerCoHomesForSale} />
      <Route path={"/highlands-ranch-co-homes-for-sale"} component={HighlandsRanchCoHomesForSale} />
      <Route path={"/castle-rock-co-homes-for-sale"} component={CastleRockCoHomesForSale} />
      <Route path={"/littleton-co-homes-for-sale"} component={LittletonCoHomesForSale} />
      <Route path={"/arvada-co-homes-for-sale"} component={ArvadaCoHomesForSale} />
      <Route path={"/wash-park-denver-buyer-guide"} component={WashParkDenverBuyerGuide} />
      <Route path={"/cherry-creek-denver-buyer-guide"} component={CherryCreekDenverBuyerGuide} />
      <Route path={"/lohi-denver-buyer-guide"} component={LohiDenverBuyerGuide} />
      <Route path={"/rino-denver-buyer-guide"} component={RiNoDenverBuyerGuide} />
      <Route path={"/central-park-denver-buyer-guide"} component={CentralParkDenverBuyerGuide} />
      <Route path={"/sloan-lake-denver-buyer-guide"} component={SloanLakeDenverBuyerGuide} />
      <Route path={"/buying-a-home-in-denver"} component={BuyingAHomeInDenver} />
      <Route path={"/first-time-home-buyer-denver"} component={FirstTimeHomeBuyerDenver} />
      <Route path={"/denver-home-buying-process"} component={DenverHomeBuyingProcess} />
      <Route path={"/cost-of-living-in-denver-colorado"} component={CostOfLivingInDenverColorado} />
      <Route path={"/relocation/relocating-to-denver-colorado"} component={RelocatingToDenverColorado} />
      <Route path={"/denver-vs-colorado-springs"} component={DenverVsColoradoSprings} />
      <Route path={"/denver-vs-boulder"} component={DenverVsBoulder} />
      <Route path={"/denver-vs-fort-collins"} component={DenverVsFortCollins} />
      <Route path={"/boulder-co-homes-for-sale"} component={BoulderCoHomesForSale} />
      <Route path={"/boulder-homes-for-sale"} component={BoulderHomesForSale} />
      <Route path={"/lafayette-co-homes-for-sale"} component={LafayetteCoHomesForSale} />
      <Route path={"/longmont-co-homes-for-sale"} component={LongmontCoHomesForSale} />
      <Route path={"/niwot-co-homes-for-sale"} component={NiwotCoHomesForSale} />
      <Route path={"/moving-to-colorado-springs/"} component={MovingToColoradoSprings} />
      <Route path={"/monument-co-real-estate/"} component={MonumentCoRealEstate} />
      <Route path={"/briargate-colorado-springs-real-estate/"} component={BriargateColoradoSpringsRealEstate} />
      <Route path={"/northgate-colorado-springs-real-estate/"} component={NorthgateColoradoSpringsRealEstate} />
      <Route path={"/flying-horse-colorado-springs-real-estate/"} component={FlyingHorseColoradoSpringsRealEstate} />
      <Route path={"/black-forest-co-real-estate/"} component={BlackForestCoRealEstate} />
      <Route path={"/falcon-co-real-estate/"} component={FalconCoRealEstate} />
      <Route path={"/banning-lewis-ranch-colorado-springs-real-estate/"} component={BanningLewisRanchColoradoSpringsRealEstate} />
      <Route path={"/old-colorado-city-colorado-springs-real-estate/"} component={OldColoradoCityColoradoSpringsRealEstate} />
      <Route path={"/colorado-springs-co-homes-for-sale"} component={ColoradoSpringsCoHomesForSale} />
      <Route path={"/colorado-springs-homes-for-sale"} component={ColoradoSpringsHomesForSale} />
      <Route path={"/manitou-springs-co-homes-for-sale"} component={ManitouSpringsCoHomesForSale} />
      <Route path={"/widefield-co-homes-for-sale"} component={WidefieldCoHomesForSale} />
      <Route path={"/palmer-lake-co-homes-for-sale"} component={PalmerLakeCoHomesForSale} />
      <Route path={"/fort-collins-co-homes-for-sale"} component={FortCollinsCoHomesForSale} />
      <Route path={"/fort-collins-homes-for-sale"} component={FortCollinsHomesForSale} />
      <Route path={"/loveland-co-homes-for-sale"} component={LovelandCoHomesForSale} />
      <Route path={"/windsor-co-homes-for-sale"} component={WindsorCoHomesForSale} />
      <Route path={"/johnstown-co-homes-for-sale"} component={JohnstownCoHomesForSale} />
      <Route path={"/pueblo-county-home-search-coming-soon"} component={PuebloCountyHomeSearchComingSoon} />
      <Route path={"/pueblo-home-search-coming-soon"} component={PuebloHomeSearchComingSoon} />
      <Route path={"/greeley-co-homes-for-sale"} component={GreeleyCoHomesForSale} />
      <Route path={"/greeley-homes-for-sale"} component={GreeleyHomesForSale} />
      <Route path={"/evans-co-homes-for-sale"} component={EvansCoHomesForSale} />
      <Route path={"/platteville-co-homes-for-sale"} component={PlattevilleCoHomesForSale} />
      <Route path={"/lasalle-co-homes-for-sale"} component={LaSalleCoHomesForSale} />
      <Route path={"/douglas-co-homes-for-sale"} component={DouglasCoHomesForSale} />
      <Route path={"/castle-pines-co-homes-for-sale"} component={CastlePinesCoHomesForSale} />
      <Route path={"/centennial-co-homes-for-sale"} component={CentennialCoHomesForSale} />
      <Route path={"/lone-tree-co-homes-for-sale"} component={LoneTreeCoHomesForSale} />
      <Route path={"/jefferson-co-homes-for-sale"} component={JeffersonCoHomesForSale} />
      <Route path={"/golden-homes-for-sale"} component={GoldenHomesForSale} />
      <Route path={"/lakewood-co-homes-for-sale"} component={LakewoodCoHomesForSale} />
      <Route path={"/morrison-co-homes-for-sale"} component={MorrisonCoHomesForSale} />
      <Route path={"/westminster-co-homes-for-sale"} component={WestminsterCoHomesForSale} />
      <Route path={"/adams-co-homes-for-sale"} component={AdamsCoHomesForSale} />
      <Route path={"/commerce-city-homes-for-sale"} component={CommerceCityHomesForSale} />
      <Route path={"/brighton-co-homes-for-sale"} component={BrightonCoHomesForSale} />
      <Route path={"/thornton-co-homes-for-sale"} component={ThorntonCoHomesForSale} />
      <Route path={"/northglenn-co-homes-for-sale"} component={NorthglennCoHomesForSale} />
      <Route path={"/adams-county-vs-jefferson-county"} component={AdamsCountyVsJeffersonCounty} />
      <Route path={"/douglas-county-vs-weld-county"} component={DouglasCountyVsWeldCounty} />
      <Route path={"/boulder-vs-fort-collins"} component={BoulderVsFortCollins} />
      <Route path={"/flexible-listing-plans"} component={FlexibleListingPlans} />
      <Route path={"/military-relocation/"} component={MilitaryRelocation} />
      <Route path={"/military-relocation/pcs-colorado/"} component={PcsColorado} />
      <Route path={"/military-relocation/va-home-loans-colorado/"} component={VaHomeLoansColorado} />
      <Route path={"/military-relocation/fort-carson/"} component={FortCarson} />
      <Route path={"/military-relocation/peterson-space-force-base/"} component={PetersonSpaceForceBase} />
      <Route path={"/military-relocation/schriever-space-force-base/"} component={SchrieverSpaceForceBase} />
      <Route path={"/military-relocation/buckley-space-force-base/"} component={BuckleySpaceForceBase} />
      <Route path={"/military-relocation/us-air-force-academy/"} component={UsAirForceAcademy} />
      <Route path={"/military-relocation/military-spouses-buying-colorado/"} component={MilitarySpousesBuyingColorado} />
      <Route path={"/military-relocation/veterans-buying-colorado/"} component={VeteransBuyingColorado} />
      <Route path={"/military-relocation/pcs-timeline-checklist/"} component={PcsTimelineChecklist} />
      <Route path={"/military-relocation/temporary-housing-colorado-springs/"} component={TemporaryHousingColoradoSprings} />
      <Route path={"/military-relocation/remote-home-tours/"} component={RemoteHomeTours} />
      <Route path={"/military-relocation/pcs-relocation-tour-support/"} component={PcsRelocationTourSupport} />
      <Route path={"/rental-tour-support/"} component={RentalTourSupport} />
      <Route path={"/blog/denver-real-estate-market-report-2025/"} component={DenverMarketReport2025} />
      <Route path={"/military-relocation/best-communities-near-fort-carson/"} component={BestCommunitiesNearFortCarson} />
      <Route path={"/military-relocation/best-communities-near-peterson-space-force-base/"} component={BestCommunitiesNearPetersonSpaceForceBase} />
      <Route path={"/military-relocation/best-communities-near-schriever-space-force-base/"} component={BestCommunitiesNearSchrieverSpaceForceBase} />
      <Route path={"/military-relocation/best-communities-near-buckley-space-force-base/"} component={BestCommunitiesNearBuckleySpaceForceBase} />
      {/* Featured listing pages — individual property showcase pages */}
      <Route path={"/featured/4810-basalt-ridge-circle-castle-rock-co"} component={Listing4810BasaltRidgeCircle} />
      {/* Secondary: direct-link agent landing page — noindex, not in sitemap, not in public nav */}
      <Route path={"/for-colorado-agents"} component={AgentPartner} />
      {/* Buying Buddy test pages — noindex, not in sitemap, not in public nav/footer/homepage — direct-link only */}
      <Route path={"/idx-test"} component={IdxTest} />
      <Route path={"/listing-results"} component={ListingResults} />
      <Route path={"/listing-details"} component={ListingDetails} />
      <Route path={"/workshop-draft"}>{() => { window.location.href = "/colorado-home-buying-workshop"; return null; }}</Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
