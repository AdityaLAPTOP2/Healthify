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
  Image,
} from "react-native";

// import SantaAnimation from '../components/SantaClaus.js';
import db from "../config";
import firebase from "firebase";

export default class DetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: "",
      lastName: "",
      contact: "",
    };
  }
  getDetails = () => {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            firstName: doc.data().first_name,
            lastName: doc.data().last_name,
            contact: doc.data().contact,
          });
        });
      });
  };
  componentDidMount() {
    this.getDetails();
  }
  render() {
    return (
        <ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}> WELCOME </Text>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/healthMain.jpg")}
          />
        </View>
        <Text style={styles.title}> First Name: </Text>
        <Text style={styles.subtitle}>{this.state.firstName}  </Text>
        <Text style={styles.title}> Last Name: </Text>
        <Text style={styles.subtitle}> {this.state.lastName} </Text>
        <Text style={styles.title}> Contact: </Text>
        <Text style={styles.subtitle}> {this.state.contact} </Text>
        <Text style={styles.title}> Email Id: </Text>
        <Text style={styles.subtitle}> {this.state.userId} </Text>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 800,
    height: 500,
 //   marginLeft: 200,
  },
  title: {
    fontSize: 25,
    fontWeight:"bold",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "300",
  },
});
