// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { StyledText, StyledTouchableOpacity, StyledView } from '../../common/StyledComponents'
// import { storage } from '../../utils/MMKVStorage'

// const Profile = () => {
//   return (
//     <StyledView>
//         <StyledTouchableOpacity className='w-auto bg-red-500 p-4 m-4 rounded-lg'
//       onPress={()=>{
//         storage.delete("token")
//       }}>
//         <StyledText >Logout</StyledText>
//       </StyledTouchableOpacity>
//     </StyledView>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({})

import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from '../../common/StyledComponents';
import { storage } from '../../utils/MMKVStorage';

const Profile = () => {
  const [username,setUsername]= useState('')
  const [email,setEmail]= useState('')
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const getStoredData = () => {
        const storedUsername = storage.getString('name');
        const storedEmail = storage.getString('email');
        if (storedUsername) setUsername(storedUsername);
        if (storedEmail) setEmail(storedEmail);
      };

      getStoredData();
    }, [])
  );
  return (
    <StyledView className="flex-1 bg-white p-4">
      <StyledView className="flex items-center mb-4">
        <StyledImage
          source={{ uri: 'https://i.pinimg.com/564x/2f/bb/d2/2fbbd2145909f1eb1ea8a8d5077ae311.jpg' }} 
          className="w-24 h-24 rounded-full"
        />
        <Text className="mt-2 text-lg font-bold">{username}</Text>
      </StyledView>

      <StyledTouchableOpacity
        onPress={() => navigation.navigate('Terms')}
        className="flex-row justify-between items-center p-4 bg-gray-100 rounded-lg mb-2"
      >
        
        <StyledText className="text-lg">Qaydalar və şərtlər</StyledText>
        <StyledText className="text-purple-500">→</StyledText>
      </StyledTouchableOpacity>

      <StyledTouchableOpacity
        onPress={() => navigation.navigate('PrivacyPolicy')}
        className="flex-row justify-between items-center p-4 bg-gray-100 rounded-lg mb-2"
      >
        <StyledText className="text-lg">Məxfilik siyasəti</StyledText>
        <StyledText className="text-purple-500">→</StyledText>
      </StyledTouchableOpacity>

      <StyledTouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        className="flex-row justify-between items-center p-4 bg-gray-100 rounded-lg"
      >
        <StyledText className="text-lg">Tənzimləmələr</StyledText>
        <StyledText className="text-purple-500">→</StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
  className="bg-white border border-green-800 rounded-lg py-3 mx-6 absolute bottom-8 left-0 right-0"
  onPress={() => {
    storage.delete("token");
    storage.delete("name");
    storage.delete("email");
  }}
>
  <StyledText className="text-center text-black text-lg font-bold">Logout</StyledText>
</StyledTouchableOpacity>
    </StyledView>
  );
};

export default Profile;
