import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceRow = ({ currency, price }) => {
  const [color, setColor] = useState('black');
  const [prevPrice, setPrevPrice] = useState(null);

  useEffect(() => {
    if (prevPrice && price.bid > prevPrice.bid) {
      setColor('green');
    } else if (prevPrice && price.bid < prevPrice.bid) {
      setColor('red');
    } else if (prevPrice && price.bid == prevPrice.bid) {
      setColor('black');
    }
    setPrevPrice(price);
  }, [price]);

  return (
    <View style={styles.rowContainer}>
      <Text style={[styles.text, { color: color }]}>{currency}</Text>
      <Text style={[styles.text, { color: color }]}>Bid: {price.bid}</Text>
      <Text style={[styles.text, { color: color }]}>Ask: {price.ask}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});

export default PriceRow;
