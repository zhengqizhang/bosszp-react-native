'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';

class LoadingView extends Component {
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
        <View style={styles.container}>
            <Image source={require('./img/loading.gif')} style={styles.loading}/>
        </View >
      );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(234,238,239)',
    alignItems: 'center',
    paddingTop: 200
  },
  loading: {
    width: 100,
    height: 100
  }
});

export default connect()(LoadingView);
