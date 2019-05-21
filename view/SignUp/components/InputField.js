import React from "react";

//import AppModal from "./../../components/AppModal";<AppModal show={modalVisible} setModalVisible={this.setModalVisible} />
import {
  Platform,
  Button,
  Text,
  Modal,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import styles from "./../style";

function renderInput(fields, field, updateFormField) {
  switch (field.type) {
    case "text":
      return (
        <View>
          <TextInput
            onChange={updateFormField(field.name)}
            value={field.value}
            placeholder={field.label}
          />
        </View>
      );
    case "password":
      return (
        <View>
          <TextInput
            secureTextEntry
            onChange={updateFormField(field.name)}
            value={field.value}
            placeholder={field.label}
          />
        </View>
      );
    default:
      return (
        <View>
          <TextInput
            onChange={updateFormField(field.name)}
            value={field.value}
            placeholder={field.label}
          />
        </View>
      );
  }
}

const InputGroup = props => {
  const { fields, field, updateFormField } = props;
  return (
    <View style={styles.input}>
      {renderInput(fields, field, updateFormField)}
    </View>
  );
};
export default InputGroup;
