import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Recognition from "./pages/Recognition.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SpeedInsights>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/recognition" element={<Recognition />} />
          </Routes>
        </Router>
      </SpeedInsights>
    </HelmetProvider>
  </React.StrictMode>
);
