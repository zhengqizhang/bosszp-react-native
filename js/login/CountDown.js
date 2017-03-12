'use strict';
import React, {
  Component,
} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class CountDown extends Component {
  constructor() {
      super()
      this.state = {
        countDown: 60,
          isGoing: false,
      }
      this.countDown = this.countDown.bind(this)
  }

  countDown(){
    if (this.state.countDown == 0) {
      this.setState({
        countDown: 60,
        isGoing: false,
      })
      return;
    } else {
      this.setState({
        countDown: this.state.countDown-1,
        isGoing: true
      })
    }
    this.timer = setTimeout(()=>this.countDown(),1000)
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  render() {
      return(
        <TouchableOpacity  style={this.state.isGoing ? [styles.verifyBox,{borderColor: 'rgba(155,155,155,.5)'}]: styles.verifyBox}
              onPress={()=>{this.props.onPress();}}
              disabled={this.state.isGoing}
        >
            <Text style={this.state.isGoing? [styles.countDown,{color: 'rgba(155,155,155,.5)'}] :styles.countDown}>
                {this.state.isGoing ? this.state.countDown + '秒 ' : '获取' }
            </Text>
        </TouchableOpacity>
      )
  }


}

const styles = StyleSheet.create({
  verifyBox: {
      width: 70,
      height: 25,
      borderRadius: 100,
      borderColor: 'rgb(146,191,206)',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  },
  countDown: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 12,
  },
});

export default CountDown
