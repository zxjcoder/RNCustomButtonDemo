/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './CustomButton';

const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

export default class CustomButtonDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginButtonLoading:false,
        };
        this._onPressLogin = this._onPressLogin.bind(this);
    }

    _onPressLogin(){
        this.setState({isLoginButtonLoading:true});
        setTimeout(() => {
            this.setState({isLoginButtonLoading:false});
        },2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    isLoading = {this.state.isLoginButtonLoading}
                    style={styles.loginButtonStyle}
                    textStyle ={{color:'white'}}
                    underlayColor={'#cccccc'}
                    labelText = '登录'
                    onPress = {this._onPressLogin}
                    >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginButtonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff9400',
      height: 44,
      width: width * 0.9,
      borderRadius: 5,
  },

});

AppRegistry.registerComponent('CustomButtonDemo', () => CustomButtonDemo);
