import React, { Component } from "react";
import propertyItem from "./property-item";

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
  state = {
    properties: [],
    property: {},
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
    this.getModalProperty();
    this.getProperty();
  }

  getProperty = (slug) => {
    const property = this.state.properties.find((item) => {
      return item.slug === slug;
    });
    console.log(property);
    return property;
  };
  getModalProperty = (slug) => {
    const modalP = this.getProperty(slug);
    console.log(modalP);
    // this.setState(() => {
    //   return { modalProperty: modalP };
    // });
  };
  render() {
    console.log(this.state);
    return (
      <PropertyContext.Provider
        value={{ ...this.state, getProperty: this.getProperty }}
      >
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}
const PropertyConsumer = PropertyContext.Consumer;
export { PropertyContext, PropertyProvider, PropertyConsumer };
