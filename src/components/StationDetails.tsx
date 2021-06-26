/** @format */

import { History } from 'history';
import React from "react";
import {
  Button, View
} from "react-native";
import StationPicture from './StationPicture';
import StationTitle from './StationTitle';

interface Props {
  stationName: string
  history: History
  pictureUrl: string
}

const StationDetails = ({pictureUrl, stationName, history}: Props) => {

  return (
    <View>
        <StationTitle stationName={stationName}/>
        <StationPicture pictureUrl={pictureUrl}/>
        <Button title='Back' onPress={() => {
          history.push("/")
        }} />
    </View>
  );
}

export default StationDetails
