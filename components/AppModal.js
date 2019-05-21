import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

class ModalExample extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.show}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={this.props.setModalVisible}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={this.props.setModalVisible}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalExample;
