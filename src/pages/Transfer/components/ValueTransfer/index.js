import React,{ useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function ValueTransfer() {

  const [contar, setContar] = useState(0);

  function addValue(value) {
    setContar(contar + value);
  }

  function resetValue() {
    setContar(contar - contar);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>Valor:</Text>

      <View style={styles.mainValueContainer}>
        <Text style={styles.mainValue}>R$ {contar},00</Text>

        <TouchableOpacity style={styles.xButton} onPress={() => resetValue()}>
          <Text style={styles.x}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.valuesContainer}>
        <TouchableOpacity onPress={() => addValue(1)}>
          <Text style={styles.valuesBox}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addValue(5)}>
          <Text style={styles.valuesBox}>+5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addValue(10)}>
          <Text style={styles.valuesBox}>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addValue(50)}>
          <Text style={styles.valuesBox}>+50</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => addValue(100)}>
          <Text style={styles.valuesBox}>+100</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addValue(500)}>
          <Text style={styles.valuesBox}>+500</Text>
        </TouchableOpacity>   
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ValueTransfer;