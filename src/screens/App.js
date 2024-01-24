// Product by Ksperizer on 06-12-2023

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (

  <View style={styles.containers}>
    <LinearGradient
      colors={['#DE6262', '#FFB88C']}
      style={styles.background}/>
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