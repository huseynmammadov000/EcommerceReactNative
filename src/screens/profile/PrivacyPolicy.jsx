import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledScrollView, StyledText, StyledView } from '../../common/StyledComponents'

const PrivacyPolicy = () => {
  return (
    <StyledScrollView className="p-4 bg-white">
    <StyledView className="mb-6">
      <StyledText className="text-2xl font-bold mb-2">Privacy Policy</StyledText>
      <StyledText className="text-base">
        Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our application, and other sites we own and operate.
      </StyledText>
      <StyledText className="mt-4 text-base">
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
      </StyledText>
      <StyledText className="mt-4 text-base">
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
      </StyledText>
      <StyledText className="mt-4 text-base">
        We do not share any personally identifying information publicly or with third parties, except when required to by law.
      </StyledText>
    </StyledView>
  </StyledScrollView>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})