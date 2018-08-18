import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './Shared';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailure);
      });
  };

  onLoginFailure = () => {
    this.setState({ error: 'Authentication failed', loading: false });
  };

  onLoginSuccess = () => {
    this.setState({
      loading: false,
      error: '',
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'user@gmail.com'}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={'password'}
            secureTextEntry
          />
        </CardSection>

        {!!this.state.error && (
          <CardSection>
            <Text style={styles.errorText}>{this.state.error}</Text>
          </CardSection>
        )}

        <CardSection>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Button onPress={this.onButtonPress} text={'Log in'} />
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
