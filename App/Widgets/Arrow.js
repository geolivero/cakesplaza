var React = require('react-native');
var DEFCSS = require('./../Styles/Default');
var tweenState = require('react-tween-state');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Animated,
  LayoutAnimation,
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
      transY: 0
    };
  },
  mixins: [tweenState.Mixin],
  render: function() {
    return (
      <Image style={[ styles.arrow, {
        transform: [{translateY: this.getTweeningValue('translateY') }]
      }]} source={require('image!arrow_icon')} />
    );
  },
  moveArrow: function () {
    this.tweenState('translateY', {
      easing: tweenState.easingTypes.easeOutQuint,
      duration: 500,
      endValue: this.state.transY === 0 ? 10 : 0,
    });
  },
  componentDidMount: function () {
    //LayoutAnimation.spring();
    /*Animated.spring(                          
      this.state.bounceValue,                 
      {
        toValue: 10,                         
        friction: 1,                          
      }
    ).start(); */
    this.timer = setInterval(() => { this.moveArrow() }, 500);
  }
});


module.exports = arrow;