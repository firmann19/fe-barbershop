import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Reviews from "../component/Reviews";
import Booking from "../component/Booking";
import Hero from "../component/Hero";
import Transformation from "../component/Transformation";
import OurVideos from "../component/OurVideos";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Transformation />
      <OurVideos />
      <Reviews />
      <Booking />
      <Footer />
    </>
  );
}

export default LandingPage;
