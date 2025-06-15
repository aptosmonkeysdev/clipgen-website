import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutUs";
import AffiliatePage from "./screens/Affiliate";
import Pricing from "./screens/Pricing.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </Layout>
  );
}

export default App;
