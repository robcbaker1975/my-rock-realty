import React from "react";
import { renderToString } from "react-dom/server";
import BestCommunitiesNearSchrieverSpaceForceBase from "./pages/BestCommunitiesNearSchrieverSpaceForceBase";

export function renderBestCommunitiesNearSchrieverSpaceForceBase(): string {
  return renderToString(<BestCommunitiesNearSchrieverSpaceForceBase />);
}
