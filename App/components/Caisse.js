import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductList from './ProductList';
import Ticket from './Ticket';
import store from '../reducers/reducer';
class Caisse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ticket:{lines:[]}
    };
  }
componentDidMount(){
  store.subscribe(()=>{
    this.setState(store.getState());
  })
}
  render() {
    return (
      <View style={{height:'100%'}}>
        <Text> Caisse </Text>
        {/* <Text>{JSON.stringify(store.getState().selectedProduct)}</Text> */}
        <ProductList style={{height:'33%'}}/>
        <Ticket lines={this.state.ticket.lines}/>
        
      </View>
    );
  }
}

export default Caisse;
