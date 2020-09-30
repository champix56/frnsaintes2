import React, {  } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
export default function BrocCartItem(props) {
    return (
        <View>
            <Button title="Ajouter panier" />
            <View style={[styles.row, { marginLeft: 15, marginTop: 8, }]}>
               <Image source={{uri:''}}/>
            </View>
            <View>
                <View style={[styles.row,]}>

                    {/* <Text style={[ styles.lowprice,{ marginLeft: 105, marginTop: 15, height: 50, width: 70, textAlign: 'right', fontSize:14 }]}>quant :</Text> */}
                </View>
                <View style={[styles.row]}>
                <Text>Prix initial</Text>
                    <Text
                        style={[
                            styles.cell,
                            { width: 200, textAlign: 'right' },
                        ]} >34</Text>
                </View>
                <View style={[styles.row]}>
                <Text>Prix de vente</Text>
                    <TextInput
                        style={[
                            styles.cell,
                            styles.price,
                            { width: 200, textAlign: 'right', marginTop: 50 },
                        ]} value={'21'}/>
                </View>
            </View>
        </View>
    );
}
BrocCartItem.defaultProps = {
    editable: false,
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        // textAlignVertical: 'middle',
        //justifyContent: 'flex-end',
        // padding: 16,
        //flexDirection: 'row',
    },
    cell: {
        width: 'auto',

    },
    price: {
        fontSize: 38,
        textAlign: 'right',
        borderColor: 'black',
        borderWidth: 1,
        //position: "absolute",
        right: 0,
    },
    lowprice: {
        fontSize: 28,
    },
});
