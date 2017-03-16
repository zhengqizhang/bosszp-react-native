'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import data from '../../data';

class CompanyProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <View style={styles.container}>
            <Text style={{marginBottom: 10}}>公司介绍</Text>
            <Text style={styles.text}
              numberOfLines={this.state.showAll ? null : 3}
            >{this.props.profile}</Text>
            <TouchableWithoutFeedback onPress={()=>{
              this.controlShowState()
            }}>
              <Icon size={30} name={this.state.showAll ? 'angle-up' : 'angle-down'} color="rgb(168,168,168)" style={{alignSelf: 'center'}}/>
            </TouchableWithoutFeedback>
        </View >
      );
    }

  controlShowState(){
    this.setState({
      showAll: !this.state.showAll
    })
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 16,
    marginHorizontal: 8,
    padding: 10,
    paddingTop: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
    color: 'rgb(119,119,119)',
  }
});

export default connect()(CompanyProfileView);
