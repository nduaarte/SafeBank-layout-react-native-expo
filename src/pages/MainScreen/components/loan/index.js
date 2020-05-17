import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Loan = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Empréstimos</Text>
        <View style={styles.square}>
            <View style={styles.alignItens}>
                <Icon name='ios-cash' size={24} style={styles.icon} />
                <Text style={styles.subtitle}>Empréstimos</Text>
                <Icon name='ios-arrow-down' size={24} style={styles.iconArrow} />
            </View>
            <Text style={styles.description}>Organizando sua vida financeira</Text>
        </View>
    </View>
);

export default Loan;
