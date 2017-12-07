import { Platform } from 'react-native';

export default {
  darkPrimary: '#0077B5',
  accent: '#3bcd5a',
  primaryText: '#212121',
  secondaryText: '#757575',
  divider: '#BDBDBD',
  // status colors
  info: '#0288D1',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',

  graySecondaryText: '#9297a2',

  // additional
  white: 'rgba(255, 255, 255, 1)', // rgba becouse using for animation values
  black: '#000000',
  gray: '#9297a2',
  grayChevron: '#a8b3bb',
  blue: '#0076ff',
  lightGray: '#c7c7cc',
  lightestGray: '#f7f7f8',
  lightShadow: 'rgba(0, 0, 0, 0.05)',
  shadow: 'rgba(0, 0, 0, 0.25)',
  darkShadow: 'rgba(0, 0, 0, 0.4)',
  border: '#e6e6e6',

  backgroundColor: '#ffffff', // '#E9E9EF',
  innactiveTabLabel: '#9297a2',
  transparent: 'transparent',

  // motipio
  linkedin: '#0077B5',
  link: '#2196F3',
  royalBlue: '#007aff',
  prim: '#DFE0E1',
  raven: '#707882',
  athensGray: '#F3F4F7',
  ghost: '#BABAC1',
  torchRed: '#F50013',
  headerBackgroundColor: Platform.OS === 'ios'
    ? 'rgba(247, 247, 249, 1)'
    : 'rgba(255, 255, 255, 1)',

  headerBackgroundColorDefault: '#f7f7f8',
  headerBorderBottom: '#e6e6e6',
  searchBackgroundColor: '#f2f2f2',
  blueButton: '#0076ff',
  screenBackground: '#ffffff', // '#f7f7f8',

  // chat
  bubbleBlue: '#0084ff',
  bubbleLight: '#f0f0f0',
  bubbleError: '#f4dce1',
  canceledText: '#f9355b',
  canceledBubble: '#f4dce1',
  acceptedText: '#3bcd5a',
  acceptedBubble: '#dcf3e1',
  sectionHeader: '#f8f8f8',
  inputBackgroundColor: '#fafafa',
  voiceRecord: '#f9355c',
  voiceMessage: '#f1f1f1',
};
