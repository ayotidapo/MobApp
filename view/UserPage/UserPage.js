import React, { Component } from "react";
import { Icon, List, ListItem } from "react-native-elements";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  FlatList
} from "react-native";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Coming from a ReactJs background,\n" + "I think this should be FUN!!!!"
});
class UserPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { navigation, users } = this.props;
    const { content } = users;

    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={content}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.first_name} ${item.last_name}`}
                subtitle={item.email}
                avatar={{ uri: item.image }}
                keyExtractor={item => item.email}
              />
            )}
          />
        </List>
      </View>
    );
  }
}
export default UserPage;

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
