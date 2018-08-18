import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
});

export { Header };
