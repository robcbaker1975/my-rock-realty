import { renderToString } from "react-dom/server";
import TemporaryHousingColoradoSprings from "./pages/TemporaryHousingColoradoSprings";

export function renderTemporaryHousingColoradoSprings(): string {
  return renderToString(<TemporaryHousingColoradoSprings />);
}
