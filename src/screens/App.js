import * as React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import MenuClient from './MenuClient/Menu';


const App= () => {
  return (
    <NavigationContainer>
  <View style={styles.containers}>
    <LinearGradient
      colors={['#FFFF', '#FFB88C']}
      style={styles.background}/>
      <MenuClient/>
  </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  containers:{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
});

export default App;