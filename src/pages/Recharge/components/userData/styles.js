import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container:{
    padding: 15
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#cccc',
    marginBottom: 20,
  },

  icon: {
    color: '#5555'
  },

  buttonContinue: {
    alignSelf: 'center',
    backgroundColor: '#cccc',
    padding: 15,
    width: '95%',
    borderRadius: 30,
    marginTop: 10
  },

  textButtonContinue: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#666'
  }
})

export default styles;