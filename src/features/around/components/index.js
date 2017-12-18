import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";

import MapView from 'react-native-maps';

let styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
  },
})

const Around = props => (
  <View>
    <MapView
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      {props.markers.map(marker => (
        <MapView.Marker
          key={marker.id}
          coordinate={marker.position}
        >
        </MapView.Marker>
      ))}
    </MapView>
  </View>
);

export default Around;
