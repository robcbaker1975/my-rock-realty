import { renderToString } from "react-dom/server";
import RemoteHomeTours from "./pages/RemoteHomeTours";

export function renderRemoteHomeTours(): string {
  return renderToString(<RemoteHomeTours />);
}
