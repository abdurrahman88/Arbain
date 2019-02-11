import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import { 
	Container, Header, Left, 
	Body, Right, Button, 
	Icon, Title, List, 
	ListItem, Badge, Card, Segment,
	CardItem, Content, Footer, FooterTab, Accordion } from 'native-base';
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

    this.dataArray = [
      { title: "Terjemah", content: this.data.terjemahan + '\n \n' + this.data.sumberIndo },
    ];
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

  _scrollTo() {
    this.scroller.scrollTo({x: 0, y: 50});
  }

  _renderHeader(item, expanded) {

    return (
      <View style={styles.headerTerjemah}>
        <Text header style={{ fontWeight: "600", color: '#ffffff', }}>
          {item.title}
        </Text>
        {expanded
          ? <Icon style={styles.iconAcc} name="remove-circle" />
          : <Icon style={styles.iconAcc} name="add" />}
      </View>
    );
  }

  _renderContent(item) {
    return (
      <View style={styles.headerRiwayat}   
      >
        <Text
          style={{
            padding: 10,
            fontStyle: "italic",
          }}
        >
          {item.content}
        </Text>
      </View>
    );
  }

	render() {

    return (
      <View style={styles.container}>
      	<Header 
          style={styles.header}
          androidStatusBarColor='#00695C'
        >
      		<Left>
            <Button transparent
              onPress= {() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Title style={styles.textBody}>Hadist Arba'in</Title>

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

      	<Content ref={(scroller) => {this.scroller = scroller}}>            
          <Card>
            <CardItem bordered style={{justifyContent: 'center', alignItems: 'center',}} >
              <Text style={styles.judul}>{this.data.judul}</Text>
            </CardItem>
            
            <CardItem style={{backgroundColor: '#ffffff',}}>
              <Body style={styles.bodyCard}>
                <Text style={styles.textArab}>{this.data.arab}</Text>
                <Text style={styles.textSumber}> {this.data.sumber} </Text>
              </Body>
            </CardItem>

          </Card>
          <Accordion
            dataArray={this.dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
      	</Content>
      </View>
    );
	}
}



const styles = StyleSheet.create({
  header: {  
    alignItems: 'center',
    backgroundColor: '#009688',    
    justifyContent: 'center',
    elevation: 5,
  },
  container: {
  	backgroundColor: "#fff",
  	flex: 1,
  },
  bodyCard: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconAcc: {
    color: 'white',
    paddingRight: 10,
    fontSize: 20,
  },
  headerTerjemah: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center" ,
    backgroundColor: "#009688",
    marginRight: 3,
    marginLeft: 3,
    elevation: 2,
    marginBottom: 5,
  },
  headerRiwayat: {
    padding: 10,
    backgroundColor: "#e3f1f1",
    marginRight: 3,
    elevation: 3,
    marginLeft: 3,
    marginBottom: 10,
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
    backgroundColor: '#009688',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginRight: 3,
    marginLeft: 3,
    borderRadius: 5,
  }, 
  noArab: {
    color:'#fcfdff',
    fontSize: 18,
    fontFamily: 'lotus-linotype-light',
  },
  noIndo: {
    paddingBottom: 2,
    color:'#fcfdff',
    fontSize: 20,
    fontFamily: 'SourceSansPro-Semibold',
  },
  
  bodyTerjemah: {
    backgroundColor: '#d9e9f9',

  },
  CarItem: {
    backgroundColor: '#d9e9f9',
  },
  judul: {
    fontFamily: 'SourceSansPro-Semibold',
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
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 34,
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
  },
  textBody: {
    fontSize: 20,
    fontFamily: 'SourceSansPro-Semibold',
    paddingLeft: 60,
  }
});

/*

{names.map((name) => (
  <Text>{name}</Text>
))}

<Card style={styles.bodyTerjemah}>
  <CardItem style={styles.CarICarItemtem}>
    <Body>
      <Text style={styles.textTerjemah}>Terjemah :</Text>
      <Text style={styles.isiTeremahan}>" {this.data.terjemahan}. "</Text>
      <Text style={styles.sumberTeremah}>( {this.data.sumberIndo} )</Text>
    </Body>
  </CardItem>
</Card>

*/
