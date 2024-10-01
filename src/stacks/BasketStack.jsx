import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyledText, StyledView} from '../common/StyledComponents';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomHeader from '../common/CustomHeader';
import Basket from '../screens/basket/Basket';

const Stack = createNativeStackNavigator();

const BasketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <CustomHeader title="My Basket" />}}
        name="Basket"
        component={Basket}
      />
     
    </Stack.Navigator>
  );
};

export default BasketStack;

const styles = StyleSheet.create({});
