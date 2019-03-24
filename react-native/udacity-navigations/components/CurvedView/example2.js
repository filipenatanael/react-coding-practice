import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class CurvedView extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.background} >
          <Image style={styles.image} source={{uri: 'https://http2.mlstatic.com/painel-banner-decorativo-festa-2-x-15-paisagens-dekorarte-D_NQ_NP_826811-MLB26635281341_012018-F.jpg'}} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    alignSelf: 'center',
    marginTop: 100,
    width: 400,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 100,
  },
  background: { // this shape is a circle
    borderRadius: 400, // border borderRadius same as width and height
    width: 400,
    height: 400,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 0, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 100, // same width and height for the container
    width: 200,
    position: 'absolute', // position it in circle
    bottom: 0, // position it in circle
    marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
  }
}
