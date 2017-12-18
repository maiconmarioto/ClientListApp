import React from "react";
import { Text, View, Button } from "react-native";
import { CustomHeader } from "../components/Header/";
import { StackNavigator } from "react-navigation";

export default class NewClient extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: nav => (
      <CustomHeader goBack navigation={navigation} title="Novo Cliente" />
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Novo cliente!</Text>
      </View>
    );
  }
}
