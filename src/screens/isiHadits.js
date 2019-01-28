import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import { 
	Container, Header, Left, 
	Body, Right, Button, 
	Icon, Title, List, 
	ListItem, Badge, Card, Segment,
	CardItem, Content, Footer, FooterTab } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import isiDetailHadits from '../../data/isiDetailHadits.json';

export default class isiHadits extends Component {
	static navigationOptions = {
    header: null
	};


  _copyArab(){
    Clipboard.setString(this.state.arab);
    alert('success');
    this.hideMenu();
  }

  _copyTerjemah(){
    Clipboard.setString(this.state.terjemah);
    alert('success');
    this.hideMenu();
  }

  _copySemua(){
    Clipboard.setString(this.state.semua);
    alert('success');
    this.hideMenu();
  }

  _about(){
    this.props.navigation.navigate('Tentang');
    this.hideMenu();
  }
  
  constructor(props) {
    super(props);

    const idItem = this.props.navigation.getParam("idItem");
    const index = parseInt(idItem) - 1;
    this.data = isiDetailHadits[index];

    this.state = {
      arab: this.data.judul + '\n \n' + this.data.arab + '\n \n' + this.data.sumber,
      terjemah: this.data.judul + '\n \n' + this.data.terjemahan + '\n \n' + this.data.sumberIndo,
      semua: this.data.judul + '\n \n' + this.data.arab + '\n \n' + this.data.sumber + '\n \n' + this.data.terjemahan + '\n \n' + this.data.sumberIndo,
    };
  }


  // BAR MENU //
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
            <Title style={styles.textBody}>Hadist Arba'in</Title>
          </Body>

          <Right>
            <Menu 
              style={{justifyContent: 'center', alignItems: 'center'}}
              ref={this.setMenuRef}
              button={
                <Icon style={styles.more} onPress={this.showMenu} name = 'more' />
              }
            >
            <MenuItem onPress={() => (this._copyArab())}>
              Salin Arab
            </MenuItem>
            <MenuItem onPress={() => this._copyTerjemah()}>
              Salin Terjemah
            </MenuItem>
            <MenuItem onPress={() => this._copySemua()}>
              Salin Semua
            </MenuItem>
            <MenuItem onPress={() => this._about()}>
              About
            </MenuItem>
            <MenuItem onPress={this.hideMenu}>cancel</MenuItem>
        
            </Menu>
            
          </Right>
      	</Header>

        <View style={styles.headerDaftar}>
          <Text style={styles.noIndo}>Hadist ke-{this.data.id}</Text>
          <Text style={styles.noArab}>{this.data.noArab}</Text>
        </View>

      	<Content>            
          <Card>
            <CardItem bordered style={{justifyContent: 'center', alignItems: 'center',}} >
              <Text style={styles.judul}>{this.data.judul}</Text>
            </CardItem>
            
            <CardItem>
              <Body style={styles.bodyCard}>
                <Text style={styles.textArab}>{this.data.arab}</Text>
                <Text style={styles.textSumber}> {this.data.sumber} </Text>
              </Body>
            </CardItem>

          </Card>
          <Card style={styles.bodyTerjemah}>
            <CardItem style={styles.CarICarItemtem}>
              <Body>
                <Text style={styles.textTerjemah}>Terjemah :</Text>
                <Text style={styles.isiTeremahan}>" {this.data.terjemahan}. "</Text>
                <Text style={styles.sumberTeremah}>( {this.data.sumberIndo} )</Text>
              </Body>
            </CardItem>
          </Card>
      	</Content>
        <Footer style={{backgroundColor: '#3a78a5'}}>
          <FooterTab style={{backgroundColor: '#3a78a5'}}>
              <Button 
                onPress={() => this.props.navigation.navigate('Home')}
                vertical
              >
                <Icon name="home" />
                <Text style={{color: '#e8edef', fontWeight: 'bold', fontFamily: 'lato'}}>Home</Text>
              </Button>
          </FooterTab>
        </Footer>
      </View>
    );
	}
}



const styles = StyleSheet.create({
  header: {  
    alignItems: 'center',
    backgroundColor: '#3a78a5',    
    justifyContent: 'center',
  },
  container: {
  	backgroundColor: "#fff",
  	flex: 1,
  },
  more: {
    color: 'white',
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 15,
  },
  headerDaftar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5393c1',
    paddingTop: 7,
    paddingBottom: 7,
    elevation: 5,
  }, 
  noArab: {
    color:'#fcfdff',
    fontSize: 18,
    fontFamily: 'lotus-linotype-light',

  },
  noIndo: {
    paddingBottom: 3,
    color:'#fcfdff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
  bodyTerjemah: {
    backgroundColor: '#d9e9f9',

  },
  CarItem: {
    backgroundColor: '#d9e9f9',
  },
  judul: {
    fontFamily: 'lato',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  textArab: {
    paddingTop: 20,
    fontSize: 27,
    lineHeight: 40,
    fontFamily: 'lotus-linotype-light',
    fontWeight: 'normal',
  },
  textTerjemah: {
    paddingBottom: 10,
    fontFamily: "lato",
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
  textSumber: {
    paddingTop: 20,
    fontSize: 27,
    lineHeight: 37,
    fontFamily: 'lotus-linotype-light',

  },
  isiTeremahan: {
    lineHeight: 20,
    fontSize: 14,
  },
  sumberTeremah: {
    paddingTop: 15,
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'center',
  }
});

/*

{names.map((name) => (
  <Text>{name}</Text>
))}


*/
