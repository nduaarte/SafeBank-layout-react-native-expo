import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const InvestSavings = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Poupança e Investimentos</Text>
        <View style={styles.square}>
            <View style={styles.alignItens}>
                <Icon name='md-cash' size={24} style={styles.icon} />
                <Text style={styles.subtitle}>Poupança</Text>
                <Icon name='ios-arrow-down' size={24} style={styles.iconArrow} />
            </View>
            <Text style={styles.description}>Guarde seu dinheiro agora mesmo</Text>
        </View>


        <View style={styles.square}>
            <View style={styles.alignItens}>
                <Icon name='md-list-box' size={24} style={styles.icon} />
                <Text style={styles.subtitle}>Investimentos</Text>
                <Icon name='ios-arrow-down' size={24} style={styles.iconArrowEnd} />
            </View>
            <Text style={styles.description}>Faça seu dinheiro render mais</Text>
        </View>        
    </View>
);

export default InvestSavings;
