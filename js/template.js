'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

class CompanyListView extends Component {
  constructor() {
    super();
    this.state = {  };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <View >
        </View >
      );
    }
  }

var styles = StyleSheet.create({
  button: {
    width: 300,
    height: 55,
  }
});

module.exports = connect()(CompanyListView);
