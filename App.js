import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Baa} from './Screens/Ba'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppHeader} from './components/AppHeader'
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader/>
      <Text style={styles.paragraph}>
        WELCOME, CHOOSE YOUR STORY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const TabNavigator=createBottomTabNavigator({
  Ba : {screen : Ba},
  Rock : {screen : Rock}
})
const Appcontainer = createAppContainer(TabNavigator);
