import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import CoOwnershipPage from "./pages/CoOwnershipPage";
import DetailPage from "./pages/DetailPage";
import RenderTop from "./components/RenderTop";

function App() {
  // For Nav Color
  const [navColor, setNavColor] = useState({
    isColor: false,
  });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 50) {
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
      <RenderTop />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/co-ownership" component={CoOwnershipPage} />
        <Route path="/detail/:slug" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;

// import propertyItem from "./property-item";

// For All Products
// const [properties, setProperties] = useState([]);
// With the above syntax of useState([]) , It will only show the value and no key. For example instead of { loading: true } or { properties: Array(0) }, it will only show : true, []

// const [properties, setProperties] = useState({
//   properties: [],
// });

// // For Modal Product
// const [modalProperty, setModalProperty] = useState({
//   modalProperty: {},
// });

// // For Detail Product
// const [propertyDetail, setPropertyDetail] = useState({
//   propertyDetail: [],
// });

// // For Loading
// const [loading, setLoading] = useState({
//   loading: true,
// });
// const [loading, setLoading] = useState(true);

// // To get all the properties
// const getData = () => {
//   setProperties({ properties: propertyItem });
//   setLoading({ loading: false });
// };

// // To get a single property
// const getSingleProperty = (slug) => {
//   let myProperties = properties.properties;
//   // const singleProperty = myProperties.find(
//   //   (property) => property.slug === slug
//   //   // console.log(property)
//   // );
//   // return singleProperty;

//   console.log(myProperties);
// };

// //

// useEffect(() => {
//   getData();
//   getSingleProperty();
//   // console.log(loading, properties);
// }, []);
