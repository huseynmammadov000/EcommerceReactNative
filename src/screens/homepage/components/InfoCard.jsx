import React, {useEffect, useState} from 'react';
import {StyledText, StyledView} from '@common/StyledComponents';
import {
  StyledImage,
  StyledTouchableOpacity,
} from '../../../common/StyledComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image} from 'react-native';
import {storage} from '../../../utils/MMKVStorage';

const InfoCard = ({cardItem}) => {
  const navigation = useNavigation();
  const [token, setToken] = useState();
  const route = useRoute(); 
  const isBasket = route.name === 'Basket';
  const  basketButton = !isBasket;
  const  removeButton = isBasket;


  const addToBasket = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.199.1:4000/basket/add/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  const removeToBasket = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.199.1:4000/basket/remove/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  useEffect(() => {
    const storedToken = storage.getString('token');

    setToken(storedToken);
  }, []);
  return (
    <StyledTouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsPage', {
          item: cardItem,
        });
      }}
      className="rounded-lg mb-1 p-2 ml-0 mr-0"
      style={{
        width: '51%',
        margin: '3px',
      }}>
      <StyledView className="bg-gray-200 rounded-lg">
        <StyledImage
          source={{uri: cardItem.imageUrl[0]}}
          className="h-32 w-full rounded-lg "
        />
        <StyledView className="bg-gray-200 rounded-bl-lg rounded-br-lg">
          <StyledText className="mb-2 ml-2 text-lg font-semibold text-black">
            {cardItem.title}
          </StyledText>

          <StyledView className="flex-row justify-between mb-3 ml-2">
            <StyledText className="font-bold text-violet-900">
              {cardItem.price} {cardItem.currency}
            </StyledText>

            <StyledTouchableOpacity
              onPress={() => {
               {
                basketButton && (
                  addToBasket(cardItem._id)
                )
               }
               {
                removeButton && (
                  removeToBasket(cardItem._id)
                )
               }
                // navigation.navigate('Basket');
                console.log(cardItem._id);
              }}>
            {
              basketButton && (  <StyledText className="text-right mr-2">basket</StyledText>)  
            }
            {
              removeButton && (<StyledText className="text-right mr-2">remove</StyledText>)
            }
            
           
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default InfoCard;
