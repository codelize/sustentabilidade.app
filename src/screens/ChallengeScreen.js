import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

const ChallengeScreen = () => {
  const [inputText, setInputText] = useState('');
  const [challenges, setChallenges] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSave = () => {
    if (inputText.trim() === '') {
      Alert.alert('Erro', 'O desafio não pode estar vazio!');
      return;
    }

    setChallenges([...challenges, { id: Date.now().toString(), text: inputText }]);
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
        <Text style={GlobalStyles.text}>{item.text}</Text>
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
              placeholderTextColor="#59981a" // Cor do placeholder ajustada para branco
              value={inputText}
              onChangeText={setInputText}
            />
            <Button title="Salvar Desafio" onPress={handleSave} />
          </View>

          {/* FlatList com rolagem habilitada */}
          <FlatList
            data={challenges}
            keyExtractor={(item) => item.id}
            renderItem={renderChallengeItem}
            style={{ flex: 1 }} // Garante que o FlatList ocupe todo o espaço disponível para rolar
            contentContainerStyle={{ paddingBottom: 20 }} // Adiciona espaçamento na parte inferior
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
                    placeholderTextColor="#ffffff" // Cor do placeholder ajustada para branco
                  />
                  <Button title="Salvar" onPress={handleEdit} />
                  <Button title="Cancelar" onPress={() => setModalVisible(false)} />
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
