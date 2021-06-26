/** @format */

import React, {useState, useEffect} from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";
import SearchByName from "./../components/SearchByName";
import { stationsByName } from "../deutscheBahn";
import SearchContent from "./../components/SearchContent"
import { History } from 'history';

interface Station {
  primaryEvaId: number;
  name: string;
}

interface Props {
  history: History;
  takeStationId: Function;
}

const HomeSearchScreen = ({takeStationId, history}:Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stations, setStations] = useState<Station[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    stationsByName(name)
      .then((result) => {
        setStations(result.data.search.stations);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <View>
      <SearchByName onSearch={(searchName) => setName(searchName)} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
      <SearchContent history={history} stations={stations} takeStationId={takeStationId}/>
      )}
    </View>
  );
};

export default HomeSearchScreen;
