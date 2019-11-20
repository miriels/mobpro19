import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Alert,ScrollView,FlatList} from 'react-native';
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Microsoft Surface 2",   itemsname:"$400",               image:"https://id.wikipedia.org/wiki/Berkas:Microsoft_Surface(tablet).jpeg"},
        {id:2, name: "Microsoft Surface 3",  itemsname:"$420", image:""} ,
        {id:3, name: "Microsoft Surface 2 Pro", itemsname:"$450",     image:""} ,
        {id:4, name: "Microsoft Surface 3 Pro", itemsname:"$460",   image:""} ,
        {id:5, name: "Surface X ",   itemsname:"$500", image:""} ,
        {id:6, name: "Surface X Pro",   itemsname:"$520",           image:""} ,
        {id:7, name: "Surface Pro 7 ",   itemsname:"550", image:""} ,
        {id:8, name: "Surface Book 2",   itemsname:"350",           image:""} ,
        {id:7, name: "Surface Pro 7 ",   itemsname:"550", image:""} ,
        {id:8, name: "Surface Book 2",   itemsname:"350",           image:""} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.itemsname}>{item.itemsname}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  itemsname:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
 
});     