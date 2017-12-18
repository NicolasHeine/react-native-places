import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Button from "../../shared-ui/Button";
import Homer from "../../shared-ui/Icon/svg/Homer";

import Swiper from 'react-native-swiper';

import MapView from 'react-native-maps';

let style = {
  fontFamily: 'Poppins-Bold'
}

let styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
  },
})

const Home = ({ navigation }) => (
  <View>
    <View>
      <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
    </View>
  </View>
);

export default Home;
