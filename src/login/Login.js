import React, {useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LoginBg from "../img/loginBg.jpg";

const Login = ({ navigation }) => {
    const [agree, setAgree] = useState(false);
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(username, password );

    const submitHandler = () => {
       // return Alert.alert(username, password);
       if(username === "satya" && password === "welcome123") {
       // Alert.alert(`Thank you ${username}`)
          navigation.navigate("Home", {showLoginName: `${username}`})
          // sending entered username to next welcome user
       } else {
        Alert.alert(`Username and Password are not correct`)
       }
    }

  return (
    <View style={styles.container}>
        <ImageBackground style={styles.loginBgImg} 
        source={ LoginBg }>

      <View style={styles.logoBox}>
        <Text>
          <FontAwesome5 name="book-reader" size={100} color="#f2f2f2" />
        </Text>
        <Text style={styles.logoTxt}>DHRUV</Text>
      </View>
      <View style={styles.formBox}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBiner}>
            <TextInput
              style={styles.inputBox}
              autoCapitalize={false}
              placeholder="Enter user name"
              onChangeText={(val) => setUsername(val) }
            />
            <Feather style={styles.userIcon} name="user" size={20} />
          </View>
          <View style={styles.inputBiner}>
            <TextInput
              style={styles.inputBox}
              autoCapitalize={false}
              placeholder="enter password "
              secureTextEntry={true}
              onChangeText={(val) => setPassword(val) }
            />
            <Octicons
              style={styles.keyIcon}
              name="key"
              size={20}
              color="black"
            />
          </View>

          <View style={styles.inputBiner}>
            <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? '#0cc' : undefined}
             />
             <Text style={styles.agreeTxt}>I am agree to login</Text>
          </View>

          <View style={styles.inputBiner}>
            <TouchableOpacity 
            style={[styles.loginBtn,
                {
                  backgroundColor: agree ? '#0cc' : '#c2c2c2'
                  }
                 ]}
            disabled={!agree}
            onPress={ submitHandler }
            >
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0cc",
    justifyContent: "center",
    alignItems: "stretch",
  },
  loginBgImg : {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoTxt:{
    fontSize: 50,
    color: "#FFDF08",
  },
  logoBox: {
    flex: 1,
   // backgroundColor: "#ffc",
    justifyContent: "center", // vertically center
    alignItems: "center", // horizontally center
  },
  formBox: {
    flex: 2,
   // backgroundColor: "#fcf", // pink
    paddingHorizontal: 20,
    paddingVertical: 50,
   
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    padding: 30,
    borderRadius: 40,
    opacity: .95,
  },
  inputBiner: {
   // backgroundColor: "red",
    position: "relative",
    marginBottom: 20,
  },
  agreeTxt : {
    fontSize: 20,
    position: "absolute",
    left: 30,
    top: -5,
    color: "#777",
  },
  inputBox: {
    paddingBottom: 8,
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 20,
   
  },
  userIcon: {
    position: "absolute",
    left: 0,
    top: 5,
    color: "#999",
  },
  keyIcon: {
    position: "absolute",
    left: 0,
    top: 5,
    color: "#999",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "98%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#c2c2c2",
  },
  loginBtnTxt: {
    color: "#fff",
    fontSize: 25,
  }
});
