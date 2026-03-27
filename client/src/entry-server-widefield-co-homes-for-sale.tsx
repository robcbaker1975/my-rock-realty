import React from "react";
import { renderToString } from "react-dom/server";
import WidefieldCoHomesForSale from "./pages/WidefieldCoHomesForSale";

export function renderWidefieldCoHomesForSale(): string {
  return renderToString(<WidefieldCoHomesForSale />);
}
