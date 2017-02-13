import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return (
      <View />
    );
  }
}

const lib = connect()(LibraryList);
export { lib as LibraryList };
