import React, { Component } from 'react';
import { View, StyleSheet, Slider, Image, Dimensions } from 'react-native';

export default class CurvedView extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >

        <View style={styles.sliderContainerStyle} >
          <Slider  style={styles.slider} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
containerStyle: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width / 1.7
},
sliderContainerStyle: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
},
slider: {
    height: window.width / 1.7,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: '#9DD6EB'
}});
