import {StyleSheet} from 'react-native';
import {responsiveSize} from '../../shared/Responsive/Dimension';

export const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  allProductsTextView: {
    backgroundColor: '#fff',
    marginHorizontal: responsiveSize(10),
    marginVertical: responsiveSize(10),
  },
  allProductsText: {
    fontFamily: 'Avenir',
    fontWeight: '600',
    fontSize: responsiveSize(20),
  },
  allProductsContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: responsiveSize(14),
  },
  productItemView: {
    flex: 1,
    marginHorizontal: responsiveSize(5),
    marginBottom: responsiveSize(12),
    borderRadius: responsiveSize(15),
  },
  titleText: {
    fontFamily: 'Avenir',
    fontSize: responsiveSize(15),
    fontWeight: 'bold',
  },
  priceText: {
    fontFamily: 'Avenir',
    fontSize: responsiveSize(15),
    color: '#06B07D',
    fontWeight: '800',
  },
  img: {
    height: responsiveSize(100),
    width: responsiveSize(160),
  },
  priceTitleView: {justifyContent: 'flex-start'},
  ratingText: {fontSize: responsiveSize(13), right: responsiveSize(20)},
  countText: {fontSize: responsiveSize(13)},
  heartIcon: {left: responsiveSize(18)},
  imageBackgroundIconsView: {
    marginTop: responsiveSize(6),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
