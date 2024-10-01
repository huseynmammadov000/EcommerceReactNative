import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '../../../common/StyledComponents';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../../common/Layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { storage } from '../../../utils/MMKVStorage';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleInputChange = (inputName, inputValue) => {
    setFormData(prevState => ({...prevState, [inputName]: inputValue}));
  };

  const submitData = async () => {
    try {
      const response = await fetch(
        'http://192.168.199.1:4000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );
      const data = await response.json();

      if (response.ok && data.accessToken != null) {
        storage.set('token', data.accessToken);
        const decodedToken = jwtDecode(data.accessToken);
        const username = decodedToken.username; 
        const email = decodedToken.email;
        const id = decodedToken.id;
        storage.set('name',username);
        storage.set('email',email);
        storage.set('id',id);

        console.log('Token:', data.accessToken);
        console.log(data);
        console.log('name:', username);
        console.log('Token:', email);
        console.log('id:', id);

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
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}
      contentContainerStyle={{flex: 1}}>

      <StyledView className="flex-1 bg-slate-50 mt-6 px-5">
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
            Daxil ol
          </StyledText>
        </StyledTouchableOpacity>

        <StyledView className="flex-row justify-center mt-6">
          <StyledText className="text-gray-500 text-lg">
            Hesabınız yoxdur?
          </StyledText>
          <StyledTouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <StyledText className="text-violet-500 text-lg font-bold ml-2">
              Qeydiyyatdan keçin
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
      </KeyboardAwareScrollView>

    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({});
