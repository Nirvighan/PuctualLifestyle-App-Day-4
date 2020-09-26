import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';


export default class LastScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Congratulations! you are registered on Punctual lifestyle.</Text>
                <Text>Now your life would be much easier with daily basis notifications.</Text>
            </View>
        )
    }
}