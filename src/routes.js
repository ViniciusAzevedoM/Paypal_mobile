import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Home from './pages/Home';
import Config_Screen from './pages/Config_Screen';

export default function Routes() { 
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Config_Screen" component={Config_Screen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}