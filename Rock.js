import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {AppHeader} from './components/AppHeader'
export default class Rock{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text>Row Row Row YOur Boat Gently Down The Stream, Merily, Merily, Merily, Life the best it be</Text>
      </View>
    );
  }
}