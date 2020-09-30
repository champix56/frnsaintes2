import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export default function SmallProduct(props) {
    return (
        <View style={{...styles.container,...props.style}} onPress={props.onPress}>
            <Image style={styles.image} source={require(props.product.img)} />
            <Text style={styles.text}>{props.product.name}</Text>
        </View>
    );
}

SmallProduct.propsTypes = { product: PropTypes.object.isRequired, onPress: PropTypes.func.isRequired, style:PropTypes.object }
SmallProduct.defaultProps = { onPress: () => { } }
const styles=StyleSheet.create({
    container: { width: '33%', minWidth: 84, alignContent: "center", flexDirection: 'column', padding: 5 },
    image: { flex: 1, width: 64, height: 64 },
    text: {}

})
