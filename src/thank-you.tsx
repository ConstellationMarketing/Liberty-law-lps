import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThankYou } from "./screens/ThankYou";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThankYou />
  </StrictMode>,
);
