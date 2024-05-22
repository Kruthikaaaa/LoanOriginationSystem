import { View, Text, TextInput, StyleSheet } from "react-native";
import { themeColor } from "../../constants/constants";

export const CustomInput = ({ title, placeholder, onChange, value, errors, readOnly,inputType, isRequired }) => {
  //const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;

  return(
  
  <View style={styles.container}>
   <Text style={styles.label}>{title}{isRequired && <Text style={{ color: 'red' }}>*</Text>}</Text>

  <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      keyboardType={inputType}
   
      // error={error}
    />
    {/* {errors && <Text style={styles.error}>{errors}</Text>} */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color:'#005D62'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 16,
    
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
});