// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {

  const handleLogoff = async () => {
    await AsyncStorage.removeItem('loggedIn');
    navigation.replace('Login');
  };

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.formContainer}>
          <Text style={GlobalStyles.text}>Bem-vindo ao Aplicativo de Desafios!</Text>
          <Button
            title="Ver Desafios"
            onPress={() => navigation.navigate('Challenges')}
            style={GlobalStyles.button}
          />
          <Button
            title="Sair"
            onPress={handleLogoff}
            color="#e57373"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
