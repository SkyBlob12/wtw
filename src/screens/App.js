// Product by Ksperizer on 06-12-2023

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuClient from './MenuClient/Menu';


export default function App() {
  return (
  <View style={styles.containers}>
    <LinearGradient
      colors={['#FFFF', '#FFB88C']}
      style={styles.background}/>
      <MenuClient/>
  </View>
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