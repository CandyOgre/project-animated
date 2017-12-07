import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './app/navigation';
import styles, { colors } from './app/styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.fillAll}>
      <StatusBar
        statusBarStyle="light-content"
        backgroundColor={colors.black}
      />
      <Navigator />
    </View>
    );
  }
}
