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
import CompanyDetailView from './tabs/company/CompanyDetailView';

class BosszpNavigator extends Component{
  constructor(props){
      super(props)
  }

  renderScene( route, navigator ){
    let cp;
    switch ( route.name ) {
      case 'companyDetail': {
        cp = <CompanyDetailView navigator={navigator} />
      }
      break;
      default: {
        cp = <BosszpTabsView navigator={navigator} />
      }
    }
    return cp;
  }

  render() {
        return (
          <View style={styles.container}>
            <Navigator
              ref="navigator"
              style={styles.container}
              configureScene={(route) => {
                if (route.name === "companyDetail" || route.name === "myresume" ) {
                  return Navigator.SceneConfigs.PushFromRight;
                } else {
                  return Navigator.SceneConfigs.PushFromRight;
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
