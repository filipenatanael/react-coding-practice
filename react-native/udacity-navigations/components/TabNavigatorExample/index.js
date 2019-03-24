import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

/* Say we have two basic functional components that just render some text,
Hello and Goodbye: */

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

/* Passing an object into createBottomTabNavigator:

Inside the object, each key-and-value pair represents a single tab.
The keys represent the name of the tab; this is what users will see and press.
 Note that a screen property is included as well;
 this is the component that is rendered when the tab is active.

 Here comes the interesting part: what createBottomTabNavigator returns is actually a component!
 Since we have stored this in a Tabs variable,
 we can just render this as we would with any component:
*/

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  },
});

const TabsContainer = createAppContainer(Tabs);

class TabNavigatorExample extends Component {
  render() {
    return (
      <TabsContainer />
    );
  }
}

export default TabNavigatorExample;
