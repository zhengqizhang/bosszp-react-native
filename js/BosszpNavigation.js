'use strict';
import React, {
  Component,
} from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    Navigator,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';

import BosszpTabsView from './tabs/BosszpTabsView';

class BosszpNavigator extends Component{
  constructor(props){
      super(props)
  }

  renderScene( route, navigator ){
    let cp;
    switch ( route.name ) {
      case 'star': {
      }
      break;
      default: {
        cp = <BosszpTabsView navigator={navigator} />
      }
    }
    return cp;
  }

  render() {
    console.log(typeof BosszpTabsView);
        return (
          <View style={styles.container}>
            <Navigator
              ref="navigator"
              style={styles.container}
              configureScene={(route) => {
                return Navigator.SceneConfigs.FloatFromBottomAndroid;
                if (route.name === "login" || route.name === "myresume" ) {
                  return Navigator.SceneConfigs.FloatFromBottomAndroid;
                } else {
                  return Navigator.SceneConfigs.FloatFromRight;
                }
              }}
              initialRoute={{}}
              renderScene={this.renderScene}
            />
          </View>
        );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = connect()(BosszpNavigator);
