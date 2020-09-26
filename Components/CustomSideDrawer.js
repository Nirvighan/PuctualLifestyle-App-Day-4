import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import WelcomeScreen from '../Screens/WelcomeScreen';
import { Component } from 'react';
import { DrawerItems} from 'react-navigation-drawer';

export default class CustomSideDrawer extends Component{
    constructor(){
      super();
      this.state = {
        image:'#',
        name:'',
        docId:'',
        userId:firebase.auth().currentUser.email,
  
      }
    }
  
  
   
  
    render(){
      return(
        <View style={{flex:1}}>
          <View style = {{flex:0.5,alignitems:'center',backgroundColor:'orange'}}>
           
           <Text style = {{fontWeight:'100',fontSize:20,marginTop:10}}>{this.state.name}</Text>
          </View>
          <View style={styles.drawerItemsContainer}>
  
            <DrawerItems {...this.props}/>
          </View>
          <View style={styles.logOutContainer}>
            <TouchableOpacity style={styles.logOutButton}
            onPress = {() => {
                this.props.navigation.navigate('Welcome')
                firebase.auth().signOut()
            }}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  
  var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    },
    imageContainer:{
      flex:0.75,
      width:'40%',
      height:'20%',
      marginLeft:20,
      marginTop:30,
      borderRadius:40
    }
  })