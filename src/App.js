import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import styles from './components/styles';
import { Header, LibraryList } from './components';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header text="Redux demo" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
