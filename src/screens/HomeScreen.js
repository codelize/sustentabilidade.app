import React from 'react';
import { View, Text, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
