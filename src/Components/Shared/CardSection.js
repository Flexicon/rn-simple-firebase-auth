import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSection };
