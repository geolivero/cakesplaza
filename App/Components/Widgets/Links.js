var React = require('react-native');
var DEFCSS = require('./../../Styles/Default');
var Settings = require('./../../../Settings');
var WebIntent = require('react-native-webintent');

var {
  TouchableHighlight,
  View,
  Platform,
  TouchableOpacity,
  LinkingIOS,
  Text
} = React;


var styles = {
  link: {
    fontSize: 16,
    writingDirection: 'ltr',
    textAlign: 'left',
    lineHeight: 20,
    marginTop: 2,
    marginBottom: 2,
    letterSpacing: 0.1,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: Settings.colors.pink,
    color: Settings.colors.pink
  }
};


module.exports = React.createClass({

  getInitialState() {
    return {
      toggleLink: ''
    };
  },

  handleClick(e) {
    if (Platform.OS === 'ios') {
      LinkingIOS.openURL(this.props.type + this.props.text);
    } else {
      WebIntent.mail(this.props.type + this.props.text);
    }
    
  },

  render() {
    return(
      <TouchableOpacity onPress={(e) => { this.handleClick(e); } }>
      <Text style={[DEFCSS.sansc, styles.link]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
});