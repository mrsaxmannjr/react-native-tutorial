import React, { Component } from 'react';
import { Body, Header, Left, Right, Title } from 'native-base';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({ header: { ...Platform.select({ android: { marginTop: StatusBar.currentHeight } }) } });

export default class Head extends Component {
  render() {
    return (
      <View style={ styles.header }>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
