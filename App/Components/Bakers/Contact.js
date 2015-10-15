'user strict';

var React = require('react-native');
var Backbone = require('backbone');
var DEFCSS = require('./../../Styles/Default');
var Helpers = require('./../../Helpers');
var Links = require('./../Widgets/Links');

var {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} = React;

var styles = {
  popup: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,

    right: 0,
    top: 0,
    bottom: 0,
    padding: 30,
    paddingBottom: 50,
    paddingTop: 50
  },
  contentEL: {

  },
  contentEL: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    top: 40
  },
  innerConent: {
    fontSize: 16,
    writingDirection: 'ltr',
    textAlign: 'left',
    lineHeight: 23,
    marginBottom: 10,
    letterSpacing: 0.1
  },
  panelPopup: {
    flex: 1
  },
  closeBtn: {
    marginTop: 5,
    width: 8,
    height: 8
  },
  headerTitle: {
    flex: 0.8,
    height: 40,
    fontSize: 20
  },
  titleBar: {
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    height: 40,
    padding: 10
  },
  adress: {

  }
};

var bakers = React.createClass({
  closePopup(e) {
    this.props.onClose();
  },


  render() {
    //console.log(this.props.model);
  
    return (
      <View style={[styles.popup, DEFCSS.oDarkBg]}>
        <View style={[styles.panelPopup]}>
          <View style={[styles.titleBar, DEFCSS.lightgrayBg]}>
            <Text style={[DEFCSS.sansc, styles.headerTitle]}>{'Contact gegevens'}</Text>
            <TouchableHighlight onPress={this.closePopup}>
              <Image style={[styles.closeBtn]} source={require('image!close_icon')} />
            </TouchableHighlight>
          </View>
          <ScrollView 
            contentContainerStyle={DEFCSS.scrollContainer} 
            style={[ styles.contentEL, DEFCSS.whiteBg ]}>
            <View style={[styles.adress]}>
              <Text style={[DEFCSS.sansc, styles.innerConent]}>
                { this.props.model.get('field_straat_value') } { this.props.model.get('field_huisnummer_value') } {'\n'}
                { this.props.model.get('field_plaats_value') }
              </Text>
              <Links text={this.props.model.get('field_telefoon_value')} type="tel:" />
              <Links text={this.props.model.get('field_mobiele_nummer_value')} type="tel:" />
              <Links text={'geo.geolivero@gmail.com'} type="mailto:" />
            </View>

            
          </ScrollView>
          
          
        </View>
      </View>
    );
  }
});

module.exports = bakers;