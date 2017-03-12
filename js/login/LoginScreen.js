'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  TextInput,
  Easing,
  ScrollView,
  NativeModules,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import LoginButton from '../common/LoginButton';
import ThirdParty from './ThirdParty';
import CountDown from './CountDown';
import Config from '../../config';
import { RequestAuthCode, LoginWithPhone } from '../actions';

var {height, width} = Dimensions.get('window');

class LoginScreen extends Component {
  constructor() {
      super()
      this.state = {
        phoneNumber: '',
        authCode: '',
        bounceValue: new Animated.Value(0),
        PhoneNumberError: true,
        authCodeError:true,
        startCountDown: false,
      }
  }

  render() {
      return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={(e) =>{ this.refs.phoneNumber.blur();this.refs.authCode.blur();}}
        >
          <Image
            style={styles.bg}
            source={require('../common/img/bg.png')}>
            <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end',  position: 'relative', bottom: 59}}>
              <Image
                source={require('../common/img/logo.png')}
               />
            </View>
            <Animated.View style={[styles.loginForm,{
              transform: [                        // `transform`   有顺序的数组
                {translateX: this.state.bounceValue},  // Map `bounceValue` to `scale`
              ],
            }]}>
                <View style={styles.accountInputContainer}>
                    <Image   source={require('../common/img/phone.png')}/>
                    <TextInput placeholder="请输入您的手机号" placeholderTextColor='#D8D8D8' underlineColorAndroid='transparent'
                        style={this.state.PhoneNumberError ? [styles.phoneNumber,{color: '#F587A6'}] : styles.phoneNumber}
                        maxLength={11} keyboardType="numeric"
                        clearButtonMode='while-editing'
                        onFocus={() => this.setState({PhoneNumberError: false})}
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        onEndEditing={(event) => { this.validPhoneNumber(event.nativeEvent.text)}}
                        value={this.state.phoneNumber}
                        ref="phoneNumber"
                    />
                </View>
                <View style={styles.separator} />
                <View style={styles.accountInputContainer}>
                    <Image   source={require('../common/img/key.png')}/>
                    <TextInput ref="authCode" placeholder="验证码" placeholderTextColor='#D8D8D8' underlineColorAndroid='transparent'  keyboardType="numeric" maxLength={4}
                        style={this.state.authCodeError ? [styles.authCode,styles.authCodeError] : styles.authCode}
                        onFocus={() => this.setState({authCodeError: false})}
                        onChangeText={(authCode) => this.setState({authCode})}
                        onEndEditing={(event) => { this.validAuthCode(event.nativeEvent.text)}}
                        blurOnSubmit={true}
                        value={this.state.authCode}
                    />
                    <CountDown ref="countDown" onPress={() => this.requestAuthCode()} startCountDown={this.state.startCountDown} />
                </View>
            </Animated.View>
            <View style={styles.container}>
              <LoginButton ref="loginButton" onPress={()=>this.checkIfCouldLogin()} onLogin={this.props.onLogin} style={{marginTop: 36}}/>
              <View style={styles.openLogin}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.throughLine}/>
                        <Text style={{color: '#fff'}}>or</Text>
                      <View style={styles.throughLine}/>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent: 'space-around', marginTop: 26 }} >

                  </View>
              </View>
            </View>
          </Image>
        </TouchableWithoutFeedback>
      )
    }
    //
    // <ThirdParty onLogin={()=> this.props.onLogin()}  name="weixin"/>
    // <ThirdParty onLogin={()=> this.props.onLogin()}   name="weibo"/>
    // <ThirdParty onLogin={()=> this.props.onLogin()}  name="qq"/>

    shake()
    {
      Animated.sequence([
          Animated.timing(this.state.bounceValue, {
            toValue: 5,
            easing: Easing.linear,
          duration: 25,
          }),
          Animated.timing(this.state.bounceValue, {
            toValue: -5,
            easing: Easing.linear,
          duration: 50,
          }),
          Animated.timing(this.state.bounceValue, {
            toValue: 5,
            easing: Easing.linear,
          duration: 50,
          }),
          Animated.timing(this.state.bounceValue, {
            toValue: 0,
            easing: Easing.linear,
          duration: 25,
          })
        ]).start();
    }

    checkIfCouldLogin(){
        if(this.validPhoneNumber() && this.validAuthCode()){
            this.refs.loginButton.getWrappedInstance().phoneLogin(this.state.phoneNumber,this.state.authCode)
        }else{
            this.shake();
        }
    }

    validPhoneNumber()
    {
      var phoneNumberReg = /^1[3|4|5|7|8]\d{9}$/;
      if(!phoneNumberReg.test(this.state.phoneNumber)) {
          this.setState({PhoneNumberError: true})
          return false;
      }
      return true;
    }

    validAuthCode(){
      var authCodeReg = /\d{4}/;
      if(!authCodeReg.test(this.state.authCode)) {
          this.setState({authCodeError: true})
          return false;
      }
      return true;
    }

    requestAuthCode()
    {
      if(this.validPhoneNumber(this.state.phoneNumber))
      {
          this.refs.countDown.countDown();
          this.props.dispatch(RequestAuthCode(this.state.phoneNumber))
      }
      else
      {
          this.shake();
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginForm: {
    width: 300,
    height: 110,
    backgroundColor: 'rgba(255,255,255,.1)',
    borderRadius: 8,
    paddingHorizontal: 25,
  },
  accountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  phoneNumber: {
    flex: 1,
    paddingLeft: 20,
    color: '#fff' ,
    fontSize: 14 ,
  },
  PhoneNumberError: {
    color: '#fff' ,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,.2)',
  },
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
  authCode: {
      flex: 1,
      paddingLeft: 20,
      color: '#fff',
      fontSize: 14,
  },
  authCodeError: {
    color: '#F587A6',
  },
  openLogin: {
    marginTop: 36,
  },
  throughLine: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,.2)',
    width: width/2-60,
    marginHorizontal: 14,
  },
});

export default connect()(LoginScreen)
