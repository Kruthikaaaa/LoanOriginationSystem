import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from '../../components/customComponents/applicationCard'
import Header from '../../components/customComponents/header';
 
const List = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
      <Card/>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
 
export default List;