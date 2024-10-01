import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StyledScrollView, StyledText, StyledView } from '../../common/StyledComponents'

const Terms = () => {
  return (
    <StyledScrollView className="p-4 bg-white">
    <StyledView className="mb-6">
      <StyledText className="text-2xl font-bold mb-2">Terms and Conditions</StyledText>
      <StyledText className="text-base">
        These terms and conditions outline the rules and regulations for the use of our application. By accessing this app, we assume you accept these terms. Do not continue to use the app if you do not agree to all of the terms and conditions stated on this page.
      </StyledText>
      <StyledText className="mt-4 text-base">
        The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice: "Client", "You", and "Your" refers to you, the person using this app and compliant to the Company’s terms. "The Company", "Ourselves", "We", "Our", and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
      </StyledText>
      <StyledText className="mt-4 text-base">
        All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands.
      </StyledText>
    </StyledView>
  </StyledScrollView>
  )
}

export default Terms

const styles = StyleSheet.create({})