import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula o tempo de loading
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Redireciona para a Home após o loading
    }, 3000); // Tempo de espera de 3 segundos

    return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/susten.jpg')} style={styles.logo} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cor de fundo da tela de loading
  },
  logo: {
    width: 1800, // Ajuste de largura da logo
    height: 1120, // Ajuste de altura da logo
    marginBottom: 20, // Espaçamento entre a logo e o indicador de loading
    resizeMode: 'contain', // Mantém a proporção da imagem
  },
});

export default LoadingScreen;
