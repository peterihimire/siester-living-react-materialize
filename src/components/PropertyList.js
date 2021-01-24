import React from "react";
import "./PropertyList.css";
import Properties from "../property-item";
import Property from "../components/Property";

const PropertyList = () => {
  console.log(Properties);
  return (
    <section id="propertylist-section">
      <div className="container">
        <h5 className="center">Here are some property under consideration</h5>
        <div className="property-grid">
          {Properties.map((property) => (
            <Property key={property.id} story={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
