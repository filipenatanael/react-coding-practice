import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxListExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}><View style={styles.photo}></View></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    )
  }
}

// justifyContent: 'space-evenly' align center with iqual spaces between
// justifyContent: 'space-around', align center but top and bottom has the same size

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  box: {
    height: 100,
    backgroundColor: '#e76e63',
    margin: 10,
    padding: 5, // 2 * 5 = 10 sum on height
    borderWidth: 2, // 2 * 2  = 4 sum on height
    borderColor: 'blue',
  },
  photo: {
    height: 86, // boxHeight: 100 - (2 * paddingHeight) + (2 * borderWidthHeight) = 86
    width: 150,
    backgroundColor: 'yellow',
  }
})

export default FlexboxListExample;
