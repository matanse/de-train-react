/** @format */

import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { History } from 'history';

interface Station {
  primaryEvaId: number;
  name: string;
}

interface Props {
    history: History;
    takeStationId: Function;
    stations: Station[]
}

const SearchContent = ({stations, history, takeStationId}:Props) => {

  return (
    <FlatList
      style={styles.stationsView}
      keyExtractor={(item, index) => `${index}`}
      data={stations}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={styles.stationButton}>
            <Button
              color="gray"
              title={item.name}
              onPress={() => {
                takeStationId(item.primaryEvaId);
                history.push("/details");
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  )
}
    

const styles = StyleSheet.create({
  stationButton: {
    width: "90%",
    marginBottom: 10,
    marginHorizontal: "4%",
  },
  stationsView: {
    flex: 1,
  },
});

export default SearchContent;
