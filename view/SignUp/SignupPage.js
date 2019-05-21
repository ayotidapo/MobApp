import React, { Component } from "react";
//import AppModal from "./../../components/AppModal";<AppModal show={modalVisible} setModalVisible={this.setModalVisible} />
import InputField from "./components/InputField";
import SubmitButton from "./../../components/SubmitButton";
import Appstyles from "./../../components/appStyle";
import {
  Platform,
  Button,
  Text,
  Modal,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ImageBackground
} from "react-native";
import styles from "./style";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      submit: false,
      password: "",
      modalVisible: false,
      fields: {
        name: {
          type: "text",
          name: "name",
          value: "",
          error: "",
          label: "Full Name"
        },
        email: {
          type: "text",
          name: "email",
          value: "",
          error: "",
          label: "Email Address"
        },
        username: {
          type: "text",
          name: "username",
          value: "",
          error: "",
          label: "Username"
        },
        password: {
          type: "password",
          name: "password",
          value: "",
          error: "",
          label: "Password"
        }
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.auth !== this.props.auth) {
    if (nextProps.reg === "y") {
      this.props.navigation.navigate("Home");
      console.log("p");
    }
    // }
  }
  updateFormField = fieldName => {
    return event => {
      this.setState({
        fields: {
          ...this.state.fields,
          [fieldName]: {
            ...this.state.fields[fieldName],
            value: event.nativeEvent.text
          }
        }
      });
    };
  };
  setModalVisible = () => {
    this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
  };
  onSubmit = () => {
    const { fields } = this.state;
    this.setState({ submit: true });
    const body = { returnSecureToken: true };
    Object.keys(fields).forEach(fieldName => {
      body[fieldName] = fields[fieldName].value;
    });
    this.props.callSignup(body);
  };
  render() {
    const { auth } = this.props;
    const { fields, submit } = this.state;
    return (
      <View style={styles.container}>
        {auth.loading && (
          <View style={Appstyles.spinner}>
            <ActivityIndicator size="large" color="blue" size={75} />
          </View>
        )}
        {submit &&
          auth.reg === "f" &&
          Alert.alert(
            "Error",
            "Registration Failed",
            [
              // {
              //   text: "Cancel",
              //   onPress: () => console.log("Cancel Pressed")
              // },
              {
                text: "OK",
                onPress: () => {
                  this.setState({ submit: false });
                }
              }
            ],
            { cancelable: false }
          )}
        {!auth.loading && (
          <View>
            {Object.keys(fields).map((field, index) => (
              <InputField
                fields={fields}
                field={fields[field]}
                key={index}
                updateFormField={this.updateFormField}
              />
            ))}
            <SubmitButton
              Btnstyle={styles.btn}
              BtnFunc={this.onSubmit}
              BtnLabel="Submit"
              Txtstyle={styles.btnwyt}
            />
          </View>
        )}
      </View>
    );
  }
}
//https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
