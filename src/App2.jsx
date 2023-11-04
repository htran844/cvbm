import React from "react";
import './index.css'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Decoration from "./components/Decoration/Decoration";
import Feature from "./components/Feature/Feature";
import WhySticky from "./components/WhySticky/WhySticky";
import HowWork from "./components/HowWork/HowWork";
import IsPricing from "./components/IsPricing/IsPricing";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function App2() {
  return (
    <div className="body">
      <div className="general-wrapper">
        <div className="page-wrapper is-home">
          <div className="main-wrapper">
          <Header/>
          <Hero/>
          <Decoration/>
          <Feature/>
          <WhySticky/>
          <HowWork/>
          <IsPricing/>
          <FAQ/>
          </div>
        </div>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
}
