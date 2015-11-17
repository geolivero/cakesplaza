'user strict';

import React from 'react-native';
import DEFCSS from './../../Styles/Default';
import Helpers from './../../Helpers';
import Settings from './../../../Settings';
import { Icon, } from 'react-native-icons';
import TxtInput from './../Forms/Fields/TxtInput';
import Messages from './../Widgets/Message';


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


export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shiftUp: new Animated.Value(Settings.box.height),
      text: '',
      emailText: ''
    };
  }

  componentDidMount() {
    Animated.timing( 
      this.state.shiftUp,
      {
        toValue: 0
      },
    ).start();

    Helpers.getToken((csrf) => {
      console.log(csrf);
    });
  }


  next() {
    this.setState({
      showMessage: true
    });
  }

  onBack() {
    Animated.timing( 
      this.state.shiftUp,
      {
        toValue: Settings.box.height
      },
    ).start(() => {
      this.props.onUserClose();
    });
  }

  onOk() {
    this.props.model.set({
      mail: this.state.emailText
    });

    this.setState({
      showMessage: false
    });
  }

  render() {
    return(
      <View style={[styles.wrapper]}>
        <Animated.View style={[
          styles.container,
            {
              transform: [{
                translateY: this.state.shiftUp
              }]
            }
          ]}>
          <View style={styles.arrowBtnBack}>
            <TouchableOpacity onPress={() => { this.onBack() }}>
              <Icon
                name='fontawesome|angle-left'
                size={22}
                color={Settings.colors.darkBrown}
                style={[styles.buttons]} />
            </TouchableOpacity>
          </View>
          <Text style={[ DEFCSS.sansc, styles.title ]}>JOUW EMAIL ADRES</Text>
          <Text style={[ DEFCSS.sansc, styles.title, styles.subTitle ]}>Begin met jouw bakkers account</Text>
          <TxtInput
            type={'email-address'}
            onBlur={(e)=> { 
              this.setState({ 
                emailText: e.text,
                validated: e.validated
              });
            }}
            value={this.props.model.get('mail')}
            placeholder={'Vul je email adres'}/>

          <TouchableOpacity onPress={() => { this.next(); }}>
            <View style={[styles.largeBtn]}>
              <Text style={[ DEFCSS.sansc, styles.largeBtnTxt ]}>{'VOLGENDE'}</Text>
              <Icon
                name='fontawesome|angle-right'
                size={22}
                color={Settings.colors.white}
                style={[styles.buttons]} />
            </View>
          </TouchableOpacity>

        </Animated.View>
        {()=> {
          if (this.state.showMessage) {
            return(
              <Messages 
                onOk={ ()=> this.onOk() }
                onCancel={ ()=> this.onOk() }
                MessageContent={this.state.validated ? this.state.emailText : 'Email adres niet correct, corrigeer dit eerst voordat je verder kan gaan.' }
                MessageHeader={this.state.validated ? 'Is jouw email correct?': 'Sorry!'}/>
            );
          }
        }()}
      </View>

    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  largeBtn: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: Settings.box.width / 2,
    alignItems: 'center',
    backgroundColor: Settings.colors.darkPink
  },
  largeBtnTxt: {
    color: Settings.colors.white,
    textAlign: 'center',
    fontSize: 20
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 10
  },
  field: {
    backgroundColor: Settings.colors.lightPink,
    height: 50,
    margin: 5,
    padding: 5
  },
  arrowBtnBack: {
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
    position: 'absolute',
    left: 0,
    top: 100,
    height: Settings.box.height - 100,
    right: 0
  }
});