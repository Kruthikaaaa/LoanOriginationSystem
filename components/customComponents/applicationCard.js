import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons
 
const loans = [
  { id: '1', applicantName: 'John Doe', loanType: 'Home Loan', status: 'Approved' },
  { id: '2', applicantName: 'Jane Smith', loanType: 'Car Loan', status: 'Pending' },
  { id: '3', applicantName: 'Mike Johnson', loanType: 'Personal Loan', status: 'Rejected' },
  { id: '4', applicantName: 'Sachin S', loanType: 'Personal Loan', status: 'Pending' },
];
 
const LoanSummaryCards = ({ onFilter }) => {
  const noOfApplications = loans.length;
  const pending = loans.filter(loan => loan.status === 'Pending').length;
  const approved = loans.filter(loan => loan.status === 'Approved').length;
  const rejected = loans.filter(loan => loan.status === 'Rejected').length;
 
  return (
    <View style={styles.summaryContainer}>
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('All')}>
        {/* <Ionicons name="list" size={30} color="#333" /> */}
        <Text style={styles.summaryHeading}> All</Text>
        <Text style={styles.summaryValue}>{noOfApplications}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Pending')}>
        {/* <Ionicons name="time" size={30} color="#FFA500" /> */}
        <Text style={styles.summaryHeading}>Pending</Text>
        <Text style={styles.summaryValue}>{pending}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Approved')}>
        {/* <Ionicons name="checkmark-circle" size={30} color="#008000" /> */}
        <Text style={styles.summaryHeading}>Approved</Text>
        <Text style={styles.summaryValue}>{approved}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Rejected')}>
        {/* <Ionicons name="close-circle" size={30} color="#FF0000" /> */}
        <Text style={styles.summaryHeading}>Rejected</Text>
        <Text style={styles.summaryValue}>{rejected}</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const LoanList = () => {
  const [filteredLoans, setFilteredLoans] = useState(loans);
 
  const handleFilter = (status) => {
    if (status === 'All') {
      setFilteredLoans(loans);
    } else {
      setFilteredLoans(loans.filter(loan => loan.status === status));
    }
  };
 
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.applicantName}>{item.applicantName}</Text>
      <Text style={styles.details}>Loan Type: {item.loanType}</Text>
      <Text style={styles.details}>Status: <Text style={styles.status}>{item.status}</Text></Text>
    </View>
  );
 
  return (
    <View style={styles.container}>
      <LoanSummaryCards onFilter={handleFilter} />
      <FlatList
        data={filteredLoans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  summaryHeading: {
    fontSize: 14,
    fontWeight: 'bold',
   
    color: '#333',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
   
    color: '#008000',
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  applicantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  status: {
    fontWeight: 'bold',
    color: '#008000',
  },
});
 
export default LoanList;