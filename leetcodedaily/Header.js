import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import {View, Text} from 'react-native'
export default Header =()=> {

  return (
    <Appbar.Header
        theme = {{
            colors:{
                primary:"#ffffff"
            }
        }}
        >
        <Title> 
            Weather yay
        </Title>


    </Appbar.Header>
  );
};
