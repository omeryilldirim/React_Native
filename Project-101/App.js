import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title={'Ned Stark'} text={'Winter is coming!'}/>
      <Card title={'Arif ISIK'} text={'Uzaylilar tarafindan kacirildim, evet tarafindan'}/>
      <Card title={'Serbest'} text={'Ben baska bir ilde miyim?'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'gray',
  },
});
