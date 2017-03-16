'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableWithoutFeedback,
  ScrollView,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import data from '../../data';
import CompanyProfileView from './CompanyProfileView';
import HotPositionView from './HotPositionView';

class CompanyDetailView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      profileData: ds.cloneWithRows([data.companyLists[0].profile]),
      hotPositionData: ds.cloneWithRows([data.companyLists[0].hotPosition.types,...data.companyLists[0].hotPosition.positions]),
      selectedTab: "profile",
      fadAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
      return (
        <ScrollView style={styles.container}>
          <Animated.View style={[styles.header,{opacity: this.state.fadAnim}]}>

          </Animated.View>
          {
            this.state.selectedTab === "profile" ? (
              <ListView
                dataSource={this.state.profileData}
                renderHeader={()=>this.renderHeader()}
                renderRow={(profile) => <CompanyProfileView profile={profile}/>}
              />
            ) : (
              <ListView
                dataSource={this.state.hotPositionData}
                renderHeader={()=>this.renderHeader()}
                renderRow={(position) => <HotPositionView position={position}/>}
              />
            )
          }
          <TouchableWithoutFeedback onPress={()=>this.back()}>
            <Icon size={36} name={'ios-arrow-dropleft-outline'} color="rgb(168,168,168)" style={styles.backButton}/>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
    }

    renderHeader(){
       return (
         <View>
           <Carousel
             delay={2000}
             style={styles.carousel}
             autoplay
             pageInfo
             onAnimateNextPage={(p) => p = 1}
           >
           {
             [1,2].map((item,i)=>{
               return (
                 <Image
                   key={i}
                   style={{flex: 1}}
                   source={{uri: 'https://www.lgstatic.com/thumbnail_300x300/i/image/M00/08/49/Cgp3O1bPycGAMj0hAAAgshBCvv4840.jpg'}}
                 />
               )
             })
           }
           </Carousel>
           <View style={styles.companyInfo}>
               <Image
                 source={{uri:data.companyLists[0].logo}}
                 style={styles.companyLogo}/>
               <View style={styles.companyInfoText}>
                   <Text style={styles.name}>映客直播</Text>
                   <Text style={styles.type}> 移动换联网    B轮    500-999人</Text>
               </View>
           </View>
           <View style={styles.tabNavigator}>
              <TouchableWithoutFeedback onPress={()=>{
                this.setState({
                  selectedTab: 'profile'
                })
              }}>
                <View>
                  <Text style={this.state.selectedTab === "profile" ? styles.selectedTitleStyle : styles.titleStyle }>
                    公司概况
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{
                this.setState({
                  selectedTab: 'hot'
                })
              }}>
                <View>
                  <Text style={this.state.selectedTab === "hot" ? styles.selectedTitleStyle : styles.titleStyle }>
                    热招职位（98）
                  </Text>
                </View>
              </TouchableWithoutFeedback>
           </View>
         </View>
       )
    }

    back(){
      this.props.navigator.pop()
    }
  }

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233,239,239)'
  },
  carousel: {
    height: 220,
    backgroundColor: '#FFF'
  },
  companyInfo: {
    backgroundColor: '#FFF',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  companyLogo: {
    backgroundColor: 'transparent',
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  companyInfoText: {
    flex: 1,
    justifyContent: 'space-between',
    height: 60
  },
  name: {
    paddingLeft: 10,
    fontSize: 16
  },
  type: {
    paddingLeft: 4,
    fontSize: 12,
    color: 'rgb(168,168,168)'
  },
  tabNavigator:{
    backgroundColor: '#FFF',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'rgb(201,201,201)',
  },
  titleStyle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    lineHeight: 50,
  },
  selectedTitleStyle: {
    fontSize: 16,
    color: 'rgb(116,116,116)',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    lineHeight: 50,
    borderTopWidth: 1,
    borderColor: 'pink'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 8,
    backgroundColor: 'transparent',
    zIndex: 2
  },
  header: {
    backgroundColor: 'rgb(18,191,182)',
    height: 62,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  }
});

module.exports = connect()(CompanyDetailView);
