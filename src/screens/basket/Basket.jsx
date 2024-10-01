import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyledText, StyledView} from '../../common/StyledComponents';
import InfoCard from '../homepage/components/InfoCard';
import NoData from '../homepage/components/NoData';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {storage} from '../../utils/MMKVStorage';

const Basket = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = storage.getString('token');

    setToken(storedToken);

    const fetchData = async () => {
      const response = await fetch('http://192.168.199.1:4000/basket/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const datas = await response.json();
      console.log(datas);
      setData(datas.basket);
    };

    fetchData();
    console.log('hi');
    console.log(token);
  }, [token]);

  //   useFocusEffect(
  //     React.useCallback(() => {

  //     }, []),
  //   );
  return (
    <FlatList
      // scrollEnabled={false}
      contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 20}}
      data={data}
      renderItem={({item}) => <InfoCard cardItem={item}/>}
      ListEmptyComponent={() => <NoData />}
      numColumns={2}
    />
  );
};

export default Basket;

const styles = StyleSheet.create({});
