import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
const SubmitButton = props => {
  return (
    <TouchableOpacity style={props.Btnstyle} onPress={props.BtnFunc}>
      <Text style={styles.btnwyt}>{props.BtnLabel}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  btnwyt: {
    color: "#fff"
  }
});
