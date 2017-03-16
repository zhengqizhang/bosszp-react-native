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


const { position } = this.props;
if(position instanceof Array){
  return (
    <View style={styles.typesContainer}>
        {
          position.map((item,i)=>{
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
return (
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
        <View style={styles.publisherAvatar}/>
        <Text style={styles.publisherName}>  马云 |</Text>
        <Text style={styles.publisherPost}>  招聘负责人</Text>
    </View>
  </View>
);


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
