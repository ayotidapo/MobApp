/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { AsyncStorage } from "react-native";
import createRootNavigator from "./Navigation";
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
//import { DrawerNavigator } from "react-navigation";

import { View } from "react-native";
let Navigation = () => null;

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    checkSignedIn: false,
    signedIn: false
  };

  componentDidMount() {
    AsyncStorage.getItem("token").then(res => {
      if (res) {
        this.setState({
          checkSignedIn: true,
          signedIn: true
        });
      } else {
        this.setState({
          checkSignedIn: true,
          signedIn: false
        });
      }
    });
  }

  render() {
    const { checkSignedIn, signedIn } = this.state;
    const Navigation = createRootNavigator(signedIn); //createRootNavigator returns the navigation component for the App
    if (!checkSignedIn) {
      return null;
    }
    return <Navigation />;
  }
}
//const App = () => <Navigation />;
export default App;

// import React, { Component } from "react";
// import { createStackNavigator } from "react-navigation";
// import DummyPage from "./view/DummyPage";
// import GetLocation from "./view/GetLocation";
// const App = createStackNavigator({
//   Home: { screen: DummyPage },
//   GetLocation: { screen: GetLocation }
// });

//export default App;
//npm start -- --reset-cache.
