var React = require('react-native');
var DEFCSS = require('./../Styles/Default');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;


var styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    height: 60,
    top: 0,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    left: 0,
    right: 0,
    paddingTop: 20
  },
  height: {
    height: 40,
    alignItems: 'center'
  },
  title:  {
    height: 27,
    fontSize: 20,
    flex: 2,
    alignSelf: 'center'
  },
  btnLeft: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 30
  },
  align: {
    justifyContent: 'center'
  },
  topBtns: {
    padding: 5 
  }
});

var toolbar = React.createClass({
  render: function() {
    var backBtn;
    if (this.props.showBackBtn) {
      backBtn = <View style={[ styles.height, styles.align, styles.btnLeft ]}><Image source={require('image!btn_back')} /></View>;
    }
    return (
      <View style={[styles.bar, DEFCSS.oDarkBg ]}>
        { backBtn }
        <Text style={[ DEFCSS.sansc, styles.align, styles.height, styles.title, DEFCSS.whiteColor ]}>{this.props.title.toUpperCase()}</Text>
        <View style={[ styles.height, styles.align, styles.topBtns, styles.btnSearch ]}>
          <Image source={require('image!search_icon')} />
        </View>
        <View style={[ styles.height, styles.align, styles.topBtns, styles.btnMenu ]}>
          <Image source={require('image!hamb_icon')} />
        </View>
      </View>
    );
  }
});


module.exports = toolbar;