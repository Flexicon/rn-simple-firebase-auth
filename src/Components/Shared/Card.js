import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    margin: 10
  }
});

export { Card };