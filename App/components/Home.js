import React, { Component } from 'react'
import { Text, View } from 'react-native'

function Home(props) {
    return (
        <View>
            <Text> {JSON.stringify(props)}</Text>
        </View>
    )

}

export default Home