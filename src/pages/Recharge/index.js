import React from 'react';
import { View } from 'react-native';

import GeneralInfo from './components/GeneralInfo'
import UserDate from './components/userData';

export default function Recharge() {
  return(
    <View style={{flex: 1, backgroundColor: '#f5f9fc'}}>
      <GeneralInfo />
      <UserDate />
    </View>
  );
}