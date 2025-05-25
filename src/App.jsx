import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutUs";
import AffiliatePage from "./screens/Affiliate";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
