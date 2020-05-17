import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Welcome = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>Olá, Nycollas</Text>
        <Text style={styles.agency}>Ag 27493885-3</Text>
    </View>
);

export default Welcome;
