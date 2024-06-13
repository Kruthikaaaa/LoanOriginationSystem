import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BranchKyc, AadhaarEkyc } from '../../assets/images/assets';
import { router } from 'expo-router';

const KYCOptionsScreen = () => {
    const goToApplicantsList=()=>{
        router.navigate('screens/applicantsList')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your KYC verification option</Text>
      <Text style={styles.subtitle}>
        For Proceeding further, you can voluntarily at your discretion choose, one of the following KYC options.
      </Text>
      <TouchableOpacity onPress={goToApplicantsList}>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Image
            source={AadhaarEkyc} // Replace with your own icon path
            style={styles.icon}
          />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Voluntary Aadhaar (e-KYC)</Text>
            <Text style={styles.optionDescription}>
              Simple and faster way to apply for personal loan. If you choose Aadhaar e-KYC as an option the same can be effected online during this session and it is faster.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>

      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Image
            source={BranchKyc} // Replace with your own icon path
            style={styles.icon}
          />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Upload Officially valid Documents (Branch KYC)</Text>
            <Text style={styles.optionDescription}>
              Upload required documents and get a loan post verification. If you choose the physical OVD KYC Option, either the bank's representative may get in touch with you or you may have to visit the Bank's Branch.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHOOSE & CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  optionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  option: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  optionTextContainer: {
    
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#003366',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
  },
  button: {
    marginTop:12,
    backgroundColor: '#005D62',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default KYCOptionsScreen;
