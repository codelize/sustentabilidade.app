import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import PrimaryButton from '../components/PrimaryButton'; // Botão primário

const HomeScreen = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.formContainer}>
          <Text style={GlobalStyles.text}>Bem-vindo ao Aplicativo de Desafios!</Text>
          
          {/* Botão para ver desafios estilizado */}
          <PrimaryButton
            title="Ver Desafios"
            onPress={() => navigation.navigate('Challenges')}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
