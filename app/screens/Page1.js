import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

class Page1 extends Component {
  state = {
    edgeLength: 10,
  }

  grow = () => this.setState({ edgeLength: this.state.edgeLength * 2 });

  render() {
    const { edgeLength } = this.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.grow}>
          <View style={{ height: edgeLength, width: edgeLength, backgroundColor: 'blue' }}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Page1;