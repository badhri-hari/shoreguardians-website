import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Partnerships from "./pages/Partnerships.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/partnerships" element={<Partnerships />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
