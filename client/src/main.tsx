import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const analyticsBase = import.meta.env.VITE_ANALYTICS_ENDPOINT?.replace(/\/$/, "");
const analyticsSiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsBase && analyticsSiteId && !document.querySelector(`script[data-website-id="${analyticsSiteId}"]`)) {
  const s = document.createElement("script");
  s.src = `${analyticsBase}/umami`;
  s.defer = true;
  s.dataset.websiteId = analyticsSiteId;
  document.body.appendChild(s);
}

createRoot(document.getElementById("root")!).render(<App />);
