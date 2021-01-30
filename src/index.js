import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import propertyItem from "./property-item";
// import reducer from "./reducer";
import { PropertyProvider } from "./context";

// const initialStore = {
//   properties: [],
// };
// const myStore = createStore(reducer, initialStore);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PropertyProvider>
        {/* <Provider store={myStore}> */}
        <App />
        {/* </Provider> */}
      </PropertyProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
