import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconIoni from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'expo-linear-gradient';
import styles from './styles';

const Cards = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Cartões</Text>

        <View style={styles.cards}>
            <Icon name='cc-mastercard' size={30} style={styles.icon} />
            <Text style={styles.cardName}>Cartão Final</Text>
            <Text style={styles.numberCard}>5846</Text>
            <IconIoni name='ios-arrow-down' size={20} style={styles.icon} />
        </View>

        <View style={styles.cards}>
            <Icon name='cc-mastercard' size={30} style={styles.icon} />
            <Text style={styles.cardName}>Cartão Final</Text>
            <Text style={styles.numberCard}>5462</Text>
            <IconIoni name='ios-arrow-down' size={20} style={styles.icon} />
        </View>

        <View style={styles.onlineCard}>
            <Text style={styles.onlineCardText}>Cartão compra online</Text>
        </View>

        <View style={styles.addCard}>
            <View style={styles.iconContainer}>
                <Icon name='credit-card' size={20} style={styles.iconAddCard} />                
            </View>
            <Text style={styles.textAddCard}>Nycollas, precisando de um cartão de crédito? Veja nossas opções</Text>
        </View>
    </View>
);

export default Cards;
