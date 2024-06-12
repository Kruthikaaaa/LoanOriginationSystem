import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from '../../components/customComponents/applicationCard'
import Header from '../../components/customComponents/header';
import FloatingButton from '../../components/customComponents/floatingButton';
import { router } from 'expo-router';


const List = () => {
  const goToBasicDataEntry=()=>{
    router.replace('/screens/basicInfoForm')
  }
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
      <Card/>
      <FloatingButton onPress={goToBasicDataEntry}/>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
 
export default List;