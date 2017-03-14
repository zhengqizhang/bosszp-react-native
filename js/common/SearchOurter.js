'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-root-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchOurter extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      height: new Animated.Value(1),
      selector_s: null
    };
  }

  componentDidMount() {
    // LayoutAnimation.configureNext(CustomLayoutAnimation);
    // this.setState({height: 1})
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.itemList}>
            {
              this.props.items.map((item,i)=>{
                return (
                  <TouchableWithoutFeedback style={styles.item}
                      onPress={()=>this.controlVisible(i)}
                      key={"item"+i}
                  >
                    <View style={[styles.selectorTextWrapper]}>
                      <Text style={this.state.selector_s === i ? styles.selectorText_s : styles.selectorText}>{item}</Text>
                      <Icon name="angle-down" color={this.state.selector_s === i ? "rgb(131,189,181)" : "rgb(131,131,131)"}/>
                    </View>
                  </TouchableWithoutFeedback>
                )
              })
            }
          </View>
          <Modal
              style={styles.modal}
              visible={this.state.visible}
          >
          <Animated.View style={[styles.options,{height: this.state.height}]}>
            <View onLayout={(event) => this.measureView(event)}>
              <Text style={[styles.optionText]}>
                  推荐
              </Text>
              <Text style={styles.optionText}>
                  最新
              </Text>
            </View>
          </Animated.View>
          <TouchableWithoutFeedback onPress={()=> this.controlVisible()} >
            <View style={{flex: 1}}/>
          </TouchableWithoutFeedback>
          </Modal>
        </View >
      );
    }

    async controlVisible(i) {
      await this.setState({
        visible: this.state.selector_s === i ? false : true,
        selector_s: this.state.selector_s === i ? null : i
      });
      Animated.timing(          // Uses easing functions
        this.state.height,    // The value to drive
        {
          toValue: this.state.visible ? 108 : 0,          // ************************************调整成变量
          duration: 500
        }            // Configuration
      ).start();
    }

    async measureView(event) {
      await this.setState({
              optionsHeight: event.nativeEvent.layout.height,
          })
    }
  }

var styles = StyleSheet.create({
  container: {
    height: 44,
    zIndex: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgb(225,225,225)'
  },
  itemList: {
    height: 42,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgb(185,185,185)'
  },
  selectorTextWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: "rgb(230,230,230)"
  },
  selectorText: {
    color: 'rgb(131,131,131)',
    fontSize: 12,
  },
  selectorText_s: {
    color: 'rgb(131,189,181)',
    fontSize: 12,
  },
  modal: {
    top: 108,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  options: {
    backgroundColor: 'rgb(248,248,248)',
    overflow: 'hidden'
  },
  optionText: {
    color: 'rgb(117,185,175)',
    lineHeight: 54,
    height: 54,
    paddingLeft: 40,
    fontSize: 13
    // backgroundColor: 'pink'
    // color: 'rgb(111,111,111)'
  }
});

module.exports = connect()(SearchOurter);
