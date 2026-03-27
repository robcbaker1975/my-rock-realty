import { renderToString } from "react-dom/server";
import BestCommunitiesNearFortCarson from "./pages/BestCommunitiesNearFortCarson";

export function renderBestCommunitiesNearFortCarson(): string {
  return renderToString(<BestCommunitiesNearFortCarson />);
}
