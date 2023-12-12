// Import necessary components and libraries
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

// Create a stack navigator for each tab
const Tab = createMaterialTopTabNavigator();

// Dummy screens for demonstration
const Screen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello Screen 3</Text>
  </View>
);

// Main component with top tab navigation
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Screen1} />
        <Tab.Screen name="Tab2" component={Screen2} />
        <Tab.Screen name="Tab3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
