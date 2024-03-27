// BottomMenu.jsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuClient = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.qrcodeMenu}>
      <Image
        style={styles.qrcode}
        source={require('../../icons/qrcodeMenu.png')}
      />
      </TouchableOpacity>
      <Image
      style={styles.backMenu}
      source={require('../../icons/backgroundMenu.png')}/>
      <View style={styles.containerItem}>
        <TouchableOpacity style={styles.itemMenu}>
          <Image
            style={styles.logo}
            source={require('../../icons/accueilMenu.png')}
          />
          <Text style={styles.menuTextSelected}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemMenu}>
          <Image
            style={styles.logo}
            source={require('../../icons/parcourirMenu.png')}
          />
          <Text style={styles.menuText}>Parcourir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemMenu}>
          <Image
            style={styles.logo}
            source={require('../../icons/favorisMenu.png')}
          />
          <Text style={styles.menuText}>Favoris</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemMenu}>
            <Image
              style={styles.logo}
              source={require('../../icons/profilMenu.png')}
            />
            <Text style={styles.menuText}>Profil</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0
  },
  
  backMenu: {
    width:430,
    height:96,
  },

  logo:{
    width:25,
    height:25,
  },

  itemMenu:{
    flex: 1,
    alignItems: 'center',
    top:5
  },

  containerItem:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32
  },

  menuText:{
      color: '#2828288c',
      fontSize:13,
  },

  menuTextSelected:{
    fontSize:13,
    color: '#de6262'
  },

  qrcode:{
    width:65,
    height:65,
    
  },

  qrcodeMenu:{
    position: 'absolute',
    left:182,
    bottom: 70
  }
});

export default MenuClient;
