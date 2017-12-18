import React from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import ClientList from "./screens/ClientList";
import NewClient from "./screens/NewClient";
import NewProduct from "./screens/NewProduct";
import NewCompany from "./screens/NewCompany";

const Router = StackNavigator({
  clientList: { screen: ClientList },
  newClient: { screen: NewClient },
  newProduct: { screen: NewProduct },
  newCompany: { screen: NewCompany }
});

export default Router;
