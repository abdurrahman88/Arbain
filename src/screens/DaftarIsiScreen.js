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

export default class DaftarIsiScreen extends Component {
	static navigationOptions = {
    header: null
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
  render() {
    return (    	
      <View style={styles.container}>
      	<Header style={styles.header}>
      		<Left>
            <Button transparent
              onPress= {() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>Hadist Ar Ba'in</Title>
          </Body>

          <Right>
          	<Button transparent
              onPress= {() => alert([<Button success><Title>ammar</Title></Button>])}
            >
              <Icon name='search' />
            </Button>

            <Menu 
              style={{justifyContent: 'center', alignItems: 'center'}}
              ref={this.setMenuRef}
              button={
                <Icon style={styles.more} onPress={this.showMenu} name = 'more' />
              }

            >
              <MenuItem 
                onPress={() => this.props.navigation.navigate('About')}
              >
                About
              </MenuItem>
              <MenuItem 
                onPress={() => this.props.navigation.navigate('Bookmark')}
              >
                Bookmark
              </MenuItem>
              <MenuItem onPress={this.hideMenu}>cancel</MenuItem>
        
            </Menu>
            
          </Right>
      	</Header>
        <View style={styles.headerDaftar}>
          <Text style={styles.textDaftar}>Dafta Isi</Text>
        </View>
        <ScrollView>
          <View style={{marginTop: 20,}}>
            {daftarHadist.map((data) => (
              <TouchableOpacity 
                style={styles.boxDaftar}
                key={data.id}
                onPress = {() => this.props.navigation.navigate('Detail', {
                  idItem: data.id,
                })}
                
                >
              
                <View style={styles.bundarId}>
                  <Text style={styles.nomor}>{data.id}</Text>
                </View>
                <Text style={styles.judul}>{data.judul}</Text>
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
    fontSize: 15,
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


/*
<List>
  <ListItem style={styles.List}> 
    <View style={styles.no}>
      <Text style={styles.text}>{data.id}</Text>
    </View>
    <Text style={styles.judul}>{data.judul}</Text>
  </ListItem>
</List>



List: {
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
no: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#47c1ff',
    borderRadius: 200,
    fontWeight: 'bold',
  },

  judul: {
    marginLeft: 10,
    marginRight: 10,
  },


  ** Backup  LIst Item ** 


  const styles = StyleSheet.create({
  header: {  
    alignItems: 'center',
    backgroundColor: '#7597ce',
    justifyContent: 'center',
  },
  headerBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 75,
  },
  buatbox: {
    backgroundColor: '#d0e4ed',
  },
  nomor: {
    color: '#d4d7db'

  },
  bundarId: {
    backgroundColor: '#7597ce',
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBody: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'lato',
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
    paddingLeft: 10,
    paddingTop: 5,
    color: '#828282',
  }
  
});

** backup cardItem **

<Card style={styles.card}>
  <CardItem header style={styles.headerDaftar}>
    <Text style={styles.textDaftar}>Daftar Isi</Text>
  </CardItem>

<ScrollView>
  {daftarHadist.map((data) => {

    var title = data.judul;

    return (

      <CardItem 
        bordered
        button = {true}
        style={styles.CardItem}
        key={data.id}
        onPress = {() => this.props.navigation.navigate('Detail', {
          idItem: data.id,
        })}
      >
        
        <View style={styles.bundarId}>
          <Text style={styles.nomor}>{data.id}</Text>
        </View>
        <Text style={styles.judul}>" {title} "</Text>                    
      </CardItem>
    );
  })}
</ScrollView>
</Card>

*/