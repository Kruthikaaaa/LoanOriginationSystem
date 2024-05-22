// import { CustomInput } from "../../components/formComponents/customInput";
// // import Dropdown from "../../components/formComponents/dropdown";
// import RadioButton from "../../components/formComponents/customRadioButton";
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native'
// import React,{useState} from 'react'
// import { basicInfoFormData } from "../../components/formComponents/formData";
// import Collapsible from 'react-native-collapsible';
// import { SelectList } from "react-native-dropdown-select-list";

// export default function BasicInfoForm() {
//     const [validationErrors, setValidationErrors] = useState({});
//     const [formValues, setFormValues] = useState([]);
//     const [selectedValue, setSelectedValue] = useState(null); 
//     const[radioSelect, setradioSelect]=useState(null);
//     const [isCollapsed, setIsCollapsed] = useState({
      
//         Basic: false,
       
      
//       });

//       const toggleSection = (section) => {
//         setIsCollapsed({ ...isCollapsed, [section]: !isCollapsed[section] });
//       };
    

//     const onSubmit = async () => {
      
//         console.log("Form data", formValues);
       
//         const errors = validateForm();
//         if (Object.keys(errors).length > 0) {
         
//           setValidationErrors(errors);
//           console.log(validationErrors);
//         }
//         else{
         
         
//           try{

//             console.log(formValues)
        
//           }
          
      
//               catch(err){
//                   console.log("error");
//               }
//             }
  
//           }

//     const validateForm = () => {
//         const errors = {};
//         basicInfoFormData.elements.forEach((element) => {
  
        
//           // Perform validation for visible fields
//           if (element.isRequired && !formValues[element.name]) {
//             errors[element.name] = `${element.title} is required`;
//           }
//           if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
//             errors[element.name] = element.validation.message;
//           }
//         });
//         return errors;
//       };
    
    

//     const renderFormElements = (section) => {
//         return basicInfoFormData.elements
//           .filter((element) => element.section === section)
//           .map((element, index) => (
//             <View key={index} style={styles.formElement}>
//               {renderFormElement(element)}
//               {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
//             </View>
//           ));
//       };
//     const renderFormElement = (element) => {
//         const onSelectRadio = (item) => {
//             setradioSelect(item.value);
//             setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.id})); 
//             console.log('Selected value:', item.id);
//         }


//         const handleSelect = (item) => {
//             setSelectedValue(item);
//             setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
//             console.log(element.name, item);
//         };
    


//         const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;


//         switch (element.type) {
          
//             case 'TextInput':
//                 return (
//                   <View>
//                       {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
//                     <CustomInput
//                         key={element.name}
//                         title={element.title}
//                         placeholder={element.placeholder}
//                         // control={control}
//                         isRequired={element.isRequired}
//                         inputType={element.inputType}
//                         name={element.name}
//                         rules={{ required: element.isRequired ? `${element.title} is required` : false }}
//                         // errors={errors}
//                         onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
//                         value={formValues[element.name] || ''} 
//                     />
                    
//                     </View>
//                 );
                

//             case 'dropdown':
//                 return (
//                     <View>
//                     <View style = {styles.inputContainer}>
//                     <Text style={styles.label}>{element.title}{starMark}</Text>
//                     <SelectList 
//                 boxStyles={{
//                     borderWidth: 1,
//                     borderColor: '#ccc',
//                     borderRadius: 12, // Make the border oval by using a large border radius
//                     paddingVertical: 10,
//                     paddingHorizontal: 10,
//                     fontSize: 16
//                 }}
//                 setSelected={(label) => {
//                    // handleSelect(label); // Call handleSelect to save the selected value
//                     setSelectedValue(label); // Update selected values
//                 }}
//                 data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
//                 save="value"
//                 onSelect={() => handleSelect(selectedValue) } // Log selected values
//             />
//                     </View>
//                     {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
//                     </View>
//                 );
               
//                     case 'RadioButton':
//                         return( 
//                           <View style = {styles.inputContainer}>
//                           <Text style={styles.label}>{element.title}{starMark}</Text>
                            
//                                 <RadioButton style={styles.inputContainer}
//                                      onSelect={onSelectRadio}
//                                      SelectedData={selectedValue} 
//                                      disableLine={1}
//                                      value={selectedValue}
//                                      onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
//                                      data={basicInfoFormData}
//                                      title={element.title}
//                                      // Pass the data prop here
//                                 />
//                                 </View>

//                         )
         
              
//     };
// }
//   return (
//     <View>
//         <ScrollView>
//           <View style={styles.card}>
//             <View style={styles.section}>
//               {Object.keys(isCollapsed).map((section, index) => (
//                 <View key={index} style={styles.sectionContainer}>
//                   <TouchableOpacity onPress={() => toggleSection(section)}>
//                     <Text style={styles.sectionTitle}>{section}</Text>
          
//                   </TouchableOpacity>
//                   <Collapsible collapsed={isCollapsed[section]}>
//                     {renderFormElements(section)}
//                   </Collapsible>
//                 </View>
//               ))}
//             </View>

//             <Button title="Submit" onPress={onSubmit} color="#023B5E" />

       
//             </View>
          
//         </ScrollView>



//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     cardContainer: {
//         flex: 1,
//         paddingHorizontal: 5,
//         paddingTop: 2,
//         paddingBottom:15,
//         backgroundColor: '#d1e0ed'
//     },
//     card: {
//         backgroundColor: '#FFFFFF', // White card background
//         borderRadius: 2,
//         padding: 20,
//         shadowColor: '#000000',
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5, // For Android shadow
//     },
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingTop: 20,
//         backgroundColor:'#cad5e8'
//     },
//     buttonContainer:{
//     flex: 1,
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'flex-end', // Align items to the start (left)
//     justifyContent: 'flex-end', // Align items to the start (left)
//     padding: 10,
//     },
//     section: {
//         marginBottom: 20,
        
