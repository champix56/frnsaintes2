import React, {  } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Color } from 'react-native';
export default function BrocCartItem(props) {
    return (
        <View>
            <Button title="Ajouter panier" />
            <View style={[styles.row, { marginLeft: 15, marginTop: 8, }]}>
                <Text style={[styles.lowprice, { marginLeft: 35, marginTop: 15, height: 50, width: 70, textAlign: 'right', fontSize: 14 }]}>quant :</Text>
                <TextInput
                    style={[
                        brocStylesheet.lowprice,
                        { marginLeft: 10, marginTop: 5, height: 50, width: 70, textAlign: 'right' },
                    ]}
                    value={'1'}/>
            </View>
            <View>
                <View style={[styles.row,]}>

                    {/* <Text style={[ brocStylesheet.lowprice,{ marginLeft: 105, marginTop: 15, height: 50, width: 70, textAlign: 'right', fontSize:14 }]}>quant :</Text> */}
                </View>
                <View style={[styles.row]}>
                    <TextInput
                        style={[
                            styles.cell,
                            brocStylesheet.price,
                            { width: 200, textAlign: 'right' },
                        ]}/>
                </View>
                <View style={[styles.row]}>
                    <TextInput
                        style={[
                            styles.cell,
                            brocStylesheet.price,
                            { width: 200, textAlign: 'right', marginTop: 50 },
                        ]}/>
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
        position: "absolute",
        right: 0,
    },
    lowprice: {
        fontSize: 28,
    },
});
