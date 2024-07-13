import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Recognition from "./pages/Recognition.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Analytics>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/recognition" element={<Recognition />} />
          </Routes>
        </Router>
      </Analytics>
    </HelmetProvider>
  </React.StrictMode>
);
