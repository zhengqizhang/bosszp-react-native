'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Image,
  RefreshControl
} from 'react-native';
import { connect } from 'react-redux';

import SearchOurter from '../../common/SearchOurter';
import data from '../../data';

class CompanyListView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data.companyLists),
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <View>
          <View style={styles.header}>
                <Text style={styles.title}>公司</Text>
          </View>
          <SearchOurter items={["融资","规模","行业"]}>
          </SearchOurter>
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            renderRow={(company)=>this.renderCompany(company)}
          />
        </View>
      );
    }

    renderCompany(company){
      return (
        <View style={styles.companyCard}>
            <View>
                <Image style={styles.companyLogo} source={{uri:company.logo}} />
            </View>
            <View style={styles.rightItem}>
                <Text style={styles.name}>{company.name}</Text>
                <Text style={styles.location}>{company.location}</Text>
                <Text style={styles.location}>{company.type}</Text>
                <View style={styles.line}/>
                <Text style={styles.hot}> 热招：
                    <Text style={styles.position}> {company.hot.position}</Text>
                等{company.hot.number}个职位</Text>
            </View>
        </View>
      )
    }
  }

var styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(91,201,195)',
    height: 64,
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 14
  },
  title: {
    fontSize: 18,
    color: 'rgb(216,254,254)',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    // backgroundColor: 'pink'
  },
  listview: {

  },
  companyCard: {
    backgroundColor: '#FFF',
    height: 130,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
  },
  rightItem: {
    paddingLeft: 10
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  location: {
    color: 'rgb(103,103,103)',
    marginBottom: 8
  },
  hot: {
    color: 'rgb(163,163,163)',
    paddingVertical: 10,
    fontSize: 12,
  },
  line: {
    height: 1,
    backgroundColor: 'rgb(233,239,239)'
  },
  position: {
    color: 'rgb(135,188,188)'
  },
  companyLogo: {
    backgroundColor: 'transparent',
    width: 60,
    height: 60,
    borderRadius: 8,
  }
});

module.exports = connect()(CompanyListView);
