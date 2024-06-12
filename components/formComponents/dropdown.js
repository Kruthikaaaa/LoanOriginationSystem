import { SelectList } from "react-native-dropdown-select-list";
import { View } from 'react-native'
import React from 'react'

export default function Dropdown() {
  return (
    <View>
        <SelectList 
boxStyles={{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12, // Make the border oval by using a large border radius
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16
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
  )
}
