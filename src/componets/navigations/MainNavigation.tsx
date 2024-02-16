import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/HomeScreen";
import AboutScreen from "../../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} 
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#cccc',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}/>
            <Tab.Screen name="About" component={AboutScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
    container:{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    menu:{
        padding: 3,
        
    }
})