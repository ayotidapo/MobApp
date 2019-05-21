import React, { Component } from "react";
//import AppModal from "./../../components/AppModal";<AppModal show={modalVisible} setModalVisible={this.setModalVisible} />
import { KeyboardAvoidingView } from "react-native";

import SubmitButton from "./../../components/SubmitButton";
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
import Appstyles from "./../../components/appStyle";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      email: "",
      password: "",
      modalVisible: false
    };
  }

  // updateFormField = fieldName => {
  //   return event => {
  //     this.setState({
  //       [fieldName]: event.nativeEvent.text
  //     });
  //   };
  // };

  updateFormField = (fieldName, event) => {
    this.setState({
      [fieldName]: event.nativeEvent.text
    });
  };

  setModalVisible = () => {
    this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
  };

  onSubmit = navigation => {
    const { email, password } = this.state;
    this.setState({
      submit: true
    });
    const body = {
      email,
      password,
      returnSecureToken: true
    };

    this.props.callLogin(body, navigation);
  };

  render() {
    const { modalVisible, submit } = this.state;
    const { navigation, auth } = this.props;
    return (
      <View style={styles.container}>
        {auth.loading && (
          <View style={Appstyles.spinner}>
            <ActivityIndicator size="large" color="blue" size={75} />
          </View>
        )}
        {submit &&
          auth.log === "f" &&
          Alert.alert(
            "Error",
            "Incorrect Username/Password",
            [
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
          <ImageBackground
            source={require("./../../assets/dapo.jpeg")}
            blurRadius={12}
            style={{ width: "100%", height: "100%", flex: 1 }}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.logo}>
                <Image
                  source={require("./../../assets/dapo.jpeg")}
                  style={styles.ImageLogo}
                  blurRadius={1}
                />
              </View>
              <View style={styles.inputs}>
                <View style={styles.searchSection}>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid={"white"}
                    spellCheck={false}
                    autoCorrect={false}
                    placeholder="Enter Email"
                    onChange={e => this.updateFormField("email", e)}
                    //onChange={this.updateFormField("email")}
                    value={this.state.email || ""}
                  />
                </View>
                <View style={styles.searchSection}>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid={"white"}
                    spellCheck={false}
                    autoCorrect={false}
                    onChange={e => this.updateFormField("password", e)}
                    //onChange={this.updateFormField("password")}
                    placeholder="Enter Password"
                    secureTextEntry
                    value={this.state.password || ""}
                  />
                </View>
                <SubmitButton
                  Btnstyle={styles.btn}
                  BtnFunc={() => this.onSubmit(navigation)}
                  BtnLabel="Log In"
                  Txtstyle={styles.btnwyt}
                />

                <Text style={styles.lilmrg}>
                  Don't have an account?{" "}
                  <Text
                    style={styles.wyt}
                    onPress={() => navigation.navigate("DummmyPage")}
                  >
                    Sign up.
                  </Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

// class SignIn extends React.Component {
//   state = {
//     email: '',
//     password: '',
//   }

//   constructor (props) {
//     super(props)
//     this.updateFormField = this.updateFormField.bind(this)
//     this.submitForm = this.submitForm.bind(this)
//   }

//   updateFormField (fieldName) {
//     return (event) => {
//       this.setState({
//         [fieldName]: event.nativeEvent.text,
//       })
//     }
//   }

//   submitForm () {
//     const {
//       email,
//       password,
//     } = this.state
//     // Now do something with email and password
//   }

//   render () {
//     return (
//       <View>
//         <TextInput onChange={this.updateFormField('email')} />
//         <TextInput onChange={this.updateFormField('password')} />
//         <Button title="Sign In" onPress={this.submitForm} />
//       </View>
//     )
//   }
// }
