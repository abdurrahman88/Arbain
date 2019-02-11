/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Footer, Icon } from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{elevation: 5, borderRadius: 25, backgroundColor: '#ffffff'}}>
          <Image
            style={{width: 150, height: 150,}}
            source={require('../../img/aplikasi2.png')}
          />
        </View>

        <View style={styles.button}>
            <TouchableOpacity 
              style={styles.boxButton} 
              onPress={() => this.props.navigation.navigate('Daftar')}
            >
              <Icon style={styles.iconText} name= 'book' />
              <Text style={styles.text}>Daftar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boxButton}
              onPress={() => this.props.navigation.navigate('Tentang')}
            >
              <Icon type= 'MaterialIcons' style={styles.iconText} name= 'settings' />
              <Text style={styles.text}>About</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f1f1',
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
  },
  iconText: {
    color: '#ffffff',
    paddingRight: 15,
    fontSize: 20,
  },
  boxButton: {
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'SourceSansPro-Semibold',
    // fontWeight: 'bold',
    fontSize: 15,
    color: '#ffffff',
  },
  logo: {
    marginTop: 0,
    justifyContent: 'center',
    width: 250,
    height: 50,
    backgroundColor: '#fff'
  },
  gambar: {
    width: 250,
    height: 50,
  }
 
});
