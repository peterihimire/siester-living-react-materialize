import React from "react";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import { useContext } from "react";
import { PropertyContext } from "../context";

const DetailPage = (props) => {
  const context = useContext(PropertyContext);
  const { properties } = context;
  console.log(context);
  console.log(properties);

  console.log(props);
  console.log(props.match.params.slug);

  const [slugState, setSlugState] = React.useState({
    slug: props.match.params.slug,
  });

  // To get a single property
  const getSingleProperty = (slug) => {
    let myProperties = properties;

    const singleP = myProperties.filter((property) => {
      console.log(property);
      return property.slug === slug;
    });

    return singleP[0];
  };

  const property = getSingleProperty(slugState.slug);
  console.log(setSlugState);

  return (
    <>
      <Detail oneProperty={property} />
      <Footer />
    </>
  );
};

export default DetailPage;
