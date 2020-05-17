import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';



function MainButtonsBank() {

	const navigation = useNavigation();
	return(
		<View style={styles.container}>
			<View style={styles.containerButton}>
				<TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('PayScreen')}>
					<Icon name='barcode' size={22} style={styles.icon} />
					<Text style={styles.text}>Pagar</Text>
				</TouchableOpacity>


				<TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Transfer')}>
					<Icon name='money' size={24} style={styles.icon} />
					<Text style={styles.text}>Transferir</Text>
				</TouchableOpacity>


				<TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Recharge')}>
					<Icon name='arrow-circle-down' size={24} style={styles.icon} />
					<Text style={styles.text}>Recarga</Text>
				</TouchableOpacity>
			</View>

			<View sytle={styles.largerButtonContainer}>
				<TouchableOpacity style={styles.largerButton}>
					<View style={styles.iconContainer}>
						<Icon name='dollar' size={16} style={styles.icon} />
					</View>

					<Text style={styles.textLarger}>
						Junte seus compromissos em um único contrato com o Crédito SafeBank.
					</Text>            
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default MainButtonsBank;
