'use strict';

var React = require('react-native');
var DEFCSS = require('./Styles.Default');
var Toolbar = require('./UI.Toolbar');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  ScrollView,
  Image,
  Text,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },
  contentScroller: {
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    backgroundColor: 'transparent',
    width: windowSize.width,
    height: windowSize.height
  },
  logo: {
    width: 111,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    height: 122
  },
  scrollContainer: {
    paddingVertical: 0
  }
});

var cakesplaza = React.createClass({
  render: function() {
    StatusBarIOS.setStyle('light-content');

    return (
      <View contentContainerStyle={styles.scrollContainer} style={[ styles.container ]}>
        <Image style={styles.mainImage} source={require('image!bgHome')} />
        <Image style={styles.logo} source={require('image!logo')} />
        <ScrollView contentContainerStyle={styles.scrollContainer} style={[ DEFCSS.contentContainer, styles.contentScroller ]}>
          <View style={DEFCSS.bgSpacer} />
          <View style={DEFCSS.pinkHeaderWrapper}>
          </View>
        </ScrollView>
        <Toolbar/>
      </View>
    );
  }
});



module.exports = cakesplaza;