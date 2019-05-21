import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DummyPage from "view/DummyPage";
import GetLocation from "view/GetLocation";
import React from "react";
import LogIn from "view/LogIn";
import SignUp from "view/SignUp";
import UserPage from "view/UserPage";
import FontAwesome, { Icons } from "react-native-fontawesome";

export const LoggedOut = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: ({ navigation }) => ({
        title: "Sign Up",
        headerStyle: { height: 60 }
      })
    },
    Login: {
      screen: LogIn,
      navigationOptions: ({ navigation }) => ({
        // title: "Log In",
        // headerStyle: { height: 40 },
        // headerTitleStyle: { color: "blue" }
        header: null
      })
    }
  },
  {
    initialRouteName: "Login"
  }
);

export const LoggedIn = createStackNavigator(
  {
    GetLocation: {
      screen: GetLocation,
      navigationOptions: ({ navigation }) => ({
        title: "Get Location",
        headerStyle: { height: 60 }
      })
    },
    DummyPage: {
      screen: DummyPage,
      navigationOptions: ({ navigation }) => ({
        // title: "Log In",
        // headerStyle: { height: 40 },
        // headerTitleStyle: { color: "blue" }
        header: null
      })
    }
  },
  {
    initialRouteName: "DummyPage"
  }
);

export const TabIn = createBottomTabNavigator(
  {
    DummyPage2: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    UserPage: {
      screen: UserPage,
      navigationOptions: {
        tabBarLabel: "Users",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#7567B1",
      labelStyle: {
        fontSize: 16,
        fontWeight: "600"
      }
    }
  },
  {
    initialRouteName: "DummyPage2"
  }
);

const createRootNavigator = (HaveLoggedIn = false) => {
  return createSwitchNavigator(
    {
      LoggedIn: {
        screen: LoggedIn
      },
      LoggedOut: {
        screen: LoggedOut
      },
      TabIn: {
        screen: TabIn
      }
    },
    {
      initialRouteName: HaveLoggedIn ? "LoggedIn" : "LoggedOut"
    }
  );
};
export default createRootNavigator;
