var React = require('react-native');
var DEFCSS = require('./../Styles/Default');

var {
  AppRegistry,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
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
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  height: {
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
    marginRight: 10, 
    top: Platform.OS === 'ios' ? 15 : 25
  },
  backBtn: {
    width: 10,
    height: 15
  },
  btnSearch: {
    width: 21,
    height: 20
  },
  btnMenu: {
    width: 21,
    height: 17
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
      backBtn = <TouchableHighlight onPress={this.props.onPress}><View  style={[ styles.height, styles.align, styles.btnLeft ]}><Image style={[styles.backBtn]} source={require('image!btn_back')} /></View></TouchableHighlight>;
    }
    return (
      <View style={[styles.bar, DEFCSS.oDarkBg ]}>
        { backBtn }
        <Text style={[ DEFCSS.sansc, styles.align, styles.height, styles.title, DEFCSS.whiteColor ]}>{this.props.title.toUpperCase()}</Text>
        <View style={[ styles.height, styles.align, styles.topBtns ]}>
          <Image style={styles.btnSearch} source={require('image!search_icon')} />
        </View>
        <View style={[ styles.height, styles.align, styles.topBtns ]}>
          <Image style={styles.btnMenu} source={require('image!hamb_icon')} />
        </View>
      </View>
    );
  }
});


module.exports = toolbar;