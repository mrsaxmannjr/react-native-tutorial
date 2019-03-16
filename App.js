import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Container, Content } from 'native-base';

import Head from './ui/Head';
import Values from './ui/Values';

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
    height: '100%',
    width: '100%'
  },
  customTip: {
    color: '#FFF',
    height: 40,
    padding: 5,
    width: 60
  },
  input: {
    color: '#FFF',
    height: 40,
    padding: 5,
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: '',
      isReady: false,
      tipPercent: 0.2
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({ isReady: true });
  }

  updateCustomTip = (customTipPercent) => {
    if (customTipPercent) {
      this.setState({ tipPercent: parseFloat(customTipPercent) / 100 });
    } else {
      this.setState({ tipPercent: 0 });
    }
  }

  updateBill = amount => this.setState({ bill: amount })

  updateTipPercent = percent => this.setState({ tipPercent: percent })

  render() {
    const {
      bill, isReady, tipPercent
    } = this.state;

    const {
      buttonGroup, container, customTip, input, inputs
    } = styles;

    if (!isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Head />
        <View style={ container }>
          <Content style={ { width: '100%' } }>
            <Values
              bill={ bill }
              tipPercent={ tipPercent }
            />
            <View style={ inputs }>
              <TextInput
                keyboardType="numeric"
                onChangeText={ amount => this.updateBill(amount) }
                placeholder="0.00"
                placeholderTextColor="#FFF"
                style={ input }
                underlineColorAndroid="#FFF"
                value={ bill }
              />
              <View style={ buttonGroup }>
                <Button
                  onPress={ () => this.updateTipPercent(0.1) }
                  title="10%"
                />
                <Button
                  onPress={ () => this.updateTipPercent(0.2) }
                  title="20%"
                />
                <Button
                  onPress={ () => this.updateTipPercent(0.25) }
                  title="25%"
                />
                <TextInput
                  keyboardType="numeric"
                  onChangeText={
                    customTipPercent => this.updateCustomTip(customTipPercent)
                  }
                  placeholder="20%"
                  placeholderTextColor="#FFF"
                  style={ customTip }
                  underlineColorAndroid="#FFF"
                  value={ (tipPercent * 100).toString() }
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

export default App;
