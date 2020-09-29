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
import Home from './components/Home';
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
      <>{undefined===this.state.whoiam?
        <Login onAuthentPress={this.authent} />:
        <Home userName={this.state.whoiam}/>}
      </>
    );
  }
}
const styles = StyleSheet.create({

});

export default App;