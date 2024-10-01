import React from 'react';
import { Dimensions, FlatList, Image } from 'react-native';
import { StyledTouchableOpacity, StyledView } from '@common/StyledComponents';
import { useNavigation } from '@react-navigation/native'; 
import { StyledImage } from '../../../common/StyledComponents';

const { width } = Dimensions.get('window');

const productAds = [
  { id: '1', icon: require('../../../../assets/icons/ActionBox.png'), productId: 'product1' },
  { id: '2', icon: require('../../../../assets/icons/ActionBox.png'), productId: 'product2' },
  { id: '3', icon: require('../../../../assets/icons/ActionBox.png'), productId: 'product3' },
  { id: '4', icon: require('../../../../assets/icons/ActionBox.png'), productId: 'product4' },
];

const ProductImageSlider = () => {
  const navigation = useNavigation();

  const goToProduct = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <StyledView className="mb-4 items-center">
      <FlatList
        data={productAds}
        renderItem={({ item }) => (
          <StyledTouchableOpacity 
            className="mx-2 w-[85vw]" 
            onPress={() => goToProduct(item.productId)}
          >
            <StyledImage
              source={item.icon}
              className="w-full h-36 rounded-lg" 
              resizeMode='cover'
            />
          </StyledTouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToAlignment="center"
        snapToInterval={width * 0.85 + 16}  
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: (width - width * 0.85) / 2,  
        }}
      />
    </StyledView>
  );
};

export default ProductImageSlider;
