import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { StyledText, StyledView, StyledTouchableOpacity } from '@common/StyledComponents';
import { StyledImage } from '../../../common/StyledComponents';

// const categories = [
//   { id: '1', title: 'Category 1', icon: require('../../../../assets/icons/logo2.png') },
//   { id: '2', title: 'Category 2', icon: require('../../../../assets/icons/logo2.png') },
//   { id: '3', title: 'Category 3', icon: require('../../../../assets/icons/logo2.png') },
//   { id: '4', title: 'Category 4', icon: require('../../../../assets/icons/logo2.png') },
//   { id: '5', title: 'Category 5', icon: require('../../../../assets/icons/logo2.png') },
//   { id: '6', title: 'Category 6', icon: require('../../../../assets/icons/logo2.png') },
// ];

const CategoriesList = ({onCategorySelect}) => {
  const [categories,setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://192.168.199.1:4000/category');
        const data = await response.json();
        console.log(data); 
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } 
    };
  
    fetchCategories();
  }, []);
  
  return (
    <StyledView className="m-3">
     
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <StyledTouchableOpacity className="mx-2" onPress={() => {
            console.log(item.name); 
            onCategorySelect(item.name); 
          }}>
            <StyledView className="bg-white   border-gray-300 rounded-lg items-center p-3">
              <Image 
                source={{uri:item.imageUrl}} 
                style={{ width: 50, height: 50 }} 
                resizeMode="contain"
              />
            </StyledView>
            <StyledText className="text-center mt-1">{item.name}</StyledText>
          </StyledTouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </StyledView>
  );
};

export default CategoriesList;
