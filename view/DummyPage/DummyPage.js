import React, { Component } from "react";
import { Icon } from "react-native-elements";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Coming from a ReactJs background,\n" + "I think this should be FUN!!!!"
});
class DummyPage extends Component {
  render() {
    const { navigation, auth } = this.props;
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <View style={styles.ico}>
          <View>
            <Icon
              name="navicon"
              type="evilicon"
              color="#fff"
              size={38}
              /// onPress={() => this.props.navigation.openDrawer()}
              style={styles.pic}
            />
          </View>
          <View style={styles.txt}>
            <Text
              style={[styles.col, styles.bod]}
              onPress={() => this.props.callLogout(navigation)}
            >
              Log Out
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.welcome}>Welcome to otidapson</Text>
          <Text>Location Details App...lol</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("UserPage")}
          >
            <Text style={styles.btnwyt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default DummyPage;

const styles = StyleSheet.create({
  ico: {
    flex: 1,
    flexDirection: "row",
    height: 28,
    alignItems: "flex-start",
    justifyContent: "center",

    backgroundColor: "#00aced"
  },
  col: {
    color: "#fff"
  },
  bod: {
    fontWeight: "bold"
  },
  txt: {
    flex: 1,
    //color: "#fff",
    marginRight: 10,
    alignItems: "flex-end"
  },
  ic: {
    flex: 1
  },
  container: {
    flex: 1
  },
  container2: {
    flex: 9,
    borderRadius: 4,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    overflow: "hidden"
  },
  welcome: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 70
  },
  btnwyt: { color: "#fff" },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: 20,
    padding: 10,
    width: 200
  },
  secDiv: {
    //flex: 1,
    padding: 20,
    backgroundColor: "red"
  },
  shit: {
    color: "blue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
