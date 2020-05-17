import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Support = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Atendimento</Text>
        <View style={styles.square}>
            <View style={styles.iconContainer}>
                <Icon name='ios-chatboxes' size={20} style={styles.icon} />
            </View>
            <Text style={styles.description}>
                Fale com a GENTE, encontre nossos contatos ou procure uma agência
            </Text>
        </View>
    </View>
);

export default Support;