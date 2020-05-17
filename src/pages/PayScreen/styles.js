import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  container: {
    padding: 10
  },  

  buttonActiveCamera: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#595959',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },

  icon: {
    marginRight: 10,
    color: 'white'
  },

  textActiveCamera: {
    color: 'white'
  },

  orText: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  input: {
    marginTop: 20,
    borderBottomWidth: 1,
    padding: 8,
    borderColor: '#b3b3b3'
  },

  buttonContinue: {
    padding: 15,
    backgroundColor: '#bfbfbf',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    marginTop: 10
  },

  buttonContinueText: {
    alignSelf: "center",
    fontWeight: 'bold',
    color: '#666666'
  }
})

export default styles;