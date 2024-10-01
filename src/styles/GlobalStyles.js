import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1b1f23', // Cor de fundo escura
  },
  text: {
    fontSize: 18,
    color: '#a4d4ae', // Texto em verde claro para contraste com o fundo escuro
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#4CAF50', // Borda verde
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#2e2e2e', // Cor de fundo escura
    color: '#a4d4ae', // Texto do input em verde claro
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50', // Botão verde
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff', // Texto branco para contraste
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza o formulário verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
  },
  list: {
    flex: 2,  // Garante que a lista ocupe mais espaço verticalmente
    marginTop: 20,
    width: '100%',
  },
  challengeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '#4CAF50', // Linha inferior verde
    borderBottomWidth: 1,
    backgroundColor: '#2e2e2e', // Fundo do item em tom escuro
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#4CAF50', // Botão de edição verde
    fontSize: 14,
    marginRight: 10,
  },
  deleteButton: {
    color: '#e57373', // Botão de exclusão vermelho claro
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo escuro mais transparente para o modal
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#2e2e2e', // Fundo do modal em tom escuro
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a4d4ae', // Título do modal em verde claro
  },
  modalInput: {
    height: 40,
    borderColor: '#4CAF50', // Borda verde para o input no modal
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#2e2e2e', // Fundo do input no modal em tom escuro
    color: '#a4d4ae', // Texto do input no modal em verde claro
  },
});

export default GlobalStyles;


