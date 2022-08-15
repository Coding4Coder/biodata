import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/Home';
import About from './src/views/About';
import Mission from './src/views/Mission';
import Contact from './src/views/Contact';
import Login from './src/login/Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      {/* Contact */}
      <Stack.Screen name='Login' component={Login}
       options={{
        headerTitleStyle:{fontSize:30, color: "white"},
        headerTitle:"Please Login here",
        headerTitleAlign:"center",
        headerStyle:{backgroundColor:"#0cc"}
         }} 
          />
      {/* Home */}
      <Stack.Screen name='Home' component={Home} 
      options={{
        headerTitleStyle:{fontSize:30},
        headerTitle:"DHRUV",
        headerTitleAlign:"center"
         }} 
      />
      {/* About */}
      <Stack.Screen name='About' component={About} 
      options={{
        headerTitleAlign:"center",
        headerTitle:"About us"
      }} 
      />
      {/* Mission */}
      <Stack.Screen name='Mission' component={Mission} />
      {/* Contact */}
      <Stack.Screen name='Contact' component={Contact} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;