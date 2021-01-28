import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import CoOwnershipPage from "./pages/CoOwnershipPage";
import propertyItem from "./property-item";

function App() {
  // For Nav Color
  const [navColor, setNavColor] = useState({
    isColor: false,
  });
  // For All Products
  const [productsState, setProductsState] = useState({
    products: [],
  });
  // // For All Products
  // const [products, setProducts] = useState([]);
  // For Modal Product
  const [modalProductState, setModalProductState] = useState({
    modalProduct: {},
  });
  // For Detail Product
  const [productDetailState, setProductDetailState] = useState({
    productDetail: [],
  });
  // For Loading
  const [loadingState, setLoadingState] = useState({
    loading: false,
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

  // const getData = () => {
  //   setProducts({ products: propertyItem });
  // };
  const getData = () => {
    setProductsState({ products: propertyItem });
  };
  useEffect(() => {
    getData();
    // console.log(products);
    console.log(productsState.products);
  }, []);

  return (
    <>
      <Navbar defNavColor={navColor.isColor} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/co-ownership" component={CoOwnershipPage} />
      </Switch>
    </>
  );
}

export default App;
