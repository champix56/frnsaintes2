import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
export default function Ticket(props) {
    const total = 0;
    props.lines.forEach((item) => { total += item.price })
    return (
        <View>
            {props.map(e => {
                return <View><Text>{e.name};{e.price}</Text></View>
            })}
        </View>
    );
}
Ticket.propsTypes = {
    lines:PropTypes.array.isRequired
}
Ticket.defaultProps={lines:[]}