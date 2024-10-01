// screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      if (loggedIn === 'true') {
        navigation.replace('Home');
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const handleLogin = async () => {
    // Definindo o usuário e senha localmente
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      await AsyncStorage.setItem('loggedIn', 'true');
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.formContainer}>
          <Text style={GlobalStyles.text}>Login</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="Usuário"
            placeholderTextColor="#59981a"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={GlobalStyles.input}
            placeholder="Senha"
            placeholderTextColor="#59981a"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Entrar" onPress={handleLogin} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
