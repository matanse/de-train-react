/** @format */

import React, {useState, useEffect} from "react";
import {
  ActivityIndicator,
  View,
} from "react-native";
import { stationById } from "../deutscheBahn";
import { History } from 'history'
import StationDetails from './../components/StationDetails'

interface Props {
  id: number
  history: History
}

const DetailsScreen = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [details, setDetails] = useState({name: '', picture: {url: ''}})

  useEffect(() => {
    stationById(props.id)
      .then((result) => {
        setDetails(result.data.stationWithEvaId);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [details]);
  
  return (
    <View>
      {isLoading ?
        <ActivityIndicator />
              : (
        <StationDetails stationName={details.name} pictureUrl={details.picture.url} history={props.history}/>
        )
      }
    </View>
  );
}

export default DetailsScreen
