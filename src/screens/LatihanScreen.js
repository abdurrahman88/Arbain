import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { 
  Container, Header, Content, 
  Tab, Tabs, Button, Icon, Body, Title, 
  Left, Right  } from 'native-base';

export default class LatihanScreen extends Component {
  render() {
    return (
      <Container style={{flex: 1,}}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>Hadist Arba'in</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>

            <Button transparent>
              <Icon name='bookmark' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  header: {  
    alignItems: 'center',
    backgroundColor: '#3a78a5',    
    justifyContent: 'center',
  },
  
});