import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 
const Header = () => {
  return (
    <View style={styles.header}>
     <Text style={styles.title}></Text>
     <MaterialCommunityIcons name="bank" size={24} color="white" style={styles.icon} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#005D62',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
});
export default Header;