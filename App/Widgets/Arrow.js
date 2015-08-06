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


var arrow = React.createClass({

  getInitialState: function () {
    return {
      transY: new Animated.Value(0)
    };
  },
  render: function() {
    var styles = StyleSheet.create({
      arrow: {
        top: windowSize.height - 160,
        position: 'absolute',
        right: 20,
        transform: [{
          translateY: this.state.transY
        }]
      }
    });

    return (
      <Animated.Image style={ styles.arrow }
       source={require('image!arrow_icon')} />
    );
  },
  stopAnimation: function () {
    alert('Animation stopped');
  },
  moveArrow: function () {
    var self = this;
    Animated.timing(
      this.state.transY, { toValue: 20 }
    ).start(function (e) {
      if (e.finished) {
        Animated.timing(self.state.transY, { toValue: 0 }).start(function () {
          self.moveArrow();
        }); 
      }
    });    
  },
  componentDidMount: function () {
    var self = this;
    this.moveArrow();
  }
});


module.exports = arrow;
