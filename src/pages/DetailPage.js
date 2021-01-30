import React, { useState, useEffect,  } from "react";
import Detail from "../components/Detail";
import Footer from "../components/Footer";

import propertyItem from "../property-item";

const DetailPage = (props) => {
  console.log(props);
  console.log(props.match.params.slug);

  const [properties, setProperties] = useState({
    properties: [],
  });

  // // For Loading
  // const [loading, setLoading] = useState({
  //   loading: true,
  // });

  const [slugState, setSlugState] = React.useState({
    slug: props.match.params.slug,
  });

  // To get all the properties
  const getData = () => {
    setProperties({ properties: propertyItem });
    // setLoading({ loading: false });
  };

  // To get a single property
  const getSingleProperty = (slug) => {
    let myProperties = properties.properties;

    const singleP = properties.properties.filter((property) => {
      console.log(property);
      return property.slug === slug;
    });
    console.log(myProperties);
    return singleP[0];
  };
  


  const property = getSingleProperty(slugState.slug);
  console.log(property);
  console.log(setSlugState)

  useEffect(() => {
    getData();
    // getSingleProperty();
    // console.log(loading, properties);
  }, []);

  return (
    <>
      <Detail oneProperty={property} />
      <Footer />
    </>
  );
};

export default DetailPage;
