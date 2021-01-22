import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AvailableSpace from "./components/AvailableSpace";
import HomeCoownership from "./components/HomeCoownership";

function App() {
  // For Nav Color
  const [navColor, setNavColor] = useState({
    isColor: false,
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY);
      let position = window.pageYOffset;
      console.log(position);
      if (position > 50) {
        console.log("I am at position above 50px");
        setNavColor({
          isColor: true,
        });
      } else {
        setNavColor({
          isColor: false,
        });
      }
    });
  }, []);

  return (
    <>
      <Navbar defNavColor={navColor.isColor} />
      <Banner />
      <AvailableSpace />
      <HomeCoownership />
    </>
  );
}

export default App;
