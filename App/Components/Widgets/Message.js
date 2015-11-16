'user strict';

import React from 'react-native';
import DEFCSS from './../../Styles/Default';
import Helpers from './../../Helpers';
import Settings from './../../../Settings';
import { Icon, } from 'react-native-icons';
import CloseBtn from './CloseBtn';

var {
  View,
  Text,
  Image,
  Easing,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Animated,
  TouchableOpacity,
  ScrollView
} = React;


export default class TxtInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txt: ''
    };
  }

  componentDidMount() {
  }

  closeMe(type) {
    if (type === 'ok') {
      this.props.onOk();
    } else {
      this.props.onCancel();
    }
  }

  onCloseOk() {
    this.closeMe('ok');
  }

  onCloseCancel() {
   this.closeMe('cancel'); 
  }

  render() {
    return(
      <Animated.View style={[DEFCSS.oDarkBg, styles.container]}>
        <View style={styles.messageBox}>
          <Text style={[DEFCSS.sansc, styles.header]}>{this.props.MessageHeader}</Text>
          <Text style={[DEFCSS.sans, styles.content]}>{this.props.MessageContent}</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={(e) => { this.onCloseCancel(e); }}>
            <View style={[styles.btn, styles.cancel]}>
              <Text style={[DEFCSS.sansc, styles.btnText]}>ANNULEREN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => { this.onCloseOk(e); }}>
            <View style={[styles.btn, styles.okWrapper]}>
              <Text style={[DEFCSS.sansc, styles.btnText]}>OK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  messageBox: {
    backgroundColor: Settings.colors.white,
    margin: 10,
    marginBottom: 0,
    width: Settings.box.width - 40
  },
  btnWrapper: {
    height: 50,
    width: Settings.box.width - 40,
    flexDirection: 'row'
  },
  btn: {
    flex: 0.5,
    height: 50,
    width: (Settings.box.width - 40) / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancel: {
    backgroundColor: Settings.colors.darkBrown
  },
  okWrapper: {
    backgroundColor: Settings.colors.pink
  },
  header: {
    fontSize: 20,
    margin: 10,
    marginBottom: 0,
    textAlign: 'center'
  },
  btnText: {
    color: Settings.colors.white,
    fontSize: 20,
    margin: 10
  },
  content: {
    fontSize: 13,
    margin: 10,
    marginBottom: 15,
    textAlign: 'center'
  },
  container: {
    position: 'absolute',
    width: Settings.box.width,
    height: Settings.box.height,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 0,
    flex: 1
  }
});