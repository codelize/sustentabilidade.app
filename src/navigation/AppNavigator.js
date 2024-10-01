import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeStackNavigator from './HomeStackNavigator.js';
import ChallengeScreen from '../screens/ChallengeScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import LoginScreen from '../screens/LoginScreen.js'; // Tela de login
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar se o usuário está logado

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken'); // Busca o token ou outro dado de autenticação
        if (token) {
          setIsAuthenticated(true); // Se houver token, o usuário está logado
        } else {
          setIsAuthenticated(false); // Se não houver token, o usuário não está logado
        }
      } catch (e) {
        console.error(e);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        {/* Se o usuário estiver logado, vai para a Home */}
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        {/* Se o usuário não estiver logado, vai para a tela de Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o header na tela de login
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
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
        backgroundColor: '#1b1f23',
        borderTopWidth: 0,
        elevation: 0,
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
    <Tab.Screen name="Challenges" component={ChallengeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
