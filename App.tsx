import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
      <StatusBar style='light' backgroundColor="#000000" />
      <Routes />
    </SafeAreaView>
  );
}