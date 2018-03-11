import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  Title,
  Label
}
from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connectRealm } from 'react-native-realm';

import realm from '../utils/Realm';

class PersonForm extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  state = {
    isLoading: true,
    firstName: '',
    lastName: '',
  }

  onToggle = () => {
    this.props.navigation.navigate('DrawerToggle');
  }

  onSubmit = () => {
    const { realm } = this.props;
    const {
      firstName,
      lastName
    } = this.state;

    realm.write(() => {
      realm.create('Person', {
        firstName,
        lastName
      });
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.onToggle()}>
              <Icon name="bars" size={24} color='#fff' />
            </Button>
          </Left>
          <Body>
            <Title>Realm</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input onChangeText={(firstName) => this.setState({ firstName })} />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input onChangeText={(lastName) => this.setState({ lastName })} />
            </Item>
            <Button primary block onPress={() => this.onSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connectRealm(PersonForm, {
  schema: ['Person'],
  mapToProps(results, realm, ownProps) {
    return {
      realm,
      people: results.people,
    };
  },
});
