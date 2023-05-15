// PriceTable.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PriceRow from './PriceRow';

const PriceTable = ({ prices, currentPage }) => {
  const pricesArray = Object.keys(prices);

  const currentPrices = pricesArray.slice(currentPage * 10, (currentPage + 1) * 10);

  return (
    <FlatList
      style={styles.container}
      data={currentPrices}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <PriceRow currency={item} price={prices[item]} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PriceTable;
