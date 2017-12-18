import React, { Component } from "react";
import accents from "remove-accents";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Body,
  Switch,
  Button,
  View
} from "native-base";

export default class DynamicList extends Component {
  constructor() {
    super();
  }

  renderItems(list = []) {
    return list
      .filter(i => {
        if (this.props.term) {
          return accents.remove(i).includes(accents.remove(this.props.term));
        }
        return true;
      })
      .map((i, k) => {
        return (
          <ListItem icon key={k}>
            <Body>
              <Text>{i}</Text>
            </Body>
            <Right>
              <Button transparent dark iconRight>
                <Icon name="arrow-forward" />
              </Button>
            </Right>
          </ListItem>
        );
      });
  }

  render() {
    let { list } = this.props;
    return (
      <List style={{ backgroundColor: "#fff" }}>{this.renderItems(list)}</List>
    );
  }
}
