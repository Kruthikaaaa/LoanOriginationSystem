import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router, Slot} from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Header from '../../components/customComponents/header';
import DdeForm from './ddeForm';
import { detailedDataEntryData, loanInformation } from '../../components/formComponents/formData';
import { generalInformation } from '../../components/formComponents/formData';


export default function DdeFormHeader() {
  const[selectedCard, setSelectedCard]=useState('');
  const handleCardPress = (cardName, data) => {
    setSelectedCard(cardName);
    router.push({ pathname: '/detailedDataEntry/ddeForm', params: { data: JSON.stringify(data) } });
  };
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header/>
      <View style={styles.headerContainer}>
      <TouchableOpacity  onPress={() => handleCardPress('Applicant Info', detailedDataEntryData)}>
      <View style={[styles.card, selectedCard === 'Applicant Info' && styles.selectedCard]}>
            <Text style={styles.cardText}>Applicant Info</Text>
            <Ionicons name="person" size={20} color="maroon" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  handleCardPress('Loan Info', loanInformation)}>
        <View style={[styles.card, selectedCard === 'Loan Info' && styles.selectedCard]}>
            <Text style={styles.cardText}>Loan Info</Text>
            <FontAwesome name="dollar" size={20} color="green" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  handleCardPress('General Info', generalInformation)}>
        <View style={[styles.card, selectedCard === 'General Info' && styles.selectedCard]}>
            <Text style={styles.cardText}>General Info</Text>
            <Ionicons name="information-circle" size={20} color="blue" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  handleCardPress('Documents Upload', loanInformation)}>
        <View style={[styles.card, selectedCard === 'Documents Upload' && styles.selectedCard]}>    
        <Text style={styles.cardText}>Documents Upload</Text>
            <Ionicons name="document" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <Slot/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginTop:30,
    
  },
  headerContainer: {
    flexDirection: 'row', // Ensure horizontal alignment
    justifyContent: 'space-around',
    alignItems: 'left',
    // padding: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginHorizontal: 10, // Add horizontal margin to space out cards
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    width: 90,
    height: 60,
  },
  cardText: {
    marginBottom: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },
   selectedCard: {
    backgroundColor: '#BFD7D8', // Light green color
  },
});

