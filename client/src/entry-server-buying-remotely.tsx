import { renderToString } from "react-dom/server";
import BuyingRemotely from "./pages/BuyingRemotely";
export function renderBuyingRemotely(): string {
  return renderToString(<BuyingRemotely />);
}
