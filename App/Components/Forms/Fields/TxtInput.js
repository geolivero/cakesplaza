'user strict';

import React from 'react-native';
import DEFCSS from './../../../Styles/Default';
import Helpers from './../../../Helpers';
import Settings from './../../../../Settings';
import { Icon, } from 'react-native-icons';

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
    this.setState({
      txt: this.props.value || ''
    });
  }

  onChange() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  validated() {
    var ok = false;
    switch(this.props.type) {
      case 'email-address':
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        ok = re.test(this.state.txt);
        break;
    }

    return ok;
  }

  getMessage() {

    if (this.state.txt.length > 0 && this.validated()) {

      return (
        <View style={styles.feedback}>
          <Icon
            name='fontawesome|check'
            size={16}
            color={Settings.colors.green}
            style={[styles.icon]} />
        </View>
      );
    } else {
      return (
        <View style={styles.feedback}>
          <Icon
            name='fontawesome|exclamation-triangle'
            size={16}
            color={Settings.colors.darkPink}
            style={[styles.icon]} />
        </View>
      );
    }
  }

  render() {
    return(
      <View style={styles.row}>
      <TextInput
        style={[styles.field, DEFCSS.sans]}
        onChangeText={(text) => {
          this.setState({ txt: text.toLowerCase() });
          this.onChange();
        }}
        onBlur={(e) => {
          var ev = e;
          e.text = this.state.txt;
          e.validated = this.validated();
          this.props.onBlur(e);
        }}
        placeholder={this.props.placeholder}
        keyboardType={this.props.type}
        value={this.state.txt} />

      {this.getMessage()}
      </View>
      
    );
  }
}

var styles = StyleSheet.create({
  feedback: {

  },
  row: {
    position: 'relative',
    backgroundColor: Settings.colors.lightPink,
    flexDirection: 'row',
    marginBottom: 10
  },
  icon: {
    width: 30,
    height: 30,
    flex: 0.2,
    margin: 5,
    borderRadius: 15,
    backgroundColor: Settings.colors.white
  },
  field: {
    height: 50,
    flex: 0.8,
    margin: 5,
    padding: 5
  }
});