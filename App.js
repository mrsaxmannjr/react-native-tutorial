import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Container, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Head from './ui/Head';
// import Hello from './Hello';

const styles = StyleSheet.create({
  buttonGroup: { flexDirection: 'row' },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  customTip: {
    borderWidth: 1,
    borderColor: '#333',
    height: 30,
    padding: 5,
    width: 60
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    height: 40,
    padding: 5,
    width: '100%'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isReady: false,
      tipPercent: 0.2
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });

    this.setState({ isReady: true });
  }

  alert = () => {
    Alert.alert(
      'ALERT MOFOOOOO',
      'This is the alert message MOFOOOO',
      [{
        text: 'OK Mofo',
        onPress: () => console.log('hit ok')
      },
      {
        text: 'Cancel Mofo',
        onPress: () => console.log('hit cancel'),
        style: 'cancel'
      }]
    );
  }

  updateCustomTip = (customTipPercent) => {
    // if (Platform.OS === 'android') {

    // }
    // if (Platform.OS === 'ios') {

    // }

    if (customTipPercent) {
      this.setState({ tipPercent: parseFloat(customTipPercent) / 100 });
    } else {
      this.setState({ tipPercent: 0 });
    }
  }

  updateInputValue = text => this.setState({ inputValue: text })

  updateTipPercent = percent => this.setState({ tipPercent: percent })

  render() {
    const {
      inputValue, isReady, tipPercent
    } = this.state;

    const {
      buttonGroup, container, customTip, input
    } = styles;

    let tip = 0.00;
    if (inputValue) {
      tip = parseFloat(inputValue) * tipPercent;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    if (!isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Head />
        <Content padder>
          <View style={container}>
            <Button
              onPress={this.alert}
              title="Alert"
            />
            <Text>
              {`$${tip}`}
            </Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={text => this.updateInputValue(text)}
              placeholder="0.00"
              style={input}
              value={inputValue}
            />
            <View style={buttonGroup}>
              <Button
                onPress={() => this.updateTipPercent(0.1)}
                title="10%"
              />
              <Button
                onPress={() => this.updateTipPercent(0.2)}
                title="20%"
              />
              <Button
                onPress={() => this.updateTipPercent(0.25)}
                title="25%"
              />
              <TextInput
                keyboardType="numeric"
                onChangeText={
                  customTipPercent => this.updateCustomTip(customTipPercent)
                }
                placeholder="20%"
                style={customTip}
                value={(tipPercent * 100).toString()}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default App;
