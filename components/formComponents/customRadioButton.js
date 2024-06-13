import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"

import {  Selected, UnSelected } from "../../assets/images/assets";
export default function RadioButton({ onSelect, disableLine, title, value, data, rdata}) {
  const radioButtonOptions = data.elements.find(element => element.type === 'RadioButton').radioData || rdata;
  const[selectedData, setSelectedData]=useState('');
 
  const renderItems = ({ item }) => {
    const selectHandler = () => {
      setSelectedData(item);
      onSelect(item.key); 
    };
 
    return (
      <TouchableOpacity onPress={selectHandler} style={styles.radioButton}>
        <Text style={styles.radioLabel}>
          {item.value}
        </Text>
        <Image
          style={styles.image}
          source={selectedData && selectedData.value === item.value ? Selected : UnSelected}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
 
  return (
    <>

      <View style={styles.radioButtonContainer}>
        <FlatList
          horizontal
          data={radioButtonOptions}
          renderItem={renderItems}
          keyExtractor={(item) => item.label} // Assuming each label is unique
        />
      </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  label: {
    marginBottom: 9,
    fontSize: 12,
    fontWeight: 'bold',
  },
  radioLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, // Adjust as needed for spacing between radio buttons
  },
  image: {
    width: 20,
    height: 20,
  },
});