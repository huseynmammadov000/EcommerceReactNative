import React from 'react'
import { FlatList } from 'react-native'
import InfoCard from './InfoCard'
import NoData from './NoData'

const SearchProducts = ({data}) => {

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

export default SearchProducts