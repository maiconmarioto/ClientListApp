import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Body, Button, Icon, Header, Left, Right, Title } from "native-base";

export default class CustomHeader extends Component {
  renderBack() {
    if (this.props.goBack) {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          transparent
          light
        >
          <Icon name="arrow-back" />
        </Button>
      );
    }
    return null;
  }

  render() {
    let rightIcon = null;
    if (this.props.rightIcon) {
      rightIcon = this.props.rightIcon;
    }

    return (
      <Header
        style={styles.bg}
        backgroundColor="#40bbce"
        androidStatusBarColor="#3191a0"
      >
        <Left>{this.renderBack()}</Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>{rightIcon}</Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#40bbce"
  }
});
