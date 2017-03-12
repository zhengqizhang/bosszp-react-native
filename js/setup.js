'use strict'
import React, {
  Component,
} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import BosszpApp from './BosszpApp';
import SplashScreen from 'react-native-splash-screen';

function setup(){
    class Root extends Component {
      constructor() {
          super();
          this.state = {
            store: configureStore(),
          };
      }

      componentDidMount() {
           // do anything while splash screen keeps, use await to wait for an async task.
          // SplashScreen.hide();//关闭启动屏幕
      }
      render(){
        return (
          <Provider store={this.state.store}>
            <BosszpApp />
          </Provider>
        )
      }
    }
    return Root
}



export default setup
