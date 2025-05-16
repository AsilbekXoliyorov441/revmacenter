import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/home";
import ContactPage from "./page/contact";
import AboutPage from "./page/about";
import DoctorsPage from "./page/doctors";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
