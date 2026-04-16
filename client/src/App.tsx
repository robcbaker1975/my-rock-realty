import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
const IdxTest = lazy(() => import("./pages/IdxTest"));
const ListingResults = lazy(() => import("./pages/ListingResults"));
const ListingDetails = lazy(() => import("./pages/ListingDetails"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const FairHousing = lazy(() => import("./pages/FairHousing"));
const WorkshopDraft = lazy(() => import("./pages/WorkshopDraft"));
const WorkshopResources = lazy(() => import("./pages/WorkshopResources"));
const NeedsWantsDreams = lazy(() => import("./pages/NeedsWantsDreams"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const Coaching = lazy(() => import("./pages/Coaching"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const DenverHomesForSale = lazy(() => import("./pages/DenverHomesForSale"));
const DenverCondosForSale = lazy(() => import("./pages/DenverCondosForSale"));
const DenverTownhomesForSale = lazy(() => import("./pages/DenverTownhomesForSale"));
const DenverLuxuryHomesForSale = lazy(() => import("./pages/DenverLuxuryHomesForSale"));
const DenverNewConstructionHomes = lazy(() => import("./pages/DenverNewConstructionHomes"));
const WashParkDenverHomesForSale = lazy(() => import("./pages/WashParkDenverHomesForSale"));
const CherryCreekDenverHomesForSale = lazy(() => import("./pages/CherryCreekDenverHomesForSale"));
const LohiDenverHomesForSale = lazy(() => import("./pages/LohiDenverHomesForSale"));
const RinoDenverHomesForSale = lazy(() => import("./pages/RinoDenverHomesForSale"));
const CentralParkDenverHomesForSale = lazy(() => import("./pages/CentralParkDenverHomesForSale"));
const SloanLakeDenverHomesForSale = lazy(() => import("./pages/SloanLakeDenverHomesForSale"));
const PlattParkDenverHomesForSale = lazy(() => import("./pages/PlattParkDenverHomesForSale"));
const HighlandDenverHomesForSale = lazy(() => import("./pages/HighlandDenverHomesForSale"));
const ParkerCoHomesForSale = lazy(() => import("./pages/ParkerCoHomesForSale"));
const HighlandsRanchCoHomesForSale = lazy(() => import("./pages/HighlandsRanchCoHomesForSale"));
const CastleRockCoHomesForSale = lazy(() => import("./pages/CastleRockCoHomesForSale"));
const LittletonCoHomesForSale = lazy(() => import("./pages/LittletonCoHomesForSale"));
const ArvadaCoHomesForSale = lazy(() => import("./pages/ArvadaCoHomesForSale"));
const WashParkDenverBuyerGuide = lazy(() => import("./pages/WashParkDenverBuyerGuide"));
const CherryCreekDenverBuyerGuide = lazy(() => import("./pages/CherryCreekDenverBuyerGuide"));
const LohiDenverBuyerGuide = lazy(() => import("./pages/LohiDenverBuyerGuide"));
const BuyingInLohiDenver = lazy(() => import("./pages/BuyingInLohiDenver"));
const RiNoDenverBuyerGuide = lazy(() => import("./pages/RiNoDenverBuyerGuide"));
const CentralParkDenverBuyerGuide = lazy(() => import("./pages/CentralParkDenverBuyerGuide"));
const SloanLakeDenverBuyerGuide = lazy(() => import("./pages/SloanLakeDenverBuyerGuide"));
const BuyingAHomeInDenver = lazy(() => import("./pages/BuyingAHomeInDenver"));
const BuyingAHomeColorado = lazy(() => import("./pages/BuyingAHomeColorado"));
const SellingAHomeColorado = lazy(() => import("./pages/SellingAHomeColorado"));
const FirstTimeHomeBuyerDenver = lazy(() => import("./pages/FirstTimeHomeBuyerDenver"));
const DenverHomeBuyingProcess = lazy(() => import("./pages/DenverHomeBuyingProcess"));
const CostOfLivingInDenverColorado = lazy(() => import("./pages/CostOfLivingInDenverColorado"));
const RelocatingToDenverColorado = lazy(() => import("./pages/RelocatingToDenverColorado"));
const DenverVsColoradoSprings = lazy(() => import("./pages/DenverVsColoradoSprings"));
const DenverVsBoulder = lazy(() => import("./pages/DenverVsBoulder"));
const DenverVsFortCollins = lazy(() => import("./pages/DenverVsFortCollins"));
const BoulderCoHomesForSale = lazy(() => import("./pages/BoulderCoHomesForSale"));
const BoulderHomesForSale = lazy(() => import("./pages/BoulderHomesForSale"));
const UniversityHillCuBoulderRealEstate = lazy(() => import("./pages/UniversityHillCuBoulderRealEstate"));
const LafayetteCoHomesForSale = lazy(() => import("./pages/LafayetteCoHomesForSale"));
const LongmontCoHomesForSale = lazy(() => import("./pages/LongmontCoHomesForSale"));
const NiwotCoHomesForSale = lazy(() => import("./pages/NiwotCoHomesForSale"));
const NiwotCoRealEstate = lazy(() => import("./pages/NiwotCoRealEstate"));
const GunbarrelCoRealEstate = lazy(() => import("./pages/GunbarrelCoRealEstate"));
const TableMesaSouthBoulderRealEstate = lazy(() => import("./pages/TableMesaSouthBoulderRealEstate"));
const NorthBoulderNoBoRealEstate = lazy(() => import("./pages/NorthBoulderNoBoRealEstate"));
const NewlandsBoulderRealEstate = lazy(() => import("./pages/NewlandsBoulderRealEstate"));
const MapletonHillBoulderRealEstate = lazy(() => import("./pages/MapletonHillBoulderRealEstate"));
const LouisvilleCoHomesForSale = lazy(() => import("./pages/LouisvilleCoHomesForSale"));
const SuperiorCoHomesForSale = lazy(() => import("./pages/SuperiorCoHomesForSale"));
const LyonsCoHomesForSale = lazy(() => import("./pages/LyonsCoHomesForSale"));
const ColoradoSpringsCoHomesForSale = lazy(() => import("./pages/ColoradoSpringsCoHomesForSale"));
const MovingToColoradoSprings = lazy(() => import("./pages/MovingToColoradoSprings"));
const MonumentCoRealEstate = lazy(() => import("./pages/MonumentCoRealEstate"));
const BriargateColoradoSpringsRealEstate = lazy(() => import("./pages/BriargateColoradoSpringsRealEstate"));
const NorthgateColoradoSpringsRealEstate = lazy(() => import("./pages/NorthgateColoradoSpringsRealEstate"));
const FlyingHorseColoradoSpringsRealEstate = lazy(() => import("./pages/FlyingHorseColoradoSpringsRealEstate"));
const InterquestColoradoSprings = lazy(() => import("./pages/InterquestColoradoSprings"));
const BlackForestCoRealEstate = lazy(() => import("./pages/BlackForestCoRealEstate"));
const FalconCoRealEstate = lazy(() => import("./pages/FalconCoRealEstate"));
const BanningLewisRanchColoradoSpringsRealEstate = lazy(() => import("./pages/BanningLewisRanchColoradoSpringsRealEstate"));
const WolfRanchColoradoSpringsRealEstate = lazy(() => import("./pages/WolfRanchColoradoSpringsRealEstate"));
const CorderaColoradoSpringsRealEstate = lazy(() => import("./pages/CorderaColoradoSpringsRealEstate"));
const PineCreekColoradoSpringsRealEstate = lazy(() => import("./pages/PineCreekColoradoSpringsRealEstate"));
const MountainShadowsColoradoSpringsRealEstate = lazy(() => import("./pages/MountainShadowsColoradoSpringsRealEstate"));
const PeregrineColoradoSpringsRealEstate = lazy(() => import("./pages/PeregrineColoradoSpringsRealEstate"));
const OldColoradoCityColoradoSpringsRealEstate = lazy(() => import("./pages/OldColoradoCityColoradoSpringsRealEstate"));
const OldNorthEndColoradoSpringsRealEstate = lazy(() => import("./pages/OldNorthEndColoradoSpringsRealEstate"));
const BroadmoorCheyenneMountainColoradoSpringsRealEstate = lazy(() => import("./pages/BroadmoorCheyenneMountainColoradoSpringsRealEstate"));
const ManitouSpringsCoRealEstate = lazy(() => import("./pages/ManitouSpringsCoRealEstate"));
const PeytonCoRealEstate = lazy(() => import("./pages/PeytonCoRealEstate"));
const WoodlandParkCoRealEstate = lazy(() => import("./pages/WoodlandParkCoRealEstate"));
const FountainCoRealEstate = lazy(() => import("./pages/FountainCoRealEstate"));
const CalhanCoRealEstate = lazy(() => import("./pages/CalhanCoRealEstate"));
const PalmerLakeCoRealEstate = lazy(() => import("./pages/PalmerLakeCoRealEstate"));
const ColoradoSpringsHomesForSale = lazy(() => import("./pages/ColoradoSpringsHomesForSale"));
const ManitouSpringsCoHomesForSale = lazy(() => import("./pages/ManitouSpringsCoHomesForSale"));
const WidefieldCoHomesForSale = lazy(() => import("./pages/WidefieldCoHomesForSale"));
const PalmerLakeCoHomesForSale = lazy(() => import("./pages/PalmerLakeCoHomesForSale"));
const FortCollinsCoHomesForSale = lazy(() => import("./pages/FortCollinsCoHomesForSale"));
const WindsorCoRealEstate = lazy(() => import("./pages/WindsorCoRealEstate"));
const TimnathCoRealEstate = lazy(() => import("./pages/TimnathCoRealEstate"));
const LovelandCoRealEstate = lazy(() => import("./pages/LovelandCoRealEstate"));
const WellingtonCoRealEstate = lazy(() => import("./pages/WellingtonCoRealEstate"));
const OldTownFortCollinsRealEstate = lazy(() => import("./pages/OldTownFortCollinsRealEstate"));
const MidtownFortCollinsRealEstate = lazy(() => import("./pages/MidtownFortCollinsRealEstate"));
const HarmonyFortCollinsRealEstate = lazy(() => import("./pages/HarmonyFortCollinsRealEstate"));
const FortCollinsHomesForSale = lazy(() => import("./pages/FortCollinsHomesForSale"));
const LovelandCoHomesForSale = lazy(() => import("./pages/LovelandCoHomesForSale"));
const WindsorCoHomesForSale = lazy(() => import("./pages/WindsorCoHomesForSale"));
const JohnstownCoHomesForSale = lazy(() => import("./pages/JohnstownCoHomesForSale"));
const PuebloCountyHomeSearchComingSoon = lazy(() => import("./pages/PuebloCountyHomeSearchComingSoon"));
const PuebloHomeSearchComingSoon = lazy(() => import("./pages/PuebloHomeSearchComingSoon"));
const GreeleyCoHomesForSale = lazy(() => import("./pages/GreeleyCoHomesForSale"));
const GreeleyHomesForSale = lazy(() => import("./pages/GreeleyHomesForSale"));
const EvansCoHomesForSale = lazy(() => import("./pages/EvansCoHomesForSale"));
const PlattevilleCoHomesForSale = lazy(() => import("./pages/PlattevilleCoHomesForSale"));
const LaSalleCoHomesForSale = lazy(() => import("./pages/LaSalleCoHomesForSale"));
const DouglasCoHomesForSale = lazy(() => import("./pages/DouglasCoHomesForSale"));
const CastlePinesCoHomesForSale = lazy(() => import("./pages/CastlePinesCoHomesForSale"));
const CentennialCoHomesForSale = lazy(() => import("./pages/CentennialCoHomesForSale"));
const LoneTreeCoHomesForSale = lazy(() => import("./pages/LoneTreeCoHomesForSale"));
const JeffersonCoHomesForSale = lazy(() => import("./pages/JeffersonCoHomesForSale"));
const GoldenHomesForSale = lazy(() => import("./pages/GoldenHomesForSale"));
const LakewoodCoHomesForSale = lazy(() => import("./pages/LakewoodCoHomesForSale"));
const MorrisonCoHomesForSale = lazy(() => import("./pages/MorrisonCoHomesForSale"));
const WestminsterCoHomesForSale = lazy(() => import("./pages/WestminsterCoHomesForSale"));
const AdamsCoHomesForSale = lazy(() => import("./pages/AdamsCoHomesForSale"));
const CommerceCityHomesForSale = lazy(() => import("./pages/CommerceCityHomesForSale"));
const BrightonCoHomesForSale = lazy(() => import("./pages/BrightonCoHomesForSale"));
const ThorntonCoHomesForSale = lazy(() => import("./pages/ThorntonCoHomesForSale"));
const NorthglennCoHomesForSale = lazy(() => import("./pages/NorthglennCoHomesForSale"));
const AdamsCountyVsJeffersonCounty = lazy(() => import("./pages/AdamsCountyVsJeffersonCounty"));
const DouglasCountyVsWeldCounty = lazy(() => import("./pages/DouglasCountyVsWeldCounty"));
const BoulderVsFortCollins = lazy(() => import("./pages/BoulderVsFortCollins"));
const FlexibleListingPlans = lazy(() => import("./pages/FlexibleListingPlans"));
const MilitaryRelocation = lazy(() => import("./pages/MilitaryRelocation"));
const PcsColorado = lazy(() => import("./pages/PcsColorado"));
const VaHomeLoansColorado = lazy(() => import("./pages/VaHomeLoansColorado"));
const FortCarson = lazy(() => import("./pages/FortCarson"));
const PetersonSpaceForceBase = lazy(() => import("./pages/PetersonSpaceForceBase"));
const SchrieverSpaceForceBase = lazy(() => import("./pages/SchrieverSpaceForceBase"));
const BuckleySpaceForceBase = lazy(() => import("./pages/BuckleySpaceForceBase"));
const UsAirForceAcademy = lazy(() => import("./pages/UsAirForceAcademy"));
const MilitarySpousesBuyingColorado = lazy(() => import("./pages/MilitarySpousesBuyingColorado"));
const VeteransBuyingColorado = lazy(() => import("./pages/VeteransBuyingColorado"));
const PcsTimelineChecklist = lazy(() => import("./pages/PcsTimelineChecklist"));
const TemporaryHousingColoradoSprings = lazy(() => import("./pages/TemporaryHousingColoradoSprings"));
const RemoteHomeTours = lazy(() => import("./pages/RemoteHomeTours"));
const BuyingRemotely = lazy(() => import("./pages/BuyingRemotely"));
const PcsRelocationTourSupport = lazy(() => import("./pages/PcsRelocationTourSupport"));
const RentalTourSupport = lazy(() => import("./pages/RentalTourSupport"));
const DenverMarketReport2025 = lazy(() => import("./pages/DenverMarketReport2025"));
const BestCommunitiesNearFortCarson = lazy(() => import("./pages/BestCommunitiesNearFortCarson"));
const BestCommunitiesNearPetersonSpaceForceBase = lazy(() => import("./pages/BestCommunitiesNearPetersonSpaceForceBase"));
const BestCommunitiesNearSchrieverSpaceForceBase = lazy(() => import("./pages/BestCommunitiesNearSchrieverSpaceForceBase"));
const BestCommunitiesNearBuckleySpaceForceBase = lazy(() => import("./pages/BestCommunitiesNearBuckleySpaceForceBase"));
const AgentPartner = lazy(() => import("./pages/AgentPartner"));
const Listing4810BasaltRidgeCircle = lazy(() => import("./pages/Listing4810BasaltRidgeCircle"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<div />}>
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/fair-housing"} component={FairHousing} />
      <Route path={"/colorado-home-buying-workshop"} component={WorkshopDraft} />
      <Route path={"/colorado-home-buying-workshop/resources"} component={WorkshopResources} />
      <Route path={"/colorado-home-buying-workshop/resources/needs-wants-dreams"} component={NeedsWantsDreams} />
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
      <Route path={"/platt-park-denver-homes-for-sale"} component={PlattParkDenverHomesForSale} />
      <Route path={"/highland-denver-homes-for-sale"} component={HighlandDenverHomesForSale} />
      <Route path={"/parker-co-homes-for-sale"} component={ParkerCoHomesForSale} />
      <Route path={"/highlands-ranch-co-homes-for-sale"} component={HighlandsRanchCoHomesForSale} />
      <Route path={"/castle-rock-co-homes-for-sale"} component={CastleRockCoHomesForSale} />
      <Route path={"/littleton-co-homes-for-sale"} component={LittletonCoHomesForSale} />
      <Route path={"/arvada-co-homes-for-sale"} component={ArvadaCoHomesForSale} />
      <Route path={"/wash-park-denver-buyer-guide"} component={WashParkDenverBuyerGuide} />
      <Route path={"/cherry-creek-denver-buyer-guide"} component={CherryCreekDenverBuyerGuide} />
      <Route path={"/lohi-denver-buyer-guide"} component={LohiDenverBuyerGuide} />
      <Route path={"/buying-in/lohi-denver"} component={BuyingInLohiDenver} />
      <Route path={"/rino-denver-buyer-guide"} component={RiNoDenverBuyerGuide} />
      <Route path={"/central-park-denver-buyer-guide"} component={CentralParkDenverBuyerGuide} />
      <Route path={"/sloan-lake-denver-buyer-guide"} component={SloanLakeDenverBuyerGuide} />
      <Route path={"/buying-a-home-in-denver"} component={BuyingAHomeInDenver} />
      <Route path={"/buying-a-home-colorado"} component={BuyingAHomeColorado} />
      <Route path={"/selling-a-home-in-colorado"} component={SellingAHomeColorado} />
      <Route path={"/first-time-home-buyer-denver"} component={FirstTimeHomeBuyerDenver} />
      <Route path={"/denver-home-buying-process"} component={DenverHomeBuyingProcess} />
      <Route path={"/cost-of-living-in-denver-colorado"} component={CostOfLivingInDenverColorado} />
      <Route path={"/relocation/relocating-to-denver-colorado"} component={RelocatingToDenverColorado} />
      <Route path={"/denver-vs-colorado-springs"} component={DenverVsColoradoSprings} />
      <Route path={"/denver-vs-boulder"} component={DenverVsBoulder} />
      <Route path={"/denver-vs-fort-collins"} component={DenverVsFortCollins} />
      <Route path={"/boulder-co-homes-for-sale"} component={BoulderCoHomesForSale} />
      <Route path={"/boulder-homes-for-sale"} component={BoulderHomesForSale} />
      <Route path={"/university-hill-cu-boulder-real-estate"} component={UniversityHillCuBoulderRealEstate} />
      <Route path={"/lafayette-co-homes-for-sale"} component={LafayetteCoHomesForSale} />
      <Route path={"/longmont-co-homes-for-sale"} component={LongmontCoHomesForSale} />
      <Route path={"/niwot-co-homes-for-sale"} component={NiwotCoHomesForSale} />
      <Route path={"/niwot-co-real-estate"} component={NiwotCoRealEstate} />
      <Route path={"/gunbarrel-co-real-estate"} component={GunbarrelCoRealEstate} />
      <Route path={"/table-mesa-south-boulder-real-estate"} component={TableMesaSouthBoulderRealEstate} />
      <Route path={"/north-boulder-nobo-real-estate"} component={NorthBoulderNoBoRealEstate} />
      <Route path={"/newlands-boulder-real-estate"} component={NewlandsBoulderRealEstate} />
      <Route path={"/mapleton-hill-boulder-real-estate"} component={MapletonHillBoulderRealEstate} />
      <Route path={"/louisville-co-homes-for-sale"} component={LouisvilleCoHomesForSale} />
      <Route path={"/superior-co-homes-for-sale"} component={SuperiorCoHomesForSale} />
      <Route path={"/lyons-co-homes-for-sale"} component={LyonsCoHomesForSale} />
      <Route path={"/moving-to-colorado-springs/"} component={MovingToColoradoSprings} />
      <Route path={"/monument-co-real-estate/"} component={MonumentCoRealEstate} />
      <Route path={"/briargate-colorado-springs-real-estate/"} component={BriargateColoradoSpringsRealEstate} />
      <Route path={"/northgate-colorado-springs-real-estate/"} component={NorthgateColoradoSpringsRealEstate} />
      <Route path={"/flying-horse-colorado-springs-real-estate/"} component={FlyingHorseColoradoSpringsRealEstate} />
      <Route path={"/interquest-colorado-springs/"} component={InterquestColoradoSprings} />
      <Route path={"/black-forest-co-real-estate/"} component={BlackForestCoRealEstate} />
      <Route path={"/falcon-co-real-estate/"} component={FalconCoRealEstate} />
      <Route path={"/banning-lewis-ranch-colorado-springs-real-estate/"} component={BanningLewisRanchColoradoSpringsRealEstate} />
      <Route path={"/wolf-ranch-colorado-springs-real-estate/"} component={WolfRanchColoradoSpringsRealEstate} />
      <Route path={"/cordera-colorado-springs-real-estate/"} component={CorderaColoradoSpringsRealEstate} />
      <Route path={"/pine-creek-colorado-springs-real-estate/"} component={PineCreekColoradoSpringsRealEstate} />
      <Route path={"/mountain-shadows-colorado-springs-real-estate/"} component={MountainShadowsColoradoSpringsRealEstate} />
      <Route path={"/peregrine-colorado-springs-real-estate/"} component={PeregrineColoradoSpringsRealEstate} />
      <Route path={"/old-colorado-city-colorado-springs-real-estate/"} component={OldColoradoCityColoradoSpringsRealEstate} />
      <Route path={"/old-north-end-colorado-springs-real-estate/"} component={OldNorthEndColoradoSpringsRealEstate} />
      <Route path={"/broadmoor-cheyenne-mountain-colorado-springs-real-estate/"} component={BroadmoorCheyenneMountainColoradoSpringsRealEstate} />
      <Route path={"/manitou-springs-co-real-estate/"} component={ManitouSpringsCoRealEstate} />
      <Route path={"/peyton-co-real-estate/"} component={PeytonCoRealEstate} />
      <Route path={"/woodland-park-co-real-estate/"} component={WoodlandParkCoRealEstate} />
      <Route path={"/fountain-co-real-estate/"} component={FountainCoRealEstate} />
      <Route path={"/calhan-co-real-estate/"} component={CalhanCoRealEstate} />
      <Route path={"/palmer-lake-co-real-estate/"} component={PalmerLakeCoRealEstate} />
      <Route path={"/colorado-springs-co-homes-for-sale"} component={ColoradoSpringsCoHomesForSale} />
      <Route path={"/colorado-springs-homes-for-sale"} component={ColoradoSpringsHomesForSale} />
      <Route path={"/manitou-springs-co-homes-for-sale"} component={ManitouSpringsCoHomesForSale} />
      <Route path={"/widefield-co-homes-for-sale"} component={WidefieldCoHomesForSale} />
      <Route path={"/palmer-lake-co-homes-for-sale"} component={PalmerLakeCoHomesForSale} />
      <Route path={"/fort-collins-co-homes-for-sale"} component={FortCollinsCoHomesForSale} />
      <Route path={"/windsor-co-real-estate"} component={WindsorCoRealEstate} />
      <Route path={"/timnath-co-real-estate"} component={TimnathCoRealEstate} />
      <Route path={"/loveland-co-real-estate"} component={LovelandCoRealEstate} />
      <Route path={"/wellington-co-real-estate"} component={WellingtonCoRealEstate} />
      <Route path={"/old-town-fort-collins-real-estate"} component={OldTownFortCollinsRealEstate} />
      <Route path={"/midtown-fort-collins-real-estate"} component={MidtownFortCollinsRealEstate} />
      <Route path={"/harmony-fort-collins-real-estate"} component={HarmonyFortCollinsRealEstate} />
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
      <Route path={"/military-relocation/buying-remotely/"} component={BuyingRemotely} />
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
    </Suspense>
  );
}

// Paths that should not receive the shared Footer (foundation/noindex pages)
const FOOTER_EXCLUDED_PATHS = ["/idx-test", "/listing-results", "/listing-details"];

function AppLayout() {
  const [location] = useLocation();
  const showFooter = !FOOTER_EXCLUDED_PATHS.some((p) => location === p || location.startsWith(p + "?"));
  return (
    <>
      <Router />
      {showFooter && <Footer />}
    </>
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
          <AppLayout />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
