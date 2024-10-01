import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {StyledText, StyledView} from '@common/StyledComponents';
import {useNavigation, useRoute} from '@react-navigation/native';
import BellIcon from '@icons/Bell2.png';
import HeartIcon from '@icons/Heart.png';
import Heart from "@icons/heart.svg"
import {StyledTouchableOpacity, StyledImage} from '@common/StyledComponents';
import GoBack from '@icons/GoBack.png';
import Rating from '@icons/Rating.png';
import Minus from '@icons/Minus.png';
import Plus from '@icons/Add.png';

const DetailsPage = () => {
  const route = useRoute();
  const item = route.params?.item;
  const id = route.params?.id;
  const [fetchedData, setFetchedData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Red');
  const navigation = useNavigation();

  const getItemData = async () => {
    const response = await fetch(`http://192.168.199.1:4000/products/${id}`);
    const data = await response.json();
    response.ok && setFetchedData(data);
  };

  useEffect(() => {
    id && getItemData();
  }, [id]);

  return item ? (
    <StyledView className="bg-gray-50 flex-1">
      <ScrollView>
        <StyledView className="relative">
          <StyledImage
            source={{uri: item.imageUrl[0]}}
            style={{width: '100%', height: 365}}
            resizeMode="cover"
          />

          <StyledTouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-3 top-3">
            <StyledImage source={GoBack} style={{width: 30, height: 30}} />
          </StyledTouchableOpacity>

          <StyledView className="absolute right-3 top-3 flex-row">
            <StyledTouchableOpacity className="mr-4">
              <StyledImage source={BellIcon} style={{width: 30, height: 30}} />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity>
              <StyledImage source={HeartIcon} style={{width: 30, height: 30}} />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        <StyledView className="p-5 space-y-3">
          <StyledView className="flex-row justify-between items-center">
            <StyledView className="flex-1">
              <StyledText className="font-semibold text-black text-2xl text-left">
                {item.title}
              </StyledText>
              <StyledText className="text-black text-2xl text-left mt-2">
                {item.price}
                {item.currency}
              </StyledText>
            </StyledView>

            <StyledTouchableOpacity className="bg-red-500 rounded-full text-white py-2 px-4">
              <StyledText className="text-white">On Sale</StyledText>
            </StyledTouchableOpacity>
          </StyledView>

          <StyledImage source={Rating} className="mt-2 " style={{width: 260, height: 30}} />
          <StyledText className="font-medium text-base text-black">
            Color
          </StyledText>

          <StyledView className="flex-row space-x-4 mt-1">
            <StyledTouchableOpacity
              onPress={() => setSelectedColor('Red')}
              className="w-8 h-8 bg-red-500 rounded-full"></StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() => setSelectedColor('Blue')}
              className="w-8 h-8 bg-blue-500 rounded-full"></StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() => setSelectedColor('Green')}
              className="w-8 h-8 bg-green-500 rounded-full"></StyledTouchableOpacity>
            <StyledTouchableOpacity
              onPress={() => setSelectedColor('Yellow')}
              className="w-8 h-8 bg-yellow-500 rounded-full"></StyledTouchableOpacity>
          </StyledView>

          <StyledText className="font-semibold text-base text-black">
            Description
          </StyledText>
          <StyledText>{item.description}</StyledText>

          <StyledText className="font-semibold text-base text-black">
            Specifications
          </StyledText>
          <StyledText>Model: Product Model</StyledText>
          <StyledText>Color: {selectedColor}</StyledText>
        </StyledView>
        <StyledView className="items-center">
          <StyledView className="p-3 shadow-lg bg-white w-80 rounded-full flex-row justify-center items-center space-x-4 mt-2">
            <StyledView className="flex-row items-center h-11 border border-violet-500 p-2 rounded-full">
              <StyledTouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-full">
                <StyledImage source={Minus} />
              </StyledTouchableOpacity>

              <StyledText className="text-lg  text-violet-500">{quantity}</StyledText>

              <StyledTouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                className="p-2 rounded-full">
                <StyledImage source={Plus} />
              </StyledTouchableOpacity>
            </StyledView>

            <StyledView className="flex-row space-x-2 items-center">
              <StyledTouchableOpacity className="bg-blue-500 rounded-full text-white py-2 px-4 mr-2 shadow-md">
                <StyledText className="text-white">Buy Now</StyledText>
              </StyledTouchableOpacity>

              <StyledTouchableOpacity className="bg-gray-200 rounded-full p-3 shadow-md">
                <StyledImage
                  source={HeartIcon}
                  style={{width: 24, height: 24}}
                />
              </StyledTouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledView>
  ) : (
    <StyledText>{JSON.stringify(fetchedData)}</StyledText>
  );
};

export default DetailsPage;
