import { Platform, StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderColor: "red",
    justifyContent: "center"
  },
  input: {
    marginRight: 10,
    marginLeft: 10
    // fontSize: 20,
    // fontWeight: "100",
    // color: "#393939",
    // margin: 10
  },
  btn: {
    alignItems: "center",
    backgroundColor: "blue",
    marginTop: 20,
    padding: 10,
    marginRight: 10,
    marginLeft: 10
  },
  inputs: {
    alignItems: "center",
    flex: 1
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40
  },
  ImageLogo: {
    width: 90,
    height: 100,
    borderRadius: 50
  },
  btnwyt: {
    color: "#fff"
  },
  searchSection: { width: "100%" }
});
