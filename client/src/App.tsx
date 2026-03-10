import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
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
import BuyingAHomeInDenver from "./pages/BuyingAHomeInDenver";
import FirstTimeHomeBuyerDenver from "./pages/FirstTimeHomeBuyerDenver";
import DenverHomeBuyingProcess from "./pages/DenverHomeBuyingProcess";
import CostOfLivingInDenverColorado from "./pages/CostOfLivingInDenverColorado";
import RelocatingToDenverColorado from "./pages/RelocatingToDenverColorado";
import DenverVsColoradoSprings from "./pages/DenverVsColoradoSprings";
import DenverVsBoulder from "./pages/DenverVsBoulder";

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
      <Route path={"/buying-a-home-in-denver"} component={BuyingAHomeInDenver} />
      <Route path={"/first-time-home-buyer-denver"} component={FirstTimeHomeBuyerDenver} />
      <Route path={"/denver-home-buying-process"} component={DenverHomeBuyingProcess} />
      <Route path={"/cost-of-living-in-denver-colorado"} component={CostOfLivingInDenverColorado} />
      <Route path={"/relocation/relocating-to-denver-colorado"} component={RelocatingToDenverColorado} />
      <Route path={"/denver-vs-colorado-springs"} component={DenverVsColoradoSprings} />
      <Route path={"/denver-vs-boulder"} component={DenverVsBoulder} />
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
