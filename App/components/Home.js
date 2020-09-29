import React, { Component } from 'react'
import { Text, View } from 'react-native'
import store from '../reducers/reducer';
function Home(props) {
    return (
        <View>
            <Text> {JSON.stringify(store.getState())}</Text>
        </View>
    )

}

export default Home