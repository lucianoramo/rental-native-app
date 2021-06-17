import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar'

import Alugar from '../screens/Alugar';
import Fidelidade from '../screens/Fidelidade';
import Lojas from '../screens/Lojas';
import Perfil from '../screens/Perfil';
import Reservas from '../screens/Reservas';


const Tab = createBottomTabNavigator();


export default (params) => (
    <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        initialRouteName = "Lojas"
        screenOptions = {{
            headerShown: false
        }} 
    
    >
        
        <Tab.Screen name="Alugar" component={Alugar}></Tab.Screen>
        <Tab.Screen name="Lojas" component={Lojas}></Tab.Screen>

        <Tab.Screen name="Reservas" component={Reservas}></Tab.Screen>

        <Tab.Screen name="Fidelidade" component={Fidelidade}></Tab.Screen>
        <Tab.Screen name="Perfil" component={Perfil}></Tab.Screen>


    </Tab.Navigator>
);