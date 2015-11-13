'user strict';

var React = require('react-native');
var DEFCSS = require('./../Styles/Default');
var Helpers = require('./../Helpers');
var Settings = require('./../../Settings');
var { Icon, } = require('react-native-icons');
//var FacebookLoginManager = require('NativeModules').FacebookLoginManager;

var {
  View,
  Text,
  Image,
  Easing,
  StyleSheet,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
  ScrollView
} = React;


module.exports = React.createClass({

  getInitialState: function () {
    return {
      result: ''
    };
  },


  componentDidMount: function () {
  },

  onBack() {
    this.props.navigator.pop();
  },

  fbConnect() {
    //console.log(FacebookLoginManager);
    /*FacebookLoginManager.newSession((error, info) => {
      if (error) {
        console.log(error);
        this.setState({result: error});
      } else {
        console.log(info);
        this.setState({result: info});
      }
    });*/
  },

  render() {
    return (
      <View style={[styles.container]}>

        <View style={[styles.content]}>
        <Image source={require('image!logo_small')} />
        <Text style={[styles.title, DEFCSS.sansc]}>START HIER</Text>
        <Text style={[styles.subTitle, DEFCSS.sans]}>Connect jouw account met facebook</Text>
          <TouchableOpacity onPress={this.fbConnect}>
            <View style={[styles.btnfb]}>
              <Icon
                name='fontawesome|facebook'
                size={22}
                color={Settings.colors.white}
                style={[styles.fb]} />
              <Text style={[DEFCSS.sansc, styles.fbText]}>CONNECT MET FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.subTitle, DEFCSS.sans, { marginTop: 4 }]}>of met e-mail</Text>
          <TouchableOpacity>
            <View style={[styles.btnfb, styles.btnEm]}>
              <Icon
                name='fontawesome|envelope'
                size={22}
                color={Settings.colors.darkBrown}
                style={[styles.em]} />
              <Text style={[DEFCSS.sansc, styles.fbText, styles.emTxt]}>CONNECT MET EMAIL</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.arrowBtnBack}>
          <TouchableOpacity onPress={this.onBack}>
            <Icon
              name='fontawesome|angle-left'
              size={22}
              color={Settings.colors.darkBrown}
              style={[styles.buttons]} />
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  arrowBtnBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 30,
    height: 30
  },
  buttons: {
    width: 30,
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: Settings.colors.white,
    width: Settings.box.width,
    height: Settings.box.height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginTop: 5
  },
  content: {
    width: Settings.box.width  - 40,
    alignItems: 'center'
  },
  fb: {
    width: 30,
    height: 50
  },
  fbText: {
    color: Settings.colors.white,
    fontSize: 18,
    marginLeft: 3,
    marginRight: 10
  },
  btnfb: {
    backgroundColor: '#4A90E2',
    height: 50,
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  em: {
    width: 30,
    height: 50,
    marginLeft: 5,
    marginRight: 5
  },
  emTxt: {
    color: Settings.colors.darkBrown
  },
  btnEm: {
    backgroundColor: Settings.colors.lightPink
  }
});
