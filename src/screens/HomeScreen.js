/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Footer } from 'native-base';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{elevation: 3,}}>
          <Image
            style={{width: 150, height: 150,}}
            source={require('../../img/aplikasi.png')}
          />
        </View>

        <View style={styles.button}>
            <TouchableOpacity
              style={styles.boxButton}
              onPress={() =>
              this.props.navigation.navigate('Daftar')}
            >
              <Text style={styles.text}>Daftar Isi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boxButton}
            >
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
    backgroundColor: '#c2e5ef',
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
  },
  boxButton: {
    backgroundColor: '#3a78a5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 10,
    paddingBottom: 15,
    paddingRight: 28,
    paddingLeft: 28,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
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
