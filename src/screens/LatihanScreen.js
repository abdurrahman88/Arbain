import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { 
  Container, Header, Left, 
  Body, Right, Button, 
  Icon, Title, List, CardItem, 
  Card, Content,
  ListItem, Badge } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


import daftarHadist from '../../data/daftarHadist.json';

export default class LatihanScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (      
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 20}}>
            {daftarHadist.map((data) => (
              <TouchableOpacity 
                style={styles.boxDaftar}
                key={data.id}
                onPress = {() => this.props.navigation.navigate('Isi', {
                  idItem: data.id,
                })}
                >
              
                <View style={styles.bundarId}>
                  <Text style={styles.nomor}>{data.id}</Text>
                </View>
                <View>
                  <Text style={styles.judul}>{data.judul.substring(0, 30)}...</Text>
                </View>
                <Right>
                  <Icon style={{color: '#5393c1'}} name = 'more' />
                </Right>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
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
  more: {
    color: 'white',
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 15,
  },
  boxDaftar: {
    backgroundColor: '#82cdf2',
    marginLeft: 3,
    elevation: 3,
    marginRight: 3,
    paddingLeft: 6,
    paddingRight: 7,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: 'row', 
  },
  content: {
    backgroundColor: '#deefef'
  },
  headerDaftar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5393c1',
    paddingTop: 10,
    elevation: 5,
    paddingBottom: 10,
  }, 
  textDaftar: {
    fontSize: 20,
    fontFamily: 'lato',
    fontWeight: 'bold',
    color: '#edeeef',
  },
  nomor: {
    color: '#f7f9f9'

  },
  bundarId: {
    backgroundColor: '#5393c1',
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color:'#dee1e5',
  },
  judul: {
    fontSize: 14,
    paddingLeft: 5,
    paddingTop: 6,
    color: '#f7f9f9',
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
  },
  CardItem: {
    backgroundColor: '#dee3ea',
    elevation: 5,
  }
});


