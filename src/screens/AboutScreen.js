import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container style={styles.content}>
        <Header style={styles.header}>
          <Left>
            <Button transparent
              onPress= {() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body>
            <Title>About</Title>
          </Body>

          <Right>
            <Button transparent
              onPress= {() => alert([<Button success><Title>ammar</Title></Button>])}
            >
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 40,}}>
          <Image
            style={{width: 150, height: 150,}}
            source={require('../../img/aplikasi.png')}
          />
        </View>
          
        <View>
          
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {  
    alignItems: 'center',
    backgroundColor: '#3a78a5',
    justifyContent: 'center',
    elevation: 3,
  },
  content: {
    backgroundColor: '#dcdee2',
  },
  boxTex: {
    backgroundColor: '#eff1f4',
    flex: 1,
  }
});
