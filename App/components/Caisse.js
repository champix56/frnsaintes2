import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductList from './ProductList';
import Ticket from './Ticket';
import store from '../reducers/reducer';
import BrocCartItem from './SelectedItem';

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
      <ScrollView>
      <View style={{height:'100%'}}>
        <Text> Caisse </Text>
        <ProductList style={{height:'33%'}}/>
        <BrocCartItem/> 

        <Ticket lines={this.state.ticket.lines}/>
        
      </View>
      </ScrollView>
    );
  }
}

export default Caisse;
