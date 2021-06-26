/** @format */

import React from "react";
import {
  Image,

  StyleSheet, View
} from "react-native";

interface Props {
  pictureUrl: string
}

const StationPicture = ({pictureUrl}: Props) => {
  return (
    <View style={styles.imageView}>
      <Image testID='image' style={styles.image} source={{uri: pictureUrl}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    marginTop: '30%'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  }
})

export default StationPicture
