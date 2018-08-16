
import React, { Component } from 'react';

import { View, AppRegistry, StyleSheet } from 'react-native';
import ScreenQr from './src/component/ScreenQr';


import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  ScreenQr: { screen: ScreenQr },
});

class App extends Component {

  render() {
    return (
      <View>
          <View style={style.headerContainer}>
              <Text style={style.text}>{ this.props.title }</Text>
          </View>
          <View>
              <Image 
                          style={{ width: 50, height: 50 }}
                          source={{ uri: this.props.album.thumbnail_image }} />
          </View>
          <View>
              <Button onPress={() =>
                navigate('Profile', { name: 'Jane' })
              }
             style={style.buttonTitle} title="RUN QR CODE"/>
          </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
    headerContainer: {
        color: 'red',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        },
    text: {
        fontSize: 18  
    },
    buttonTitle: {
        color: '#000',
        backgroundColor: '#FFFF4081'
    },
    screenQrStyle:{
      marginTop : 40
    }
});

export default Header;



AppRegistry.registerComponent('qrcodeTest', () => App);
