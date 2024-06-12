import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/formComponents/customInput';
import RadioButton from '../../components/formComponents/customRadioButton';
import Collapsible from 'react-native-collapsible';
import { SelectList } from 'react-native-dropdown-select-list';
import { themeColor } from '../../constants/constants';
import { DropdownIcon, DropupIcon } from '../../assets/images/assets';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { loanInformation } from '../../components/formComponents/formData';

export default function DdeForm() {
  const [validationErrors, setValidationErrors] = useState({});
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [radioSelect, setRadioSelect] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState({

  });
  
  const params = useLocalSearchParams();
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  const toggleSection = (section) => {
    setIsCollapsed({ ...isCollapsed, [section]: !isCollapsed[section] });
  };

  useEffect(() => {
    if (params.data) {
      const parsedData = JSON.parse(params.data);
      setFormData(parsedData);
      const initialCollapsedState = {};
      parsedData.elements.forEach((element) => {
        initialCollapsedState[element.section] = initialCollapsedState[element.section] ?? true;
      });
      setIsCollapsed(initialCollapsedState);
    }
  }, [params.data]);

  const onSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      console.log(validationErrors);
    } else {
      try {
        console.log(formValues);
        router.navigate('screens/kycScreen');
      } catch (err) {
        console.log('error');
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    formData.elements.forEach((element) => {
      if (element.isRequired && !formValues[element.name]) {
        errors[element.name] = `${element.title} is required`;
      }
      if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
        errors[element.name] = element.validation.message;
      }
    });
    return errors;
  };

  const renderFormElements = (section) => {
    return formData.elements
      .filter((element) => element.section === section)
      .sort((a, b) => a.order - b.order)
      .map((element, index) => (
        <View key={index} style={styles.formElement}>
          {renderFormElement(element)}
          {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
        </View>
      ));
  };

  const renderFormElement = (element) => {
    const onSelectRadio = (item) => {
      setRadioSelect(item.value);
      setFormValues((prevFormValues) => ({ ...prevFormValues, [element.name]: item.value }));
      console.log('Selected value:', item.value);
    };

    const handleSelect = (item) => {
      setSelectedValue(item);
      setFormValues((prevFormValues) => ({ ...prevFormValues, [element.name]: item }));
      console.log(element.name, item);
    };

    const handleInputChange = (name, value) => {
      setFormValues((prevFormValues) => {
        const updatedFormValues = { ...prevFormValues, [name]: value };
        const errors = { ...validationErrors };
        const element = formData.elements.find((el) => el.name === name);

        if (element) {
          if (element.isRequired && !value) {
            errors[name] = `${element.title} is required`;
          } else if (element.validation && element.validation.regex && !element.validation.regex.test(value)) {
            errors[name] = element.validation.message;
          } else {
            delete errors[name];
          }
        }

        setValidationErrors(errors);
        return updatedFormValues;
      });
    };

    const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;

    switch (element.type) {
      case 'TextInput':
        return (
          <View key={element.name}>
            <CustomInput
              title={element.title}
              placeholder={element.placeholder}
              isRequired={element.isRequired}
              inputType={element.inputType}
              name={element.name}
              onChange={(value) => handleInputChange(element.name, value)}
              value={formValues[element.name] || ''}
            />
          </View>
        );

      case 'dropdown':
        return (
          <View key={element.name} style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}{starMark}</Text>
            <SelectList
              boxStyles={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
                paddingHorizontal: 10,
                fontSize: 16,
                borderWidth: 0,
              }}
              setSelected={(label) => setSelectedValue(label)}
              data={element.dropdownData.map((item) => ({ value: item.key, label: item.value }))}
              save="value"
              onSelect={() => handleInputChange(element.name, selectedValue)}
            />
          </View>
        );

      case 'RadioButton':
        return (
          <View key={element.name} style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}{starMark}</Text>
            <RadioButton
              onSelect={onSelectRadio}
              SelectedData={radioSelect}
              disableLine={1}
              value={radioSelect}
              onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
              data={loanInformation}
              title={element.title}
            />
          </View>
        );

      default:
        return null;
    }
  };

  if (!formData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.cardContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.card}>
          <View style={styles.section}>
            {Object.keys(isCollapsed).map((section, index) => (
              <View key={index} style={styles.sectionContainer}>
                <TouchableOpacity onPress={() => toggleSection(section)}>
                  <Text style={styles.sectionTitle}>{section}</Text>
                  <Image
                    source={isCollapsed[section] ? DropdownIcon : DropupIcon}
                    resizeMode="contain"
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed[section]}>
                  {renderFormElements(section)}
                </Collapsible>
              </View>
            ))}
          </View>
          <Button title="Submit" onPress={onSubmit} color={themeColor} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    backgroundColor: '#BFD7D8',
    marginTop: 100,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#005D62',
    paddingBottom: 5,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#005D62',
  },
  error: {
    color: 'red',
    marginBottom: 3,
    fontSize: 12,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 9,
  },
});
