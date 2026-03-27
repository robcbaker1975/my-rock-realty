import React from "react";
import { renderToString } from "react-dom/server";
import BestCommunitiesNearPetersonSpaceForceBase from "./pages/BestCommunitiesNearPetersonSpaceForceBase";

export function renderBestCommunitiesNearPetersonSpaceForceBase(): string {
  return renderToString(<BestCommunitiesNearPetersonSpaceForceBase />);
}
