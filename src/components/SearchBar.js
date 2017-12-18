import React, { Component } from "react";
import { Form, Item, Input, Label } from "native-base";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Pesquisar</Label>
          <Input onChangeText={this.props.onChange} />
        </Item>
      </Form>
    );
  }
}
