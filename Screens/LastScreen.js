import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import AppHeader from '../Components/AppHeader';


export default class LastScreen extends React.Component{
    

    
    render(){
        return(
            <View style = {styles.Container}>
                <AppHeader navigation = {this.props.navigation}/>
                <Text style = {styles.text}>Congratulations! you are registered on Punctual lifestyle.</Text>
                <Text style = {styles.text}>Now your life would be much easier with daily basis notifications.</Text>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    Container:{
        
        backgroundColor:'#D81B60',
        
        flex:1,
        width:'100%',
        height:"100%"
    },
    text:{
        fontSize:25,
        color:'white',
        marginTop:10,
        fontWeight:'bold',
        alignSelf:'center'
    }
})
