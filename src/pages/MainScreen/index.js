import React from 'react';
import { View, ScrollView } from 'react-native';


import Header from './components/header';
import Welcome from './components/welcome';
import Account from './components/account';
import MainButtonsBank from './components/mainButtonsBank';
import Cards from './components/cards';
import Loan from './components/loan';
import InvestSavings from './components/invest&Savings';
import Support from './components/support';


export default function MainScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#f5f9fc'}}>
      <Header />
      <ScrollView>
        <Welcome />
        <Account />
        <MainButtonsBank />
        <Cards />
        <Loan />
        <InvestSavings />
        <Support />
      </ScrollView>
    </View>
  );
}