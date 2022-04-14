import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const screenWidth = width < height ? width : height;

export const responsiveSize = size => {
  const responsiveValue = screenWidth / 375;
  return responsiveValue * size;
};
