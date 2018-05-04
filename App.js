import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import  store  from './app/store';

import PublishApp from './app/components/publishApp';


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <PublishApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
