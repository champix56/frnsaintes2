import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import store from '../reducers/reducer';
export default function ProductList(props) {
    return (
    <ScrollView style={{...props.style}}>
    <Text>Produits</Text>
        {
            store.getState().produits.map((element,indice)=>{
                return <Text>{`${indice}:${element.name}::${element.prixunitaire}`}</Text>
            }) 
        }
     </ScrollView>
  );
}
ProductList.propsTypes={
    style:PropTypes.object
}
