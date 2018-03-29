import React from 'react';
import {AppRegistry, Component} from 'react-native';
import {Root} from 'native-base'
import {StackNavigator} from 'react-navigation';
import {Font, AppLoading} from "expo";

const Login  = require('./src/components/loginView')
const SignIn = require('./src/components/signInView')
const Home   = require('./src/components/homeView')

const AppRouter = StackNavigator({
  Login: { screen: Login },
  SignIn: { screen: SignIn },
  Home: { screen: Home },
},{
  headerMode:'none',
  initialRouteName: 'Login'
});

export default class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {loading: true};}

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
      this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <AppRouter/>
    );
  }
}

