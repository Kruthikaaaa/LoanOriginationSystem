import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const loans = [
    { id: '1',loanid: '1001', applicantName: 'Pratheksha Anand', loanType: 'Home Loan', status: 'Approved', location: 'Bangalore' },
    { id: '2',loanid: '1002', applicantName: 'Mike Johnson', loanType: 'Personal Loan', status: 'Rejected', location: 'Delhi' },
     { id: '3',loanid: '1003', applicantName: 'Jane Smith', loanType: 'Car Loan', status: 'Pending', location: 'Delhi' },
   // { id: '4',loanid: '1004', applicantName: 'Sachin S', loanType: 'Personal Loan', status: 'Pending', location: 'Mumbai' },
  ];
const LoanSummaryCards = ({ onFilter }) => {
  const noOfApplications = loans.length;  
  const pending = loans.filter(loan => loan.status === 'Pending').length;
  const approved = loans.filter(loan => loan.status === 'Approved').length;
  const rejected = loans.filter(loan => loan.status === 'Rejected').length;
 
  return (
    <View style={styles.summaryContainer}>
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('All')}>
        <Ionicons name="list" size={30} color="#333" />
        <Text style={styles.summaryHeading}> All</Text>
        <Text style={styles.summaryValue}>{noOfApplications}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Pending')}>
        <Ionicons name="time" size={30} color="#FFA500" />
        <Text style={styles.summaryHeading}>Pending</Text>
        <Text style={styles.summaryValue}>{pending}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Approved')}>
        <Ionicons name="checkmark-circle" size={30} color="#008000" />
        <Text style={styles.summaryHeading}>Approved</Text>
        <Text style={styles.summaryValue}>{approved}</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine} />
      <TouchableOpacity style={styles.summaryItem} onPress={() => onFilter('Rejected')}>
        <Ionicons name="close-circle" size={30} color="#FF0000" />
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
 
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Approved':
        return styles.approvedBadge;
      case 'Pending':
        return styles.pendingBadge;
      case 'Rejected':
        return styles.rejectedBadge;
      default:
        return styles.defaultBadge;
    }
  };
 
  const renderItem = ({ item }) => (
    
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.applicantName}>{item.applicantName}</Text>
        <View style={[styles.badge, getStatusBadgeStyle(item.status)]}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <Text style={styles.details}>Loan ID: {item.loanid}</Text>
      <Text style={styles.details}>Loan Type: {item.loanType}</Text>
      <Text style={styles.details}>Location: {item.location}</Text>
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
    // flex: 1,
    backgroundColor: 'white',
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
    borderRadius: 10,
    padding: 20,
    marginVertical: 2,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 4 },
    // elevation: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
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
  badge: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  approvedBadge: {
    backgroundColor: '#008000',
  },
  pendingBadge: {
    backgroundColor: '#FFA500',
  },
  rejectedBadge: {
    backgroundColor: '#FF0000',
  },
  defaultBadge: {
    backgroundColor: '#ccc',
  },
});
 
export default LoanList;
