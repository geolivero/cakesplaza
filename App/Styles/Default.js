'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Settings = require('./../../Settings');

var {
  StyleSheet
} = React;


module.exports = StyleSheet.create({
  darkBg: { 
    backgroundColor: Settings.colors.darkBrown
  },
  brownBg: {
    backgroundColor: Settings.colors.brown
  },
  oDarkBg: { 
    backgroundColor: 'rgba(42, 34, 34, 0.8)',
  },
  darkColor: {
    color: Settings.colors.darkBrown
  },
  titleSize: {
    fontSize: 35
  },
  subTitleSize: {
    fontSize: 15
  },
  pinkBg: { 
    backgroundColor: Settings.colors.lightPink,
  },
  whiteBg: { 
    backgroundColor: 'white',
  },
  pinkColor: {
    color: Settings.colors.lightPink
  },
  bgSpacer: {
    flex: 1,
    height: windowSize.height - 120
  },
  whiteColor: {
    color: Settings.colors.white
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: Settings.colors.white
  },
  contentContainer: {
    padding: 0,
    margin: 0
  },
  floatCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sansc: {
    fontFamily: 'OpenSans-CondensedLight',
    color: Settings.colors.darkBrown
  },
  sans: {
    fontFamily: 'OpenSans-Light',
    color: Settings.colors.darkBrown
  }
});