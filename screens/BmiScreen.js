import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

// import SantaAnimation from '../components/SantaClaus.js';
import db from "../config";
import firebase from "firebase";

export default class BmiScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId:firebase.auth().currentUser.email,
      weight: 0,
      height: 0,
      bmi: 0.0,
    };
  }
  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }
calculateBmi=(weight,height)=>{
 
  var h=parseFloat(height);
  var w=parseFloat(weight);
var b=w/(h*h);

this.setState({bmi:b});

var randomRequestId = this.createUniqueId()
var dt=new Date().toString();
var dt1=dt.slice(0,15)
db.collection("bmi").add({
  "user_id":this.state.userId,
  "weight":this.state.weight,
  "height":this.state.height,
  "bmi":b,
  "date":dt1,
  "request_id"  : randomRequestId,
  "status":"incomplete",
})
console.log(this.state.bmi);
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
        <Text style={{fontSize:35,fontWeight:"bold",marginTop:-100}}>Calculate BMI</Text>

        <Text style={{fontSize:24,fontWeight:"bold",marginTop:20}}>Enter your weight in kg</Text>
        <TextInput
        style={styles.formTextInput}
          placeholder="Weight"
          keyboardType="numeric"
          onChangeText={(text) => {
            this.setState({ weight: text });
          }}
        ></TextInput>

        <Text style={{fontSize:24,fontWeight:"bold",marginTop:20}}>Enter your height in mt</Text>
        <TextInput
        style={styles.formTextInput}
          placeholder="Height"
          keyboardType="numeric"
          onChangeText={(text) => {
            this.setState({ height: text });
          }}
        ></TextInput>
        <TouchableOpacity
        style={styles.button}
          onPress={()=>{this.calculateBmi(this.state.weight, this.state.height)
        }}
        >
          <Text style={styles.buttonTitle}>Calculate BMI</Text>
        </TouchableOpacity>

      <Text style={{fontSize:28,fontWeight:"bold",marginTop:20}}>Your BMI is:{this.state.bmi}</Text>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    marginBottom:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:40
    },
  }
)