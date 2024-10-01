import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyledScrollView, StyledView} from './StyledComponents';
import CustomHeader from './CustomHeader';

const Layout = ({children, title}) => {
  return (
    //     <>
    //     <CustomHeader title={title}/>
    //     <StyledScrollView className='flex-1'>
    //     {children}
    //    </StyledScrollView>
    //     </>
    <>
      {/* <CustomHeader title={title} /> */}
      <StyledView className="flex-1 bg-slate-50">{children}</StyledView>
    </>
  );
};

export default Layout;
