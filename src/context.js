import React, { Component } from "react";
import propertyItem from "./property-item";

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
  state = {
    properties: [],
    propertyDetail: {},
    modalProperty: {},
    loading: true,
  };

  getData = () => {
    this.setState(() => {
      return(
        properties : propertyItem
      )
    })
  }
  render() {
    return (
      <PropertyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}
export default PropertyProvider;
