'use strict';

var React = require('react-native');


var DEFCSS = require('./../Styles/Default');
var Toolbar = require('./../UI/Toolbar');
var PinkHeader = require('./../UI/PinkHeaders');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Arrow = require('./../Widgets/Arrow');

var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  ScrollView,
  Image,
  Text,
  Animated,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  chooseBlock: {
    height: 230,
    alignItems: 'center'
  },
  circle:  {
    width: 95,
    height: 95,
    borderRadius: 48,
    marginTop: 30,
    marginBottom: 10
  },
  btnTitle: {
    fontSize: 20
  },
  whiteHeader: {
    height: 130,
    alignItems: 'center'
  }
});

var home = React.createClass({
  _onScroll: function (e) {
    var scrollY = e.nativeEvent.contentOffset.y;
    this.state.mImgTop = scrollY / 2;
    console.log(this.state.mImgTop);

  },
  getInitialState: function () {
    return {
      mImgTop: 0
    };
  },
  render: function() {
    StatusBarIOS.setStyle('light-content');

    return (
      <View contentContainerStyle={styles.scrollContainer} style={[ styles.container, DEFCSS.floatCenter]}>
        <Image style={[styles.mainImage, { top: this.state.mImgTop } ]} 
          source={require('image!bgHome')} />
        <Image style={styles.logo} source={require('image!logo')} />
        
        <ScrollView scrollEventThrottle={30} onScroll={ this._onScroll } contentContainerStyle={styles.scrollContainer} style={[ DEFCSS.contentContainer, styles.contentScroller ]}>
          <View style={DEFCSS.bgSpacer} />
          <PinkHeader title={'BEGIN HIER'} subTitle={'start met ervaren'} />
          <Arrow />
          <View style={[styles.chooseBlock, DEFCSS.darkBg]}>
            <View style={[styles.circle, DEFCSS.brownBg, DEFCSS.floatCenter]}>
              <Image source={require('image!icon_cake')} />
            </View>
            <Text style={[ DEFCSS.sansc, styles.btnTitle, DEFCSS.pinkColor ]}>{'IK WIL TAART'}</Text>
            <Text style={[ DEFCSS.sans, DEFCSS.pinkColor, styles.btnSubTitle ]}>{'zoek of vraag offertes by bakkers'}</Text>
          </View>
          <View style={[styles.chooseBlock, DEFCSS.brownBg]}>
            <View style={[styles.circle, DEFCSS.darkBg, DEFCSS.floatCenter]}>
              <Image source={require('image!icon_roller')} />
            </View>
            <Text style={[ DEFCSS.sansc, styles.btnTitle, DEFCSS.pinkColor ]}>{'IK BAK TAART'}</Text>
            <Text style={[ DEFCSS.sans, DEFCSS.pinkColor, styles.btnSubTitle ]}>{'zoek of vraag offertes by bakkers'}</Text>
          </View>
          <View style={[styles.whiteHeader, DEFCSS.whiteBg]}>
            <Text style={[ DEFCSS.sansc, styles.btnTitle, DEFCSS.darkColor, DEFCSS.titleSize, { paddingTop: 15 } ]}>{'ONZE FAVORITE BAKKERS'}</Text>
            <Text style={[ DEFCSS.sans, DEFCSS.darkColor, styles.btnSubTitle, DEFCSS.subTitleSize, { textAlign: 'center', marginLeft: 20, marginRight: 20} ]}>{'wij hebben alvast leuke bakkers geselecteerd'}</Text>
          </View>

        </ScrollView>
        <Toolbar/>
      </View>
    );
  }
});



module.exports = home;