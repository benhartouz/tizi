
import React, { Component } from 'react';

import { View, AppRegistry, StyleSheet } from 'react-native';



import Header from './src/component/Header';
import ScreenQr from './src/component/ScreenQr';

class App extends Component {

  render() {
    return (
      <View>
        <Header title="Qr Code Reader" />
          <View style={styles.screenQrStyle}>
            <ScreenQr />
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  screenQrStyle:{
    marginTop : 40
  }
});


AppRegistry.registerComponent('qrcodeTest', () => App);
