import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Favored = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.forText}>Para:</Text>
      <View style={styles.subContainer}>
        <Text style={styles.favoredSelect}>Selecione o Favorecido </Text>
        <Icon name='ios-arrow-forward' size={20} style={styles.icon} />
      </View>
    </View>
  );
}

export default Favored;