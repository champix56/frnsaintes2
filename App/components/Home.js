import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Caisse from './Caisse';
import store from '../reducers/reducer';
function Home(props) {
    return (
        <View>
            <Caisse/>
        </View>
    )

}

export default Home