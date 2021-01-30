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
      return { properties: propertyItem, loading: false };
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state);
    return (
      <PropertyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}
const PropertyConsumer = PropertyContext.Consumer;
export { PropertyContext, PropertyProvider, PropertyConsumer };
