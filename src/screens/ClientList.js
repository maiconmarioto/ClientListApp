import React from "react";
import { Text, View } from "react-native";
import { CustomHeader } from "../components/Header";
import { Button, Container, Icon } from "native-base";
import { StackNavigator } from "react-navigation";
import { ActionButton, DynamicList, SearchBar } from "../components";

export default class ClientList extends React.Component {
  constructor() {
    super();
    this.state = { showSearch: true, term: "" };
  }
  static navigationOptions = {
    header: () => null
  };

  _toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch });
  }

  _onInputChange(term) {
    this.setState({ term });
  }

  render() {
    const { navigate } = this.props.navigation;
    const list = [
      "Mãicon Márioto",
      "Simon Mignolet",
      "Nathaniel Clyne",
      "Dejan Lovren",
      "Mama Sakho",
      "Emre Can"
    ]; //pegar do localstorage

    let search = null;
    if (this.state.showSearch) {
      search = <SearchBar onChange={this._onInputChange.bind(this)} />;
    }

    return (
      <Container>
        <CustomHeader
          title="Lista de Clientes"
          rightIcon={
            <Button transparent onPress={this._toggleSearch.bind(this)}>
              <Icon name="md-search" style={{ color: "white" }} />
            </Button>
          }
        />

        <View style={{ borderBottomColor: "#FFF", borderBottomWidth: 1 }} />
        {search}
        <DynamicList list={list} term={this.state.term} />
        <ActionButton navigate={navigate} />
      </Container>
    );
  }
}
