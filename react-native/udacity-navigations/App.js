import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CurvedView from './components/CurvedView';
import TabNavigatorExample from './components/TabNavigatorExample';

export default class App extends React.Component {
  render() {
    return (
      <TabNavigatorExample />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
