import React, { useState } from 'react';
import { StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '../../../common/StyledComponents';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    if (onSearch && searchQuery.trim() !== "") {
      console.log( searchQuery); 
      onSearch(searchQuery); 
    } else {
      console.log("null");
    }
  };

  return (
    <StyledView className="bg-white-200 p-2 rounded-full ml-6 mr-6  mb-2"> 
      
      <StyledTextInput
        className="bg-white px-4 py-2 rounded-full text-lg"
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        
      />
       <StyledTouchableOpacity onPress={handleSearch} className="ml-2">
        <StyledText className="text-blue-500">Search</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default SearchBar;
