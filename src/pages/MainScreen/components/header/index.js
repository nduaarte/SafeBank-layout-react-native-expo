import React from 'react';
import { View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function header() {
  return (
    <View style={styles.container}>
      <Icon name='bell' size={20} style={styles.icon} />
      <Image source={require('./logo.png')} style={styles.image} />
      <Icon name='bars' size={20} style={styles.icon} />
    </View>
  );
}
