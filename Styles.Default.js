'use strict';
var React = require('react-native');
var {
  StyleSheet
} = React;

var colors = {
  oDark: '#D9171313',
  oLight: '#80FFFFFF',
  lightPink: '#FFE2E2',
  darkBrown: '#1B1616',
  sDarkBrown: '#423535'
};


module.exports = StyleSheet.create({
  darkBg: { 
    backgroundColor: colors.darkBrown,
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
  sansc: {
    fontFamily: 'OpenSans-CondensedLight'
  }
});