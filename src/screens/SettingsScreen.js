import React, { useState } from 'react';
import { View, Text, Switch, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.formContainer}>
          <Text style={GlobalStyles.text}>Configurações de Lembretes</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginTop: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SettingsScreen;
