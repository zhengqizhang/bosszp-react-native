'use strict';
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableWithoutFeedback,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import data from '../../data';

class HotPositionView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.hotPosition.positions),
      selectedType: 0
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderHeader={()=>this.renderHeader()}
            renderRow={(position) => this.renderHotPosition(position)}
          />
        )
  }

  selectType(i){
    this.setState({
      selectedType: i
    })
  }

  renderHeader(){
    const { hotPosition } = this.props;
    return (
      <View style={styles.typesContainer}>
          {
            hotPosition.types.map((item,i)=>{
              return (
                <TouchableWithoutFeedback
                  onPress={()=>{
                    this.selectType(i)
                  }}
                  key={i}>
                  <View style={this.state.selectedType ===i ? styles.tpyeItem_s : styles.tpyeItem}>
                    <Text style={this.state.selectedType ===i ? styles.typeText_s : styles.typeText}>
                    { item }
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })
          }
      </View>
    )
  }

  renderHotPosition(position){
    return (
      <TouchableWithoutFeedback onPress={()=>this.showPositionDetail()}>
        <View style={styles.positionItem}>
          <View style={styles.infoBox}>
            <Text style={styles.name}>{position.position}</Text>
            <Text style={styles.salary}>{position.salary}</Text>
          </View>
          <View style={styles.mainInfo}>
              <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                <Text> 北京 朝阳区 望京 </Text>
              </Icon>
              <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                <Text> 3-5 年</Text>
              </Icon>
              <Icon name="ios-pin-outline" size={12} color="rgb(140,140,140)">
                <Text> 本科 </Text>
              </Icon>
          </View>
          <View style={styles.publisher}>
              <Image style={styles.publisherAvatar} source={{uri:"https://tva2.sinaimg.cn/crop.0.0.512.512.180/66134906jw8fcgvur5rxyj20e80e80tb.jpg"}} />
              <Text style={styles.publisherName}>  马云 |</Text>
              <Text style={styles.publisherPost}>  招聘负责人</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  showPositionDetail(){
    this.props.navigator.push({
      name: "positionDetail"
    })
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',

  },
  typesContainer: {
    paddingTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  tpyeItem: {
    backgroundColor: '#FFF',
    height: 36,
    width: 82,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  tpyeItem_s: {
    backgroundColor: 'rgb(90,201,195)',
    height: 36,
    width: 82,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  typeText: {
    color: 'rgb(116,116,116)',
    fontSize: 12
  },
  typeText_s: {
    color: '#FFF',
    fontSize: 12
  },
  HotPositionContainer: {
    backgroundColor: '#FFF',
    width: 360,
    height: 120
  },
  positionItem: {
    backgroundColor: '#FFF',
    height: 116,
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  infoBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  name: {
    color: "rgb(134,200,193)",
    fontSize: 16
  },
  salary: {
    color: "rgb(232,129,132)",
    fontSize: 16
  },
  mainInfo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgb(228,228,228)',
    paddingVertical: 12,
    marginBottom: 6
  },
  publisher: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  publisherAvatar: {
    backgroundColor: 'pink',
    height: 30,
    width: 30,
    borderRadius: 15
  },
  publisherName: {
    color: '#000',
  },
  publisherPost: {
    color: "#000"
  }
});

export default connect()(HotPositionView);
