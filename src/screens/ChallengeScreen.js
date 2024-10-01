import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';
import PrimaryButton from '../components/PrimaryButton'; // Botão primário
import SecondaryButton from '../components/SecondaryButton'; // Botão secundário

const ChallengeScreen = () => {
  const [inputText, setInputText] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const saveChallengesToStorage = async (challenges) => {
    try {
      await AsyncStorage.setItem('challenges', JSON.stringify(challenges));
    } catch (error) {
      console.log('Erro ao salvar desafios:', error);
    }
  };

  const loadChallengesFromStorage = async () => {
    try {
      const storedChallenges = await AsyncStorage.getItem('challenges');
      if (storedChallenges !== null) {
        setChallenges(JSON.parse(storedChallenges));
      }
    } catch (error) {
      console.log('Erro ao carregar desafios:', error);
    }
  };

  useEffect(() => {
    loadChallengesFromStorage();
  }, []);

  useEffect(() => {
    if (challenges.length > 0) {
      saveChallengesToStorage(challenges);
    }
  }, [challenges]);

  const handleSave = () => {
    if (inputText.trim() === '') {
      Alert.alert('Erro', 'O desafio não pode estar vazio!');
      return;
    }

    const newChallenge = { id: Date.now().toString(), text: inputText };
    setChallenges([...challenges, newChallenge]);
    setInputText('');
  };

  const handleDelete = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  const handleEdit = () => {
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === editId ? { ...challenge, text: editText } : challenge
    );
    setChallenges(updatedChallenges);
    setModalVisible(false);
  };

  const renderChallengeItem = ({ item }) => {
    return (
      <View style={GlobalStyles.challengeItem}>
        <Text style={GlobalStyles.challengeText}>{item.text}</Text>
        <View style={GlobalStyles.buttonsContainer}>
          <TouchableOpacity onPress={() => openEditModal(item.id, item.text)}>
            <Text style={GlobalStyles.editButton}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Text style={GlobalStyles.deleteButton}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const openEditModal = (id, text) => {
    setEditId(id);
    setEditText(text);
    setModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.container}>
          <View style={GlobalStyles.formContainer}>
            <Text style={GlobalStyles.text}>Insira seu desafio personalizado:</Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Escreva seu desafio"
              placeholderTextColor="#59981a"
              value={inputText}
              onChangeText={setInputText}
            />
            {/* Usando o botão primário */}
            <PrimaryButton title="Salvar Desafio" onPress={handleSave} /> 
          </View>

          <FlatList
            data={challenges}
            keyExtractor={(item) => item.id}
            renderItem={renderChallengeItem}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          {/* Modal para edição */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={GlobalStyles.modalContainer}>
                <View style={GlobalStyles.modalContent}>
                  <Text style={GlobalStyles.modalTitle}>Editar Desafio</Text>
                  <TextInput
                    style={GlobalStyles.modalInput}
                    value={editText}
                    onChangeText={setEditText}
                    placeholder="Edite seu desafio"
                    placeholderTextColor="#ffffff"
                  />
                  {/* Usando o botão primário */}
                  <PrimaryButton title="Salvar" onPress={handleEdit} />
                  {/* Usando o botão secundário para cancelar */}
                  <SecondaryButton title="Cancelar" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChallengeScreen;
