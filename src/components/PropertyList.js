import React, { lazy, Suspense } from "react";
import "./PropertyList.css";
import Properties from "../property-item";
import LazySkeleton from "./LazySkeleton";
// import Property from "../components/Property";
const Property = lazy(() => import("../components/Property"));

const PropertyList = () => {
  console.log(Properties);
  return (
    <section id="propertylist-section">
      <div className="container">
        <h5 className="center">Here are some property under consideration</h5>
        <div className="property-grid">
          {Properties.map((property) => (
            <>
              <Suspense fallback={<LazySkeleton />}>
                <Property key={property.id} story={property} />
              </Suspense>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
