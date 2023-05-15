// src/components/Pagination.js

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Pagination = ({ currentPage, totalPages, handlePrevious, handleNext }) => {
  return (
    <View style={styles.pageNav}>
      <Button onPress={handlePrevious} title="Anterior" disabled={currentPage === 0} />
      <Text>Página {currentPage + 1} de {totalPages}</Text>
      <Button onPress={handleNext} title="Siguiente" disabled={currentPage >= totalPages - 1} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default Pagination;
