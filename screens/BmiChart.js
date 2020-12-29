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
  ScrollView,Image
} from "react-native";

export default class BmiChart extends Component{
    render(){
        return(
            <View style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Image style={styles.image} source={require("../assets/bmiChart.png")}/>
            </View>
        )}
}
const styles = StyleSheet.create({
    image: {
        width: 800,
        height: 800,
      marginTop: 30,
      },
})