import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1b1f23', 
  },
  text: {
    fontSize: 18,
    color: '#a4d4ae', 
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#4CAF50', 
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#2e2e2e', 
    color: '#a4d4ae', 
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50', 
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',      
  },
  challengeListContainer: {
    flex: 1,
    maxHeight: height * 0.4, 
  },
  listContentContainer: {
    paddingBottom: 20, 
  },
  challengeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '#4CAF50', 
    borderBottomWidth: 1,
    backgroundColor: '#2e2e2e', 
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#4CAF50', 
    fontSize: 14,
    marginRight: 10,
  },
  deleteButton: {
    color: '#e57373', 
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#2e2e2e', 
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a4d4ae', 
  },
  modalInput: {
    height: 40,
    borderColor: '#4CAF50', 
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#2e2e2e', 
    color: '#a4d4ae', 
  },
});

export default GlobalStyles;
