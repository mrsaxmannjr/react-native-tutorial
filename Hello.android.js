import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={ styles.hello }> Hello from Hello ANdroid</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#FFFF00',
    fontSize: 24
  }
});
