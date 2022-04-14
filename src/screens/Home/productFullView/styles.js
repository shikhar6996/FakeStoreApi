import {StyleSheet} from 'react-native';
import {responsiveSize} from '../../../shared/Responsive/Dimension';
export const styles = StyleSheet.create({
  imageTitleView: {
    margin: responsiveSize(20),
  },
  imageTitle: {
    margin: responsiveSize(5),
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: responsiveSize(22),
  },
  priceText: {
    margin: responsiveSize(5),
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: responsiveSize(30),
    color: '#6D4FB8',
  },
  desc: {
    margin: responsiveSize(5),
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: responsiveSize(20),
    textAlign: 'left',
  },
  paragraph: {
    height: responsiveSize(200),
    margin: responsiveSize(5),
  },
  goBackicon: {
    marginHorizontal: responsiveSize(10),
    zIndex: 2,
  },
  descView: {
    margin: responsiveSize(10),
    justifyContent: 'flex-start',
  },
  container: {flex: 1, backgroundColor: '#fff'},
  imageBackground: {height: responsiveSize(300), width: responsiveSize(400)},
  imageBackgroundIconsView: {
    marginTop: responsiveSize(275),

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontSize: responsiveSize(15),
    right: responsiveSize(85),
  },
  countText: {fontSize: responsiveSize(15), right: responsiveSize(40)},
  heartIcon: {left: responsiveSize(65)},
  starIcon: {left: responsiveSize(20)},
});
