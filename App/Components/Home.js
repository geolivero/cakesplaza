'use strict';

var React = require('react-native');

var DEFCSS = require('./../Styles/Default');
var Toolbar = require('./../UI/Toolbar');
var PinkHeader = require('./../UI/PinkHeaders');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Arrow = require('./../Widgets/Arrow');
var Settings = require('./../../Settings');

var Bakers = require('./../Models/Baker');



var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS,
  ScrollView,
  ListView,
  Image,
  Text,
  LayoutAnimation,
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
    //LayoutAnimation.spring();
    if (scrollY > 0) {
      this.setState({
        mImgTop: (scrollY / 5) * -1,
        mLogoTop: (scrollY / 3) * -1
      }); 
    } else {
      this.setState({ 
        mImgScale: (((scrollY * -1) / 100) / 5) + 1 
      });  
    }
  },
  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      mImgScale: 1,
      mImgTop: 0,
      mLogoTop: 0,
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      collection: new Bakers.collection(),
      homeCollection: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  },
  componentDidMount: function () {
    StatusBarIOS.setStyle('light-content');
    this.fetchCollection();
    //To cancel the arrow animation
    //this.refs['theArrow'].stopAnimation();
  },
  setHomeCollection: function () {
    this.state.homeCollection.cloneWithRows(this.state.collection.getUsersHome());
  },
  fetchCollection: function () {
    if (fetch && !this.state.collection.length) {
      var self = this;
      fetch(this.state.collection.url).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        self.state.collection.set(jsonData);
        self.setHomeCollection();
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.setHomeCollection();
    }
  },
  componentWillUnmount: function () {
    backboneReact.off(this);
  },
  renderBaker: function (model) {
    return (
      <View>
        <Text>{model.get('name')}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <View contentContainerStyle={styles.scrollContainer} style={[ styles.container, DEFCSS.floatCenter]}>
        <Image style={[styles.mainImage, { top: this.state.mImgTop, transform: [{ scale: this.state.mImgScale }] } ]} 
          source={require('image!bgHome')} />
        <Image style={[styles.logo, {
          transform: [
            { translateY: this.state.mLogoTop }
          ]
        }]} source={require('image!logo')} />
        
        <ScrollView scrollEventThrottle={2} onScroll={ this._onScroll } contentContainerStyle={styles.scrollContainer} style={[ DEFCSS.contentContainer, styles.contentScroller ]}>
          <View style={DEFCSS.bgSpacer} />
          <PinkHeader title={'BEGIN HIER'} subTitle={'start met ervaren'} />
          <Arrow ref={'theArrow'} />
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
          <ListView dataSource={this.state.homeCollection} renderRow={this.renderBaker} />
        </ScrollView>
        <Toolbar title={''}/>
      </View>
    );
  }
});
//<ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
//<ListView dataSource={this.state.homeCollection} renderRow={this.renderBaker} />


module.exports = home;