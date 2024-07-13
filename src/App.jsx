import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Home from "./pages/Home.jsx";
import Members from "./pages/Members.jsx";
import Recognition from "./pages/Recognition.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/recognition" element={<Recognition />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
