import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '.';
import styles from './styles';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.listItemTitleText}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => (
  { selectedLibraryId: state.selectedLibraryId }
);

const li = connect(mapStateToProps, actions)(ListItem);
export { li as ListItem };
