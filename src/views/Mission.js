
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import Menu from '../components/Menu';
import MissionData from '../api/MissionData';

const Mission = () => {
    const missionCard = ({item}) => {
      return (
        <>
        <View style={styles.topHeading}>
          <Text style={styles.topTitle}>{ item.title }</Text>
          <Text style={styles.topSubTitle}>{ item.subTitle }</Text>
       </View>
       <View style={styles.topImgBox}>
          <Image
            style={styles.topImg}
            source={ item.photo }
          />
      </View>
           <View style={styles.txtContentBox}>
               <Text style={styles.txtContent}>{ item.description }</Text>
          </View>
     </>
      );
    }
 
    return (
      <>
    
        <View style={styles.container}>
        <FlatList
            keyExtractor={(item) => item.id}
            data={MissionData}
            renderItem={missionCard}
            />
        
        </View>
      
        <View style={styles.btmMenuBar}>
            <Menu />
          </View>
        </>
      );
}

export default Mission;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#f06',
      alignItems: "center",
      justifyContent: 'center',
      marginBottom: 78,
    },
    topImgBox: {
      flex: 4,
      overflow: "hidden",
      marginTop: 30,
     // backgroundColor: '#f06',
      alignItems:"center"
     
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
      backgroundColor:"#D6D6D6",
      borderBottomColor:"#ccc",
      borderBottomWidth: 2.5,
      width: "100%",
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