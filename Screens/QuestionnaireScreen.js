import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';


export default class QuestionnaireScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          Profession:'',
          weight:'',
          height:'',
          medicationTime:'',
          sleepTime:'',
          wokeUpTime:'',
          workingHours:'',
          numberOfMeals:'',
          exerciseTime:''
        }
    }

    AddInformation = () =>{
           db.collection("Questionnaire").add({
               "Profession":this.state.Profession,
               "Weight":this.state.weight,
               "Height":this.state.height,
               "WorkingHours":this.state.workingHours,
               "MedicationTime":this.state.medicationTime,
               "NumberOfMeals":this.state.numberOfMeals,
               "TimetoBed":this.state.sleepTime,
               "WokeUpTime":this.state.wokeUpTime,
               "ExerciseTime":this.state.exerciseTime
           })
           return Alert.alert("Information Added");
    }


    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>Tell us something about yourself</Text>
                
            </View>
            <View style = {styles.textboxContainer}>
                <TextInput
                style = {styles.inputBox}
                  placeholder = " Your Profession"
                  onChangeText = {(text)=>{
                      this.setState({
                          Profession:text
                      })
                  }}
                />

<TextInput
style = {styles.inputBox}
                  placeholder = " Your Weight"
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          weight:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Your Height (in inches)"
                  style = {styles.inputBox}
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          height:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Your Working Hours"
                  style = {styles.inputBox}
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          workingHours:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Any Disease (If yes then medication time)"
                  style = {styles.inputBox}
                  onChangeText = {(text)=>{
                      this.setState({
                          medicationTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Number of meals in 1 day"
                  style = {styles.inputBox}
                  keyboardType = {"numeric"}
                  onChangeText = {(text)=>{
                      this.setState({
                          numberOfMeals:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Time when you sleep"
                  style = {styles.inputBox}
                  onChangeText = {(text)=>{
                      this.setState({
                          sleepTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Time when you woke up"
                  style = {styles.inputBox}
                  onChangeText = {(text)=>{
                      this.setState({
                          wokeUpTime:text
                      })
                  }}
                />

<TextInput
                  placeholder = "Exercise time (If you do)"
                  style = {styles.inputBox}
                  onChangeText = {(text)=>{
                      this.setState({
                          exerciseTime:text
                      })
                  }}
                />
                </View>
                <View style = {styles.buttonContainer}>
                   <TouchableOpacity
                   style = {styles.button}
                    onPress = {()=>{
                        this.AddInformation();
                        this.props.navigation.navigate('Main');
                    }}
                    
                   >
                     <Text style = {styles.buttontext}>SUBMIT</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                     style = {styles.button}
                   >
                     <Text style = {styles.buttontext}>CANCEL</Text>
                   </TouchableOpacity>
                </View>

            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#D81B60',
        justifyContent:'center',
        flex:1,
        width:'100%',
        height:"100%"
    },
    headingContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:25,
        color:'white',
        marginTop:10,
        fontWeight:'bold'
    },
    textboxContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:300,
        height:40,
        marginTop:15,
        borderColor:'white',
        borderWidth:1.5,
        fontSize:15,
        alignSelf:'center',
        color:'white'
    },
     buttonContainer:{
        alignItems:'center',
        justifyContent:'center'
     },
     buttonText:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15,
        color:'#D81B60'
    },
    button:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:25,
        width:250,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:20,
        borderColor:'white'
    },
})