//     },
//     scrollViewContainer: {
//       maxHeight: 350, // Set the maximum height for scrolling
//     },
//     addressContainer: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       padding: 10,
//       marginBottom: 10,
//     },
//     addressLabel: {
//       fontSize: 16,
//       marginBottom: 5,
//     },
//     sectionTitle: {
//         fontSize: 20, // Increase font size for emphasis
//         fontWeight: 'bold',
//         marginBottom: 15, // Increase margin for better separation
//         color: 'black', // Use a darker color for better readability
        
//         paddingBottom: 5, // Add padding to space out the underline from the text
//     },
//     inputContainer: {
//         marginBottom:8

//     },
//     backButton: {
//         alignSelf: 'flex-end', // Align button to the start (left)
//         marginRight: 'auto',
//         color:'#023B5E'
//          // Push button to the leftmost corner
//       },
//     dropdownIcon: {
//         width: 20,
//         height: 20,
//         position: 'absolute',
//         right: 10,
//         top: 9,
//     },
//     label: {
//         marginBottom: 3,
//         fontSize: 12,
//         fontWeight: 'bold',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         backgroundColor:'white',
//         paddingVertical: 10,
//         paddingHorizontal: 11,
//         fontSize: 16,
//     },
//     error: {
//         color: 'red',
//         marginBottom:3,
//         fontSize: 12,
//     },
//     switch:{
//       alignItems:'flex-start'
//       },
    
// });



import { View, Text, Image } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

import { CustomInput } from "../../components/formComponents/customInput";
import Dropdown from "../../components/formComponents/dropdown";
// import RadioButton from "../../components/formComponents/customRadioButton";
import {  ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React,{useState} from 'react'
import { basicInfoFormData } from "../../components/formComponents/formData";
import Collapsible from 'react-native-collapsible';
import { SelectList } from "react-native-dropdown-select-list";
import { themeColor, lightThemeColor } from '../../constants/constants';
import { DropdownIcon, DropupIcon } from '../../assets/images/assets';

export default function BasicInfoForm() {
        const [validationErrors, setValidationErrors] = useState({});
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    const[radioSelect, setradioSelect]=useState(null);
    const [isCollapsed, setIsCollapsed] = useState({
      
        'Basic Information': false,
       
      
      });

      const toggleSection = (section) => {
        setIsCollapsed({ ...isCollapsed, [section]: !isCollapsed[section] });
      };
    

    const onSubmit = async () => {
      
        console.log("Form data", formValues);
       
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
         
          setValidationErrors(errors);
          console.log(validationErrors);
        }
        else{
         
         
          try{

            console.log(formValues)
        
          }
          
      
              catch(err){
                  console.log("error");
              }
            }
  
          }

    const validateForm = () => {
        const errors = {};
        basicInfoFormData.elements.forEach((element) => {
  
        
          // Perform validation for visible fields
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
        return basicInfoFormData.elements
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
            setradioSelect(item.value);
            setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.id})); 
            console.log('Selected value:', item.id);
        }


        const handleSelect = (item) => {
            setSelectedValue(item);
            setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
            console.log(element.name, item);
        };
    


        const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;


        switch (element.type) {
          
            case 'TextInput':
                return (
                  <View>
                      {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={element.placeholder}
                        // control={control}
                        isRequired={element.isRequired}
                        inputType={element.inputType}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        // errors={errors}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''} 
                    />
                    
                    </View>
                );
                

            case 'dropdown':
                return (
                    <View>
                    <View style = {styles.inputContainer}>
                    <Text style={styles.label}>{element.title}{starMark}</Text>
                    <SelectList 
                boxStyles={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    borderWidth: 0, // Ensure no other border is set
                     // Ensure no other border color is set
                }}
                setSelected={(label) => {
                   // handleSelect(label); // Call handleSelect to save the selected value
                    setSelectedValue(label); // Update selected values
                }}
                data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
                save="value"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                    </View>
                    {/* {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>} */}
                    </View>
                );
               
                    // case 'RadioButton':
                    //     return( 
                    //       <View style = {styles.inputContainer}>
                    //       <Text style={styles.label}>{element.title}{starMark}</Text>
                            
                    //             <RadioButton style={styles.inputContainer}
                    //                  onSelect={onSelectRadio}
                    //                  SelectedData={selectedValue} 
                    //                  disableLine={1}
                    //                  value={selectedValue}
                    //                  onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
                    //                  data={basicInfoFormData}
                    //                  title={element.title}
                    //                  // Pass the data prop here
                    //             />
                    //             </View>

                    //     )
         
              
    };
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


  )
}

const styles = StyleSheet.create({
    cardContainer: {
       
        padding: 10,
        backgroundColor: '#BFD7D8',
    },
    card: {
        backgroundColor: '#FFFFFF', // White card background
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
        marginBottom: 20,
    },
    scrollViewContainer: {
        paddingBottom: 20, // Padding to avoid content being hidden by the button
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20, // Increase font size for emphasis
        fontWeight: 'bold',
        marginBottom: 15, // Increase margin for better separation
        color: '#005D62', // Use a darker color for better readability
        paddingBottom: 5,
         // Add padding to space out the underline from the text
    },
    inputContainer: {
        marginBottom: 8,
    },
    label: {
        marginBottom: 3,
        fontSize: 12,
        fontWeight: 'bold',
        color:'#005D62'
    },
    error: {
        color: 'red',
        marginBottom: 3,
        fontSize: 12,
    },
    dropdownIcon:{
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 9,
    }

})