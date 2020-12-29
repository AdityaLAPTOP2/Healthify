// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Modal,
//   KeyboardAvoidingView,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from "react-native";

// // import SantaAnimation from '../components/SantaClaus.js';
// import db from "../config";
// import firebase from "firebase";

// const Slideshow = require('react-slidez');
// export default class TipsScreen extends Component {
//   render(){
//       return(
//         <Slideshow
//         showIndex
//         showArrows
//         autoplay
//         enableKeyboard
//         useDotIndex
//         slideInterval={2000}
//         defaultIndex={1}
//         slides={['bmiChart.png', 'healthMain.jpg']}
//         effect={'fade'}
//         height={'100%'}
//         width={'100%'}
//       />
//       )
//   }

   
// }
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://i.pinimg.com/564x/68/fa/3f/68fa3fcb70ceae593b0b4bbb05b4d587.jpg",
        "https://i.pinimg.com/564x/16/3f/67/163f67579439a77dd68002b3e32c1c54.jpg",
        "https://i.pinimg.com/236x/0a/4c/2d/0a4c2d7889e3aceebc3d04ea6360a246.jpg",
        "https://i.pinimg.com/236x/43/60/7b/43607b93a73029c6935c7aa4e1e897ec.jpg",
        "https://i.pinimg.com/236x/70/e1/f4/70e1f4711c104334715549f8d4eb1db6.jpg",
        "https://i.pinimg.com/236x/91/48/00/914800361fe189956412f7ae75b97057.jpg",
        "https://i.pinimg.com/236x/f1/2f/3d/f12f3da912135af0faf59ae667a7ed2a.jpg",
        "https://i.pinimg.com/236x/8e/ec/1a/8eec1a98ea097e9ef0c760dbee1b6813.jpg",
        "https://i.pinimg.com/236x/14/f7/5d/14f75df5cf4165c0587d49a87f78a82c.jpg",
        "https://i.pinimg.com/236x/5c/a4/7e/5ca47ea2ddc16e5f62fcd3c2ce154b30.jpg"
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
        sliderBoxHeight={400}
        sliderBoxWidth={400}

          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  autoplay
  circleLoop
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // marginTop: 100,
    height:800
  }
});