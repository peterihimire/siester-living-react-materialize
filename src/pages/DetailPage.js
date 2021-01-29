import React from "react";
import Detail from "../components/Detail";
import Footer from "../components/Footer";

const DetailPage = (props) => {
  console.log(props);
  console.log(props.match.params.slug);

  const [slugState, setSlugState] = React.useState({
    slug: props.match.params.slug,
  });

  return (
    <>
      <Detail />
      <Footer />
    </>
  );
};

export default DetailPage;
