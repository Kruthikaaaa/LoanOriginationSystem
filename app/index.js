import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './screens/loginScreen'
import BasicInfoForm from './screens/basicInfoForm'
import KYCOptionsScreen from './screens/kycScreen'
import DetailedDataEntry from './detailedDataEntry/ddeForm'
import Page from './detailedDataEntry/page'

export default function Index() {
  return (
    <View>
      {/* <BasicInfoForm/> */}
      {/* <KYCOptionsScreen/> */}
      <LoginScreen/>
 
      
    </View>
  )
}