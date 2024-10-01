import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../../common/Layout'
import { StyledText, StyledTouchableOpacity, StyledView } from '../../../common/StyledComponents'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'
import PasswordInput from '../components/PasswordInput'
import { storage } from '../../../utils/MMKVStorage';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState();

      const navigation = useNavigation();
    
      const handleInputChange = (inputName, inputValue) => {
        setFormData(prevState => ({...prevState, [inputName]: inputValue}));
      };

      const submitData = async () => {
        try {
          const response = await fetch('http://192.168.199.1:4000/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username:formData.username,
              email: formData.email,
              password: formData.password
            }),
          });
          console.log(response);

          const data = await response.json();
          if (response.ok) {
            storage.set('token', data.accessToken);
    
            console.log('Token:', data.accessToken);
            
           navigation.navigate('Homepage');
          } else {
            setErrors({ general: data.message });
            console.log('Login failed:', data.message);
          
          }
        } catch (error) {
          console.log('Something went wrong', error);
        }
      };
      useEffect(() => {
        console.log(formData);
      }, [formData]);
  return (
    <Layout>
        <StyledView  className="flex-1 bg-slate-50 mt-6 px-5">
        <Input
          inputName="username"
          inputValue={formData?.username}
          handleInputChange={handleInputChange}
          placeholder="Enter username"
          error={errors?.username}
        />

<Input
          inputName="email"
          inputValue={formData?.email}
          handleInputChange={handleInputChange}
          placeholder="Enter email"
          error={errors?.email}
        />
<PasswordInput
          inputName="password"
          inputValue={formData.password}
          handleInputChange={handleInputChange}
          placeholder="Enter password"
          error={errors?.password}
        />
        <StyledTouchableOpacity className="mt-2">
          <StyledText className="text-right text-gray-500">
            Şifreni unutmusunuz?
          </StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={submitData} className="bg-green-300 w-full mt-4 py-3 rounded-[18px] items-center">
          <StyledText className="text-white text-lg text-slate-600 font-bold">
           Submit
          </StyledText>
        </StyledTouchableOpacity>
        <StyledView className="flex-row justify-center mt-6">
          <StyledText className="text-gray-500 text-lg">
           Do you have an account?
          </StyledText>
          <StyledTouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <StyledText className="text-violet-500 text-lg font-bold ml-2">
              Login
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        </StyledView>

    </Layout>
  )
}

export default Register;

const styles = StyleSheet.create({})