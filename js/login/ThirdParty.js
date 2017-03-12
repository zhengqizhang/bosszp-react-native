'use strict';
import React, {
  Component,
} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';
import Config from '../../config';

import  { LoginWithQQ } from '../actions';

class ThirdParty extends Component {
  constructor() {
      super()
  }

  componentDidMount()
  {
    this.wechat = NativeModules.WechatAndroid;
    this.wechat.registerApp(Config.thirdParty.WXId);
    this.qq = NativeModules.QQAndroid;
    this.qq.registerApp(Config.thirdParty.QQId);
    this.weibo = NativeModules.WeiboAndroid;
    this.weibo.registerApp(Config.thirdParty.WeiBoId, Config.thirdParty.WeiBoUrl);
  }


  render() {
      return(
        <TouchableOpacity onPress={()=> this.selectTheLoginWay()}>
           <LinearGradient
           start={[0.5, 0.0]} end={[0.5, 1.0]}
           colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}
           style={{borderRadius: 30,  width: 60, height: 60, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor: '#fff'}}>
             <Icon name={this.props.name} size={30} color={'#fff'}  />
           </LinearGradient>
         </TouchableOpacity>
      )
  }

  async selectTheLoginWay(){
      const { name } = this.props;
      switch (this.props.name) {
        case 'qq':
          const {openId, accessToken} = await this.qq.login();
          await this.props.dispatch(LoginWithQQ(openId, accessToken));
          this.props.onLogin();
          break;
        default:

      }
  }


    async qqLogin()
    {
      const {openId, accessToken} = await this.qq.login();
      await this.props.dispatch(LoginWithQQ(openId, accessToken)),
      // this.props.navigator.pop();
      this.props.onLogin();
    }

    async weiboLogin()
    {
      const {openId, accessToken} = await this.weibo.login();
      await this.props.weiboLogin(openId, accessToken);
      this.props.onLogin();
    }

    async wechatLogin()
    {
      // alert(await this.wechat.isInstalled());
      const code = await this.wechat.login();
      this.props.wechatLogin(code);
    }
}

export default connect()(ThirdParty)
