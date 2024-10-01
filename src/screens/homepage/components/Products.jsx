import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard';
import NoData from './NoData';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          'http://192.168.199.1:4000/products/',
        );
        const datas = await response.json();
        // console.log(datas);
        setData(datas);
      };
      fetchData();
    }, []);
  
  return (
    <FlatList
    // scrollEnabled={false}
    contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 20}}
    data={data}
    renderItem={({item}) => <InfoCard cardItem={item}  />}
    ListEmptyComponent={() => <NoData />}
    numColumns={2}
  />
  )
}

export default Products

const styles = StyleSheet.create({})