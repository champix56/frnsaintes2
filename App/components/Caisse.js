import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductList from './ProductList';
import Ticket from './Ticket';

class Caisse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ticket:{lines:[]}
    };
  }

  render() {
    return (
      <View style={{height:'100%'}}>
        <Text> Caisse </Text>
        <ProductList style={{height:'33%'}}/>
        <Ticket lines={this.state.ticket.lines}/>
        
      </View>
    );
  }
}

export default Caisse;
