import { renderToString } from "react-dom/server";
import PcsTimelineChecklist from "./pages/PcsTimelineChecklist";

export function renderPcsTimelineChecklist(): string {
  return renderToString(<PcsTimelineChecklist />);
}
