import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default function PayScreen() {
  return(
    <View style={styles.container}>

      <Text>Clique no botão abaixo para ativar a câmera.</Text>

      <TouchableOpacity style={styles.buttonActiveCamera}>
        <Icon name='barcode' size={25} style={styles.icon} />
        <Text style={styles.textActiveCamera}>Leitor de código de barras</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <TextInput placeholder='Entre com o código de barras' keyboardType='numeric' style={styles.input} />

      <TouchableOpacity style={styles.buttonContinue}>
        <Text style={styles.buttonContinueText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}