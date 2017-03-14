'use strict';
import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';
import CompanyListView from './company/CompanyListView';

class BosszpTabsView extends Component{
  constructor() {
    super();
    this.state = {
      selectedTab: 'Company',
    };
    this.tabNames = [
      ["Main", require('../common/img/tab_main.png'), require('../common/img/tab_main_s.png'), "Main", <View {...this.props}/>],
      ["Company", require('../common/img/tab_company.png'), require('../common/img/tab_company_s.png'),  "Company", <CompanyListView {...this.props}/>],
      ["Contact", require('../common/img/tab_contact.png'), require('../common/img/tab_contact_s.png'), "Contact", <View {...this.props}/>],
      ["Person", require('../common/img/tab_person.png'), require('../common/img/tab_person_s.png'), "Person", <View {...this.props}/>]
    ]
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      let tabBarHeight = 50;
      let a = '../common/img/tab_company.png';
      return (
        <TabNavigator
          tabBarStyle={{ height: tabBarHeight, overflow: 'hidden', borderTopWidth: 1, borderColor: 'rgb(185,185,185)' }}
          >
            {
              this.tabNames.map((item, i) => {
                return (
                  <TabNavigator.Item
                    selected={this.state.selectedTab === item[0]}
                    key={i}
                    renderIcon={() => <Image source={this.tabNames[i][1]}
                    resizeMode={Image.resizeMode.contain}
                    style={styles.tabIcon}/>}
                    renderSelectedIcon={() => <Image source={item[2]}
                      resizeMode={Image.resizeMode.contain}
                      style={styles.tabIcon}/>}
                      onPress={() => this.setState({ selectedTab: item[0]})}>
                      {item[4]}
                  </TabNavigator.Item>
                )
              })
            }
        </TabNavigator>
      );
    }
  }

var styles = StyleSheet.create({
  button: {
    width: 300,
    height: 55,
  },
  tabIcon: {
    height:35,
    // backgroundColor: 'red',
    marginBottom: -10
  }
});

export default BosszpTabsView
