import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Button } from 'react-native';

export default class CurvedView extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
        <View style={styles.sliderContainerStyle} >
          <Image style={styles.slider} source={{uri: 'http://4.bp.blogspot.com/-xJObduUxMeI/VgcT5GIyOsI/AAAAAAAAADY/S1EhkhZZ1p8/s1600/Papel%2Bde%2BParede%2Bde%2Bnatureza%2B4k%2B%25286%2529.jpg'}} />
            <View style={styles.text} >
              <Button
                onPress={() => false}
                title="Learn More"
                color="rgba(0,255,0,0.5)"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
      </View>
    );
  }
}

const window = Dimensions.get('window');

const circumstance = 300;
const marginTop = 24;
const height = 300;
const width =  window.width + circumstance;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: marginTop,
    alignSelf: 'center',
    width: width,
    height: height,
    overflow: 'hidden',
  },
  sliderContainerStyle: {
    borderRadius: width,
    width: width * 2,
    height: width * 2,
    marginLeft: -width / 2,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  slider: {
    height: height,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: ((width * 2) - window.width) /2, // Responsivo ((widthCustom*2) - ImgTamanho) / 2

  },
  text: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 25,
    height: height,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: ((width * 2) - window.width) /2, // Responsivo ((widthCustom*2) - ImgTamanho) / 2
    backgroundColor: 'transparent'
  }
});
