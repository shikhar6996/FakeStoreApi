import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveSize} from '../../../shared/Responsive/Dimension';
import {styles} from './styles';
const ProductFullViewScreen = ({route, price, title, image}) => {
  const data = route.params.paramKey;
  console.log(data, '====>');
  const navigation = useNavigation();
  // console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Ionicons
        style={styles.goBackicon}
        name="ios-chevron-back-circle-outline"
        size={responsiveSize(40)}
        color="black"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: data.image}}>
        <View style={styles.imageBackgroundIconsView}>
          <AntDesign
            name="star"
            color={'#FF9800'}
            size={responsiveSize(16)}
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>{data.rating.rate}</Text>
          <AntDesign
            name="heart"
            color={'#FD4A11'}
            size={responsiveSize(16)}
            style={styles.heartIcon}
          />
          <Text style={styles.countText}>{data.rating.count}</Text>
        </View>
      </ImageBackground>
      <View style={styles.imageTitleView}>
        <Text style={styles.imageTitle}>{data.title} </Text>
        <Text style={styles.priceText}>{`SAR ${data.price}`}</Text>
      </View>
      <View style={styles.descView}>
        <Text style={styles.desc}>Description</Text>
        <ScrollView bounces={false}>
          <Text style={styles.paragraph}>{data.description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductFullViewScreen;
