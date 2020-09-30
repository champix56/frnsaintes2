import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import store from '../reducers/reducer';
import SmallProduct from './SmallProduct';
export default function ProductList(props) {
    return (
    <ScrollView style={{...props.style}}>
    <Text>Produits</Text>
        {
            store.getState().produits.map((element,indice)=>{
                return <><SmallProduct product={element}/></>
            }) 
        }
     </ScrollView>
  );
}
ProductList.propsTypes={
    style:PropTypes.object
}
