import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {responsiveSize} from '../../../shared/Responsive/Dimension';

const DATA = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'jewelery',
  },
  {
    id: '2',
    title: 'electronics',
  },
  {
    id: '3',
    title: "men's clothing",
  },
  {
    id: '4',
    title: "women's clothing",
  },
];

const CatergoryList = ({fetchApiData, fetchData, setLoading}) => {
  const [isloading, setloading] = useState(true);
  const [selectedId, setSelectedId] = useState('0');

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setLoading(true);
        item.title === 'All' ? fetchData() : fetchApiData(item.title);
      }}
      style={[styles.item]}>
      <View style={[styles.textView, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#131D37' : '#fff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: responsiveSize(8),
  },
  title: {
    fontSize: responsiveSize(15),
    padding: responsiveSize(14),
  },
  textView: {
    borderWidth: responsiveSize(1),
    margin: responsiveSize(3),
    borderRadius: responsiveSize(29),
    borderColor: '#E5E5E5',
  },
});

export default CatergoryList;
