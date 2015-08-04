'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  StyleSheet
} = React;

var colors = {
  oDark: '#D9171313',
  oLight: '#80FFFFFF',
  lightPink: '#FFE2E2',
  darkBrown: '#1B1616',
  white: '#FFFFFF',
  sDarkBrown: '#423535'
};


module.exports = StyleSheet.create({
  darkBg: { 
    backgroundColor: colors.darkBrown,
  },
  oDarkBg: { 
    backgroundColor: 'rgba(42, 34, 34, 0.8)',
  },
  darkColor: {
    color: colors.darkBrown
  },
  pinkBg: { 
    backgroundColor: colors.lightPink,
  },
  pinkColor: {
    color: colors.lightPink
  },
  bgSpacer: {
    flex: 1,
    height: windowSize.height - 120
  },
  pinkHeaderWrapper: {
    backgroundColor: colors.lightPink,
    height: 100
  },
  whiteColor: {
    color: colors.white
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: colors.white
  },
  contentContainer: {
    padding: 0,
    margin: 0
  },
  sansc: {
    fontFamily: 'OpenSans-CondensedLight'
  }
});