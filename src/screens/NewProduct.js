import React from "react";
import { Text, View, Button } from "react-native";
import { CustomHeader } from "../components/Header/";
import { StackNavigator } from "react-navigation";

export default class NewProduct extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: nav => (
      <CustomHeader goBack navigation={navigation} title="Novo Produto" />
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Novo produto!</Text>
      </View>
    );
  }
}
