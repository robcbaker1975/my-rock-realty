import React from "react";
import { renderToString } from "react-dom/server";
import BestCommunitiesNearBuckleySpaceForceBase from "./pages/BestCommunitiesNearBuckleySpaceForceBase";

export function renderBestCommunitiesNearBuckleySpaceForceBase(): string {
  return renderToString(<BestCommunitiesNearBuckleySpaceForceBase />);
}
