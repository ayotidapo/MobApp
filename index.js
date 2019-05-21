/** @format */
import { YellowBox } from "react-native";
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./App";
import { name as appName } from "./app.json";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const store = configureStore();
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
