import * as React from 'react';
import { View, Image, ScrollView, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';

class Shop extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.fullSize}>
        <View style={styles.page.header}>
          <Text style={styles.page.headerText}>Shop</Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        </ScrollView>
      </View>
    );
  }
}

export default Shop;