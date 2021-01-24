import React from "react";
import Banner from "../components/Banner";
import AvailableSpace from "../components/AvailableSpace";
import HomeCoownership from "../components/HomeCoownership";
import OwnerPartner from "../components/OwnerPartner";
import SiesterMobile from "../components/SiesterMobile";
import TourSection from "../components/TourSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AvailableSpace />
      <HomeCoownership />
      <OwnerPartner />
      <SiesterMobile />
      <TourSection />
      <Footer />
    </>
  );
};

export default HomePage;
