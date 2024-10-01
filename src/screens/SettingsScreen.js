import React from 'react';
import { View, Text, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';
import SecondaryButton from '../components/SecondaryButton'; // Botão secundário

const SettingsScreen = ({ navigation }) => {

  const handleLogoff = async () => {
    await AsyncStorage.removeItem('loggedIn');
    navigation.replace('Login');
    Alert.alert("Você saiu com sucesso!");
  };

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.formContainer}>
          <Text style={GlobalStyles.text}>Configurações</Text>

          {/* Botão para sair estilizado */}
          <SecondaryButton
            title="Sair"
            onPress={handleLogoff}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SettingsScreen;
