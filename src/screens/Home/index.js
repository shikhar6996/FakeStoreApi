import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import React from 'react';
import Header from './../../components/header/Header';
import CatergoryList from '../../components/header/categories/CatergoryHeader';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveSize} from '../../shared/Responsive/Dimension';

const HomeScreen = ({props, navigation, route}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // const [ActivityIn, SetActivityIn] = useState(<ActivityIndicator />);

  useEffect(() => {
    try {
      fetchApiData();
    } catch (error) {
      console.log(error, 'Sorry  Could Not Fetch Data From Filtered API');
    }
  }, []);
  // fetching the filterd data from api
  const fetchApiData = async category => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const apiFilteredData = await response.json();
    setProducts(apiFilteredData);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error, 'Sorry  Could Not Fetch Data From The API');
    }
  }, []);
  // fetching the data from API
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const apiData = await response.json();
    setProducts(apiData);
    setLoading(false);
    console.log(apiData);
  };

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  const Item = ({
    item,
    onPress,
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    rate,
    count,
  }) => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductFullViewScreen', {paramKey: item});
        }}
        style={styles.productItemView}>
        <ImageBackground
          source={{uri: item.image}}
          style={styles.img}
          resizeMode="contain">
          <View style={styles.imageBackgroundIconsView}>
            <AntDesign
              name="star"
              color={'#FF9800'}
              size={responsiveSize(15)}
              style={styles.starIcon}
            />
            <Text style={styles.ratingText}>{item.rating.rate}</Text>
            <AntDesign
              name="heart"
              color={'#FD4A11'}
              size={responsiveSize(15)}
              style={styles.heartIcon}
            />
            <Text style={styles.countText}>{item.rating.count}</Text>
          </View>
        </ImageBackground>

        <View style={styles.priceTitleView}>
          <Text style={styles.titleText} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.priceText}>{`SAR ${item.price}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Header />
      <CatergoryList
        setLoading={setLoading}
        fetchApiData={fetchApiData}
        fetchData={fetchData}
      />
      <View style={styles.allProductsTextView}>
        <Text style={styles.allProductsText}>All Products</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.allProductsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
