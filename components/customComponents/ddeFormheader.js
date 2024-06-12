import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Slot, router } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Header from '../../components/customComponents/header';

export default function DdeFormHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.push('detailedDataEntry/ddeForm')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Applicant Info</Text>
              <Ionicons name="person" size={20} color="maroon" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('detailedDataEntry/page')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Loan Info</Text>
              <FontAwesome name="dollar" size={20} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('GeneralInfo')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>General Info</Text>
              <Ionicons name="information-circle" size={20} color="blue" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('DocumentsUpload')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Documents Upload</Text>
              <Ionicons name="document" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Slot />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Change to center for better alignment
    padding: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginHorizontal: 10,
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
});
