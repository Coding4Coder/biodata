import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';

const Menu = () => {
    const navigation = useNavigation();
    const openHomePage = () => {
      navigation.navigate("Home");
     }
    const openAboutPage = () => {
        navigation.navigate("About");
    }
    const openMissionPage = () => {
        navigation.navigate("Mission");
    }
    const openContactPage = () => {
        navigation.navigate("Contact");
    }
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuBtnIcon} onPress={openHomePage}>
            <Text> <AntDesign name="home" size={24} color="white" /> </Text>
            <Text style={styles.iconTxtColor}> Home </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBtnIcon} onPress={openAboutPage}>
          <Text> <FontAwesome name="book" size={24} color="white" /> </Text>
          <Text style={styles.iconTxtColor}> About </Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.menuBtnIcon} onPress={openMissionPage}>
           <Text><Foundation name="target-two" size={24} color="white" /> </Text>
            <Text style={styles.iconTxtColor}> Mission </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBtnIcon} onPress={openContactPage}>
           <Text><AntDesign name="contacts" size={24} color="white" /> </Text>
            <Text style={styles.iconTxtColor}> Contact </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        
    },
    menuBtn: {
       marginHorizontal:10,
       backgroundColor:"#C2C9D3",
       borderWidth:1,
       borderStyle: "solid", 
       padding: 10,
       fontSize: 20,
       borderRadius: 20,
       paddingHorizontal: 15,
    },
    menuBtnIcon: {
      marginHorizontal:2,
      paddingHorizontal: 2,
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
      color: "#fff",
   },
     iconTxtColor: {
       color: "#fff",
    }
})