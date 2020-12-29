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
  FlatList,
} from "react-native";
import { ListItem ,Card} from "react-native-elements";

import db from "../config";
import firebase from "firebase";

export default class ViewTaskScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      details: [],
      docId: "",
    };
    this.requestRef = null;
    this.getDetails();
  }
  removeDetails = (requestId) => {
    db.collection("bmi")
      .where("user_id", "==", this.state.userId)
      .where("request_id", "==", requestId)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          //updating the doc
          db.collection("bmi").doc(doc.id).update({
            status: "complete",
          });
        });
      });
  };

  getDetails = () => {
    this.requestRef = db.collection("bmi")
      .where("user_id", "==", this.state.userId)
      .where("status", "==", "incomplete")
      .onSnapshot((snapshot) => {
        var details = snapshot.docs.map((doc) => doc.data());
        var docId = snapshot.docs.map((doc) => doc.id);
      //  console.log(this.state.docId);
        this.setState({
          details: details,
          docId: docId,
        });
      });
      console.log(this.state.details)
  };

  componentDidMount() {
    this.getDetails();
    console.log(this.state.details)
  }

  // componentWillUnmount() {
  //   this.requestRef();
  // }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <Card>
     
      {/* var dt={item.date}
    var dt1=toString(dt) */}
        {/* key={i} */}
       {/* // style={{backgroundColor: 'EE00FF'}} */}
       <View>
        <Card.Title>BMI:{item.bmi}</Card.Title>
        <Card.Title>HEIGHT:{item.height}</Card.Title>
        <Card.Title>WEIGHT:{item.weight}</Card.Title>
        <Card.Title>DATE:{item.date}</Card.Title>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log(item.request_id);
              this.removeDetails(item.request_id);
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
      
        </View>
        {/* subtitle={"Height:" + item.height}
        // subtitle={"Weight:" + item.weight}
        // subtitle={"Date:" + item.date}
        titleStyle={{ color: "black",  fontWeight:'800',
        fontSize:28 }}
        subtitleStyle={{color: "black",  fontWeight:'300',
        fontSize:25}}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log(item.request_id);
              this.removeDetails(item.request_id);
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        }
        bottomDivider */}
        </Card>
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.details.length === 0 ? (
          <View style={styles.subContainer}>
            <Text style={{ fontSize: 20 }}>Record of BMI</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.details}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
   justifyContent: "flex-start",
  alignItems: "flex-start",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#EE00FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'300',
    fontSize:20
  },
});
