import {StatusBar, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {responsiveSize} from '../../shared/Responsive/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.text}>Secondhand</Text>
        <Ionicons
          name="ios-search-circle-outline"
          size={responsiveSize(40)}
          color="black"
          style={styles.searchIcon}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: responsiveSize(10),
  },
  text: {
    fontSize: responsiveSize(35),
    fontWeight: 'bold',
  },
});
