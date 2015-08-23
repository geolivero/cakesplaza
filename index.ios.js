'use strict';


var React = require('react-native');
var Home = require('./App/Components/Home');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;
var styles = StyleSheet.create({
  navContainer: {
    flex: 1
  }
});


var CP = React.createClass({
  render: function () {
    return (
      <NavigatorIOS 
        initialRoute={{
          component: Home,
          title: 'home'
        }}
        navigationBarHidden={true}
        style={styles.navContainer}/>
    );
  }
});


AppRegistry.registerComponent('cakesplaza', () => CP);