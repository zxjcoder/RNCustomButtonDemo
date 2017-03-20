'use strict';
//create by zxj_coder
import React, {Component,PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    ActivityIndicator,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
export default class CustomHUD extends Component {
    static defaultProps = {
    // userListData:InitialData,
        labelText:'ok',
    };

    static propTypes = {
        accessibilityLabel: PropTypes.string,
        disabledStyle: Text.propTypes.style,
        labelText:PropTypes.string,
        activeOpacity: PropTypes.number,
        allowFontScaling: PropTypes.bool,
        isLoading: PropTypes.bool,
        isDisabled: PropTypes.bool,
        activityIndicatorColor: PropTypes.string,
        delayLongPress: PropTypes.number,
        delayPressIn: PropTypes.number,
        delayPressOut: PropTypes.number,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }
    _renderInnerView(){
        if (this.props.isLoading) {
            return(
                <ActivityIndicator
                  animating={true}
                  size='small'
                  style={styles.spinner}
                  color={this.props.activityIndicatorColor || 'white'}
                />
            )
        }else {
            return (
                <Text
                    style={[styles.textButton, this.props.textStyle]}
                    allowFontScaling={this.props.allowFontScaling}>
                    {this.props.labelText}
                </Text>
            )
        }
    }
    render(){
        if (this.props.isDisabled === true || this.props.isLoading === true) {
            return(
                <View style = {[styles.button,this.props.style,(this.props.disabledStyle)]}>
                    {this._renderInnerView()}
                </View>
            )
        }
        let touchableProps = {
            accessibilityLabel: this.props.accessibilityLabel,
            onPress: this.props.onPress,
            onPressIn: this.props.onPressIn,
            onPressOut: this.props.onPressOut,
            onLongPress: this.props.onLongPress,
            activeOpacity: this.props.activeOpacity,
            delayLongPress: this.props.delayLongPress,
            delayPressIn: this.props.delayPressIn,
            delayPressOut: this.props.delayPressOut,
        };
        return(
            <TouchableOpacity {...touchableProps}
                style = {[styles.button,this.props.style]}>
                {this._renderInnerView()}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  textButton: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});
