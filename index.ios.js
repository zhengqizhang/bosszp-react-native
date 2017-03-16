import {AppRegistry} from 'react-native';
import setup from './js/setup';

AppRegistry.registerComponent('bosszp',setup);

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   ListView
// } from 'react-native';
//
// export default class bosszp extends Component {
//   constructor() {
//     super();
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows(['row 1', 'row 2','row 2','row 2','row 2','row 2','row 2','row 2','row 2','row 2','row 2',]),
//     };
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//           <ScrollView style={{flex: 1}}>
//             <Text style={styles.welcome}>
//               Welcome to React Native!
//             </Text>
//             <Text style={styles.instructions}>
//               To get started, edit index.android.js
//             </Text>
//             <ListView
//               dataSource={this.state.dataSource}
//               renderRow={(rowData) => <Text style={styles.welcome}>{rowData}</Text>}
//             />
//           </ScrollView>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     lineHeight: 100,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('bosszp', () => bosszp);
