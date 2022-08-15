
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Laptop from "../img/laptop.jpg";
import Menu from '../components/Menu';

const Home = ({ route }) => {

    const { showLoginName } = route.params;

    const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.  It has survived not only five centuries, but also the leap into electronic typesetting.";
    const descMore = "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.  It has survived not only five centuries, but also the leap into electronic typesetting.  It has survived not only five centuries, but also the leap into electronic typesetting.";
 
    return (
      <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topImgBox}>
            <Image
             style={styles.topImg}
            source={ Laptop }
            />
          </View>
          <View style={styles.topHeading}>
            <Text style={styles.topTitle}>Hello ! {showLoginName}</Text>
            <Text style={styles.topSubTitle}>Welcome to Home</Text>
          </View>
          <View style={styles.txtContentBox}>
            <Text style={styles.txtContent}>{desc}</Text>
            <Text style={[styles.txtContent, styles.txtContentPadd]}>{descMore}</Text>
          </View>
        </View>
        </ScrollView>
        <View style={styles.btmMenuBar}>
            <Menu />
          </View>
        </>
      );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#f06',
      alignItems: "center",
      justifyContent: 'center',
      marginBottom: 100,
    },
    topImgBox: {
      flex: 4,
      overflow: "hidden",
      marginTop: 30,
     // backgroundColor: '#f06',
      justifyContent: "space-around",
    },
    topImg :{
      width: "100%",
      aspectRatio: 1, 
      borderRadius: 20,
    },
    topHeading: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
    },
    topTitle: {
      fontSize: 25, 
      textTransform: "uppercase",
    },
    topSubTitle: {
      fontSize: 20, 
    },
    txtContentBox: {
      flex: 3,
     // backgroundColor: "#e2e2e2",
      paddingHorizontal: 20,
      paddingVertical: 25,
    },
    txtContent: {
      fontSize: 20,
    },
    txtContentPadd:{
      paddingTop: 25,
    },
    btmMenuBar:{
      flex: 1,
      backgroundColor:"#333", // gray
      position:"absolute",
      bottom: 0,
      flexDirection:"row",
      paddingVertical: 20,
      opacity: 0.95
    }
  });