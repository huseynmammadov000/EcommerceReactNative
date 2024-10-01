import React, {useEffect, useState} from 'react';
import { StyledText, StyledView } from '../../../common/StyledComponents';
import { FlatList } from 'react-native';
import InfoCard from './InfoCard';
import NoData from './NoData';

const ProductWithCategory = ({categoryName}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(
          `http://192.168.199.1:4000/products/category/${categoryName}`,
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);


  return (
    <StyledView className="flex-1 p-4">  
    <FlatList
      data={products}
      renderItem={({ item }) => <InfoCard cardItem={item} />}
      ListEmptyComponent={() => <NoData />}
      numColumns={2}
      scrollEnabled={true}  
    />
  </StyledView>
  )
};

export default ProductWithCategory;
