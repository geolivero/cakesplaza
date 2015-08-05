var React = require('react-native');
var DEFCSS = require('./../Styles/Default');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Animated,
  Text,
  View,
} = React;



var styles = StyleSheet.create({
  arrow: {
    top: windowSize.height - 160,
    position: 'absolute',
    right: 20
  }
});

var arrow = React.createClass({
  getInitialState: function () {
    return {
      bounceValue: new Animated.Value(0)
    };
  },
  render: function() {
    return (
      <Animated.Image style={[ styles.arrow, {
        transform: [{translateY: this.state.bounceValue}]
      }]} source={require('image!arrow_icon')} />
    );
  },
  componentDidMount: function () {
    Animated.spring(                          
      this.state.bounceValue,                 
      {
        toValue: 10,                         
        friction: 1,                          
      }
    ).start(); 
  }
});


module.exports = arrow;