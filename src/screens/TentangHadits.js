import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { 
  Container, Header, Left, 
  Body, Right, Button, Icon, 
  Title, Card, CardItem, Content } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class TentangHadits extends Component {
  static navigationOptions = {
    header: null,
  };

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  _home(){
    this.props.navigation.navigate('Home');
    this.hideMenu();
  }

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
            <Menu 
              style={{justifyContent: 'center', alignItems: 'center'}}
              ref={this.setMenuRef}
              button={
                <Icon style={styles.more} onPress={this.showMenu} name = 'more' />
              }>
              <MenuItem onPress= {() => this._home()}>
                Home
              </MenuItem>
            </Menu>
          </Right>
        </Header>
        <Content>
          <View style={styles.image}>
            <Image
              style={{width: 130, height: 130,}}
              source={require('../../img/aplikasi.png')}
            />
            <Text style={styles.text}>Hadits Arba'in</Text>
          </View>
          <View style={styles.boxText}>
            <Text style={{paddingLeft: 30,}}>
              Hadits Arbain atau Arbain an-Nawawi
            </Text>
            <Text>
              disusun oleh 
              al-Hafizh Abu Zakariya Yahya bin Syaraf an-Nawawi (w: 676 H).
            </Text>
            <Text style={{marginTop: 10,}}>
              Secara umum hadits-hadits Arbain karya al-Imam an-Nawawi 
              adalah hadits-hadits pokok dalam agama Islam.
            </Text>
            <Text style={{marginTop: 10,}}>
              Project aplikasi ini di buat dengan menggungakan bahasa Pemmograman 
              React-Native Dan bahasa pendukung lain nya,
            </Text>
            <Text style={{marginTop: 10,}}>
              Semoga Aplikasi bisa bermanfaat dan memberikan banyak Faedah kepada ummat muslim
            </Text>
            <Text style={styles.textSumber}>Devloper :</Text>
            <View style={{flexDirection: 'row', }}>
              <Icon 
                style={styles.icon} 
                type= 'MaterialIcons' 
                name= 'keyboard-arrow-right' 
              />
              <Text 
                style={{
                  paddingTop: 2, 
                }}>
                Abdullah Ammar Al Faruq 
              </Text>
            </View>

            <Text style={styles.textSumber}>Sumber Pendukung :</Text>
            <View style={{flexDirection: 'row', }}>
              <Icon 
                style={styles.icon} 
                type= 'MaterialIcons' 
                name= 'keyboard-arrow-right' 
              />
              <Text 
                style={{
                  paddingTop: 2, 
                }}>
                https://haditsarbain.wordpress.com
              </Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <Icon 
                style={styles.icon} 
                type= 'MaterialIcons' 
                name= 'keyboard-arrow-right' 
              />
              <Text 
                style={{
                  paddingTop: 2, 
                }}>
                https://islamhouse.com
              </Text>
            </View>
            <View style={{flexDirection: 'row', }}>
              <Icon 
                style={styles.icon} 
                type= 'MaterialIcons' 
                name= 'keyboard-arrow-right' 
              />
              <Text 
                style={{
                  paddingTop: 2, 
                }}>
                http://haditsarbain.com
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 50,}}>
            	<Left>
            		<Image
		              style={{width: 60, paddingTop: 30, height: 60,}}
		              source={require('../../img/aplikasi.png')}
		            />
            	</Left>
	           	<Right>
	           		<Image
	            	  style={{width: 100, height: 100,}}
	            	  source={require('../../img/logo2.png')}
	            	/>
	           </Right>
            </View>
          </View>
        </Content>
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
  icon: {
  	fontSize: 20,
  	paddingTop: 5, 
  	paddingRight: 10,
  	color: '#949596',
  },
  content: {
    backgroundColor: '#dcdee2',
  },
  textSumber: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  text: {
    color: '#676768',
    marginTop: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'lato', 
    fontSize: 25,
  },
  boxText: {
    backgroundColor: '#fcffff',
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  more: {
    color: 'white',
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 15,
  },
  image: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 40,
  },
});