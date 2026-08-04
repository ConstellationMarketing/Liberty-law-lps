import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame";
import { IllinoisCriminalAttorney } from "./screens/IllinoisCriminalAttorney";
import { CriminalLawyerLP } from "./screens/CriminalLawyerLP/CriminalLawyerLP";
import { DomesticViolenceLP } from "./screens/DomesticViolenceLP/DomesticViolenceLP";
import { SexualAssaultLP } from "./screens/SexualAssaultLP/SexualAssaultLP";
import { ThankYou } from "./screens/ThankYou";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/lp-criminal-attorney-il" element={<IllinoisCriminalAttorney />} />
        <Route path="/lp-criminal-lawyer" element={<CriminalLawyerLP />} />
        <Route path="/lp-domestic-violence" element={<DomesticViolenceLP />} />
        <Route path="/lp-sexual-assault" element={<SexualAssaultLP />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
