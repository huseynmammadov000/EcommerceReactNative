import React, {useEffect, useState} from 'react';

import Layout from '../../common/Layout';

import Products from './components/Products';
import  SearchBar  from './components/SearchBar';
import CategoriesList from './components/CategoriesList';
import {ActionBox} from '../../../assets/icons/ActionBox.png'
import ProductImageSlider from './components/ProductImageSlider';
import { StyledText, StyledTouchableOpacity, StyledView } from '../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import ProductWithCategory from './components/ProductWithCategory';
import SearchProducts from './components/SearchProducts';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);


  const navigation = useNavigation();

  const handleCategorySelect = (categoryName) => {
    console.log("object");
    setSelectedCategory(categoryName); 
    setIsSearching(false);
  };
  const handleSearch = async (query) => {
    if (query.trim() === null) {
      setIsSearching(false);
      console.log("empty");
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    console.log(isSearching);
    try {
      const response = await fetch(`http://192.168.199.1:4000/products/search/${query}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setIsSearching(false);
    } 
  };

  useEffect(()=>{
    console.log(isSearching);

  },[isSearching])
  return (
    <Layout >
      <SearchBar onSearch={handleSearch}/>
      <StyledView className='flex-row justify-between items-center mx-6'>
      <StyledText className=' font-extrabold text-black'>Categories</StyledText>
      <StyledTouchableOpacity onPress={()=> setSelectedCategory(null)}>
        <StyledText className='font-extrabold text-violet-600'>See all</StyledText>
      </StyledTouchableOpacity>
      </StyledView>
     <CategoriesList onCategorySelect={handleCategorySelect}/>
     <ProductImageSlider/>
     <StyledView className='flex-row justify-between items-center mx-6'>
      <StyledText className=' font-extrabold text-black'>Featured Products</StyledText>
      <StyledTouchableOpacity  onPress={() => {
        navigation.navigate('AllProducts');
      }}>
        <StyledText className='font-extrabold text-violet-600'>See all</StyledText>
      </StyledTouchableOpacity>
      </StyledView>
      {isSearching ? (
        <SearchProducts data={searchResults} /> 
      ) : selectedCategory ? (
        <ProductWithCategory categoryName={selectedCategory} /> 
      ) : (
        <Products /> 
      )}
    </Layout>
  );
};

export default HomePage;
