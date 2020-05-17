import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const GeneralInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.agencyContainer}>
        <Text style={styles.agencyTitle}>Agência/Conta</Text>
        <Text>8347/04.836047.2</Text>
      </View>

      <View>
        <Text style={styles.creditTitle}>Saldo em conta</Text>
        <Text style={styles.credit}>R$ 298.180,32</Text>
        <Text style={styles.limitDescription}>
          Sld. CC + Limite:
          <Text style={styles.limit}> R$ 1.298.180,32</Text>
        </Text>
      </View>
    </View>
  )
}

export default GeneralInfo;