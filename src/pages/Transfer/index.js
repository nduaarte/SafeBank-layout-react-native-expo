import React from 'react';
import { View } from 'react-native';

import GeneralInfo from './components/GeneralInfo';
import Favored from './components/Favored';
import ValueTrasnfer from './components/ValueTransfer';


export default function Transfer() {
  return(
    <View style={{flex: 1, backgroundColor: '#f5f9fc'}}>
      <GeneralInfo />
      <Favored />
      <ValueTrasnfer />
    </View>
  );
}