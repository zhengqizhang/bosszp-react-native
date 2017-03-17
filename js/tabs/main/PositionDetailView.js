'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
let timer;

class PositionDetailView extends Component {
  constructor() {
    super();
    this.state = {
      anim: new Animated.Value(0)
    };
  }

  componentDidMount() {
    timer = setInterval(()=>{
      Animated.timing(          // Uses easing functions
        this.state.anim,    // The value to drive
        {
          toValue: 1,
          duration: 1000
        },         // Configuration
      ).start(
        ()=>{
          this.state.anim,    // The value to drive
          {
            toValue: 0,
            duration: 1000
          }
        }
      );
    },2000)
  }

  componentWillUnmount() {
    clearInterval(timer)
  }

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={()=>this.back()}>
                  <Icon size={36} name={'ios-arrow-dropleft-outline'} color="rgb(168,168,168)" style={styles.backButton}/>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView style={{marginTop: 62, marginBottom: 42}}>
              <View style={styles.card}>
                  <View style={styles.summary}>
                    <Text style={styles.title}>
                        iOS架构师
                    </Text>
                    <Text style={styles.salary}>
                        25K-50K
                    </Text>
                  </View>
                  <Text style={[styles.content,styles.name]}>映客直播  B轮</Text>
                  <View style={styles.mainInfo}>
                      <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                        <Text style={styles.content}> 北京 朝阳区 望京 </Text>
                      </Icon>
                      <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                        <Text style={styles.content}> 3-5 年</Text>
                      </Icon>
                      <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                        <Text style={styles.content}> 本科 </Text>
                      </Icon>
                  </View>
                  <View>
                  <Text style={styles.welfare}>
                      股票期权  带薪年假  领导nice
                  </Text>
                  </View>
              </View>
              <View style={styles.card}>
                  <Text style={styles.title}>
                      职位详情
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.content}>
                      5-8年相关工作经验{'\n'}
                      具备5人以上团队管理经验{'\n'}
                      一、二线互联网公司北京优先{'\n'}
                      有过独立的产品开发项目经验
                  </Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.title}>
                      技能要求
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.content}>
                      iOS 系统架构{'\n'}
                  </Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.title}>
                      您的竞争力分析
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.content}>
                      目前共有n个牛人沟通过该职位，相比他们，你的综合竞争力排名为第m名。
                  </Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.title}>
                      Boss
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.content}>
                      目前共有n个牛人沟通过该职位，相比他们，你的综合竞争力排名为第m名。
                  </Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.title}>
                    公司介绍
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.content}>
                      目前共有n个牛人沟通过该职位，相比他们，你的综合竞争力排名为第m名。
                  </Text>
              </View>
            </ScrollView>
            <View style={styles.footer}>
                <AnimatedIcon name="ios-chatboxes-outline" size={24} color="#FFF"
                  style={{
                    transform: [   // Array order matters
                      {scale: this.state.anim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 1.5, 1],
                      })},
                      {rotate: this.state.anim.interpolate({
                        inputRange: [0, 1/8, 3/8, 5/8, 7/8, 1],
                        outputRange: [
                          '0deg', '30deg', '-30deg', '30deg', '-30deg', '0deg'// 'deg' or 'rad'
                        ],
                      })},
                    ]}
                  }
                />
                <Text style={{color: "#FFF", backgroundColor: 'transparent'}}>  立即沟通 </Text>
            </View>
        </View >
      );
  }

  back(){
    this.props.navigator.pop();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'rgb(233,239,239)'
  },
  header: {
    backgroundColor: 'rgb(18,191,182)',
    height: 64,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'hidden'
  },
  card: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 9
  },
  title: {
    fontSize: 16,
    color: 'rgb(140,190,190)'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    color: "rgb(122,122,122)",
    lineHeight: 19
  },
  salary: {
    color: "rgb(232,129,132)",
    fontSize: 16
  },
  name: {
    fontSize: 16,
    marginTop: 10
  },
  mainInfo: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  welfare: {
    color: 'rgb(186,186,186)',
    fontSize: 12
  },
  line: {
    height: 1,
    backgroundColor: 'rgb(230,230,230)',
    marginVertical: 12
  },
  footer: {
    backgroundColor: 'rgb(18,191,182)',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default connect()(PositionDetailView);
