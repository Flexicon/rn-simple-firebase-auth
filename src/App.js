import React, { Component } from 'react';
import { StyleSheet, Platform, NativeModules, View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, CardSection, Button, Spinner } from './Components/Shared';
import LoginForm from './Components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  state = {
    hasHardwareButtons: true,
    loggedIn: null
  };

  componentWillMount() {
    if (!firebase.default.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyC60WqQ4--opOsdjnb9b02dUVlvwuCc36U',
        authDomain: 'simple-auth-8cdc0.firebaseapp.com',
        databaseURL: 'https://simple-auth-8cdc0.firebaseio.com',
        projectId: 'simple-auth-8cdc0',
        storageBucket: 'simple-auth-8cdc0.appspot.com',
        messagingSenderId: '22411124291'
      });
    }

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });

    if (Platform.OS === 'android') {
      NativeModules.DetectHardware.hasHardwareButtons(result => {
        this.setState({ hasHardwareButtons: result });
      });
    }
  }

  signOut = () => {
    firebase.auth().signOut();
  };

  renderContent = () => {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case null:
        return <Spinner />;
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={this.signOut} text={'Logout'} />
            </CardSection>
          </Card>
        );
      case false:
      default:
        return <LoginForm />;
    }
  };

  render() {
    const { hasHardwareButtons } = this.state;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#EEE',
        paddingBottom: Platform.OS === 'android' && !hasHardwareButtons ? 50 : 0
      }
    });

    return (
      <View style={styles.container}>
        <Header text={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}
