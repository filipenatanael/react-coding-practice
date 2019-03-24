import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurvedView from './components/CurvedView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <CurvedView />
        </View>
          <View style={{
            flex: 3,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ width: 100, height: 100, backgroundColor: 'blue',
            shadowRadius: 3,
            shadowOpacity: 0.8,
            shadowColor: '#fff)',
            elevation: 5,
            shadowOffset: {
              width: 0,
              height: 3
            }}}>

            </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
