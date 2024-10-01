import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../common/Layout'
import Products from '../homepage/components/Products'
import { useNavigation } from '@react-navigation/native'

const AllProducts = () => {
    const navigation = useNavigation();

  return (
    <Layout>
        <Products/>
    </Layout>
  )
}

export default AllProducts

const styles = StyleSheet.create({})