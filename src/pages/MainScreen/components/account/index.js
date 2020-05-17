import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIoni from 'react-native-vector-icons/Ionicons';

const Account = () => (
    <View style={styles.container}>
        <View style={styles.menuContainer}>
            <Icon name='dollar' size={22} style={styles.icon} />
            <Text style={styles.title}>Saldo disponível</Text>
            <IconIoni name='ios-arrow-up' size={25} style={styles.iconArrow} />
        </View>

        <View style={styles.cashContainer}>
            <Text style={styles.money}>R$ 298.180,32</Text>
            <Text style={styles.creditLimit}>Saldo + Limite:</Text>
            <Text style={styles.creditLimit}>R$ 1.298.180,32</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Ver extrato</Text>
                </TouchableOpacity>            
            </View>
        </View>
    </View>
);

export default Account;
