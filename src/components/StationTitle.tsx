/** @format */

import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

interface Props {
  stationName: string
}

const StationTitle = ({stationName}: Props) => {

  return (
    <View style={styles.titleView}>
        <Text style={styles.title}>{stationName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  }
})

export default StationTitle
