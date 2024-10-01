import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../../common/StyledComponents';
import Input from '../auth/components/Input';
import EditButton from '../../../assets/icons/pen.png';
import {request, PERMISSIONS} from 'react-native-permissions';
import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {storage} from '../../utils/MMKVStorage';

const EditProfile = () => {
  const [formData, setFormData] = useState({username: '', email: ''});

  const [oldUserName, setOldUsername] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [id, setId] = useState();
  const [token,setToken] = useState();
  const navigation = useNavigation();
  const [selectedImg, setSelectedImg] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUsername = storage.getString('name');
    const storedEmail = storage.getString('email');
    const storedId = storage.getString('id');
    const storedToken = storage.getString('token')
    if (storedUsername && storedEmail) {
        setOldUsername(storedUsername);
        setOldEmail(storedEmail);
      setId(storedId);
      setToken(storedToken)
      setFormData({ username: storedUsername, email: storedEmail });
    }
    console.log('username', oldUserName);
    console.log(id);
    console.log(token);
  }, []);
  const handleInputChange = (inputName, inputValue) => {
    setFormData(prevState => ({
      ...prevState,
      [inputName]: inputValue || prevState[inputName],
    }));
  };
  const submit = async () => {
    try {
        
      const response = await fetch(
        `http://192.168.199.1:4000/users/edit/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            username: formData.username === oldUserName ? undefined : formData.username, 
            email: formData.email === oldEmail ? undefined : formData.email,
          }),
        },
      );
      const data = await response.json();
console.log(response);
      if (response.ok) {
        storage.set('name', formData.username);
        storage.set('email', formData.email);
        console.log(token);
        console.log(id);
        navigation.navigate('ProfileScreen');
      } else {
        setErrors({general: data.message});
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  return (
    <StyledView className="flex-1 bg-white">
      <StyledView className="items-center mt-6">
        <StyledImage
          source={{
            uri: 'https://i.pinimg.com/564x/2f/bb/d2/2fbbd2145909f1eb1ea8a8d5077ae311.jpg',
          }}
          className="w-24 h-24 rounded-full"
        />
        <StyledTouchableOpacity
          onPress={() => {
            request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then(result => {
              result === 'granted'
                ? launchImageLibrary(
                    {mediaType: 'photo', includeBase64: true},
                    response => {
                      if (!response.didCancel && !response.error) {
                        setSelectedImg(
                          JSON.stringify[response.assets[0].base64].trim(),
                        );
                      }
                    },
                  )
                : Alert.alert();
            });
          }}
          className="absolute bottom-0 right-2/4 bg-white  rounded-full">
          <StyledImage source={EditButton} className="w-6 h-6" />
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className="px-6 mt-8">
        <StyledText className="text-gray-500 mb-1">Username</StyledText>
        <Input
        inputName="username"
        //   inputValue={formData?.username}
          //   onChangeText={setUsername}
          handleInputChange={handleInputChange}
          placeholder={oldUserName}
          className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
        />
      </StyledView>

      <StyledView className="px-6 mt-6">
        <StyledText className="text-gray-500 mb-1">E-mail</StyledText>
        <Input
        inputName="email"
        //   inputValue={formData?.email}
          //   onChangeText={setEmail}
          handleInputChange={handleInputChange}
          placeholder={oldEmail}
          className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
          editable={false}
        />
      </StyledView>

      <StyledTouchableOpacity
        className="bg-green-400 rounded-lg py-3 mx-6 absolute bottom-8 left-0 right-0"
        onPress={submit}>
        <StyledText className="text-center text-white text-lg font-bold">
          Save Changes
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default EditProfile;
