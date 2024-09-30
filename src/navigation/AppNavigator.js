import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackNavigator from './HomeStackNavigator.js';
import ChallengeScreen from '../screens/ChallengeScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import LoadingScreen from '../screens/LoadingScreen.js'; // Importa a tela de loading
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando os ícones

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingScreen} // Tela de Loading é a primeira a aparecer
          options={{ headerShown: false }} // Oculta o header na tela de loading
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs} // Carrega a navegação da aba após o loading
          options={{ headerShown: false }} // Remove o header para as abas
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Remove o header de todas as telas
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = 'home';
        } else if (route.name === 'Challenges') {
          iconName = 'list-alt';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { 
        backgroundColor: '#1b1f23', // Cor da barra de navegação
        borderTopWidth: 0,          // Remove a linha superior
        elevation: 0,               // Remove a sombra no Android
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="Challenges" component={ChallengeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
