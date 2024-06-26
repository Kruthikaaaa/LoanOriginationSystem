import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { PanImage } from "../../assets/images/assets";
 
const PanVerificationScreen = () => {
  const [panNumber, setPanNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpFieldVisible, setOtpFieldVisible] = useState(false);
  const [otpButtonText, setOtpButtonText] = useState("Send OTP");
  const [timer, setTimer] = useState(0);
  const goToDde=()=>{
    router.replace('detailedDataEntry/ddeForm');
  }
 
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && otpFieldVisible) {
      clearInterval(interval);
      setOtpButtonText("Resend OTP");
    }
    return () => clearInterval(interval);
  }, [timer, otpFieldVisible]);
 
  const handleSendOtp = () => {
    setOtpFieldVisible(true);
    setTimer(120);
    setOtpButtonText("Resend OTP");
    Alert.alert("OTP Sent");
  };
 
  const handleValidateOtp = () => {
    Alert.alert("OTP Validated");
  };
 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('/screens/loginScreen')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.title}>PAN VERIFICATION</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Pan Number</Text>
              {/* <Image
                source={PanImage}
                style={styles.panImage}
              /> */}
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Enter PAN number"
                value={panNumber}                          
                onChangeText={(text) => setPanNumber(text)}
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                style={[styles.otpButton, timer > 0 && styles.disabledButton]}
                onPress={handleSendOtp}
                disabled={timer > 0}
              >
                <Text style={styles.otpButtonText}>{otpButtonText}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shortUnderline} />
          </View>
          {otpFieldVisible && (
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>OTP</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter OTP"
                  value={otp}
                  onChangeText={(text) => setOtp(text)}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.validateButton} onPress={handleValidateOtp}>
                  <Text style={styles.validateButtonText} onPress={goToDde}>Validate</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.shortUnderline} /> */}
              {timer > 0 ? (
                <Text style={styles.timerText}>Resend OTP in {formatTime(timer)}</Text>
              ) : (
                <Text style={styles.expiredText}>The OTP has expired</Text>
              )}
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#BFD7D8',
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 25,
    color: '#1F2937',
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B5563',
  },
  panImage: {
    width: 28,
    height: 28,
    marginLeft: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#D1D5DB',
    paddingVertical: 12,
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
//   shortUnderline: {
//     height: 1,
//     backgroundColor: '#D1D5DB',
//     marginTop: 8,
//     width: '100%',
//   },
  otpButton: {
    marginLeft: 10,
    backgroundColor: '#005D62',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  otpButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  validateButton: {
    marginLeft: 10,
    backgroundColor: '#005D62',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  validateButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#A1A1AA',
  },
  timerText: {
    marginTop: 12,
    color: '#1F2937',
    fontWeight: '600',
    textAlign: 'center',
  },
  expiredText: {
    marginTop: 12,
    color: 'red',
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});
 
export default PanVerificationScreen;
 