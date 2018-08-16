import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


class Header extends Component {

    render() {
        return (
            <View style={style.headerContainer}>
                <Text style={style.text}>{ this.props.title }</Text>
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
    }
});

export default Header;
