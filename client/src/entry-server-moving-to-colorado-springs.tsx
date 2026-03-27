import React from "react";
import { renderToString } from "react-dom/server";
import MovingToColoradoSprings from "./pages/MovingToColoradoSprings";

export function renderMovingToColoradoSprings(): string {
  return renderToString(<MovingToColoradoSprings />);
}
