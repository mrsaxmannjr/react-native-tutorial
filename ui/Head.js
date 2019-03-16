import React from 'react';
import { Body, Header, Left, Right, Title } from 'native-base';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({ header: { ...Platform.select({ android: { marginTop: StatusBar.currentHeight } }) } });

const Head = () => (
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

export default Head;
