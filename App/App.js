/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { whoiam: undefined }
  }
  authent = (login,pass) => {
    if (login === 'Alex' && pass === 'alex') {
      this.setState({ whoiam: login })
    }
  }
  render() {
    return (
      <>
        <Text>{JSON.stringify(this.state)}</Text>
        <Login onAuthentPress={this.authent} />
      </>
    );
  }
}
const styles = StyleSheet.create({

});

export default App;
