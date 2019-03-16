import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  label: { color: '#FFF' },
  tipStyle: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold'
  },
  totalStyle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
  values: {
    alignItems: 'center',
    backgroundColor: '#484848',
    padding: 20,
    width: '100%'
  }
});

const Values = ({
  bill, tipPercent
}) => {
  let tip = 0.00;
  let total = 0.00;
  if (bill) {
    tip = parseFloat(bill) * tipPercent;
    total = parseFloat(bill) + tip;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
  }

  const {
    label, tipStyle, totalStyle, values
  } = styles;

  return (
    <View style={ values }>
      <Text style={ label }>
        Tip Amount
      </Text>
      <Text style={ tipStyle }>
        { `$${tip}` }
      </Text>
      <Text style={ label }>
        Total Bill
      </Text>
      <Text style={ totalStyle }>
        { `$${total}` }
      </Text>
    </View>
  );
};

Values.propTypes = {
  bill: PropTypes.string.isRequired,
  tipPercent: PropTypes.number.isRequired
};

export default Values;
