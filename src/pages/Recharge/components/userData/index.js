import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function UserDate() {
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='DDD + Número' style={styles.input} />
        <Icon name='ios-arrow-down' size={22} style={styles.icon}/>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Operadora' style={styles.input}/>
        <Icon name='ios-arrow-down' size={22} style={styles.icon}/>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Valor (R$)' style={styles.input}/>
        <Icon name='ios-arrow-down' size={22} style={styles.icon}/>
      </View>

      <TouchableOpacity style={styles.buttonContinue}>
        <Text style={styles.textButtonContinue}>CONTINUAR</Text>
      </TouchableOpacity>
    </View> 
  );
}