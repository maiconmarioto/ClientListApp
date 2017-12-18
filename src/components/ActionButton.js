import React, { Component } from "react";
import { Container, Header, View, Button, Icon, Fab } from "native-base";

export default class ActionButton extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#ff5252" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add" />
          <Button
            style={{ backgroundColor: "#ff867f" }}
            onPress={() => this.props.navigate("newClient")}
          >
            <Icon name="md-person-add" />
          </Button>
          <Button
            style={{ backgroundColor: "#ff867f" }}
            onPress={() => this.props.navigate("newProduct")}
          >
            <Icon name="md-pizza" />
          </Button>
          <Button
            style={{ backgroundColor: "#ff867f" }}
            onPress={() => this.props.navigate("newCompany")}
          >
            <Icon name="md-home" />
          </Button>
        </Fab>
      </View>
    );
  }
}
