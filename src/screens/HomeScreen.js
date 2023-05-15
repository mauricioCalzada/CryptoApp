// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useWebSocket from '../utils/websocket';
import SearchBar from '../components/SearchBar';
import PriceTable from '../components/PriceTable';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const prices = useWebSocket('wss://wssx.gntapi.com:443');
  const filteredPrices = Object.keys(prices)
    .filter(key => key.includes(search))
    .reduce((obj, key) => {
      obj[key] = prices[key];
      return obj;
    }, {});

  const totalPages = Math.ceil(Object.keys(filteredPrices).length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChange={setSearch} />
      <PriceTable prices={filteredPrices} currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
