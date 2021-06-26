/** @format */

import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import DetailsScreen from "./src/screens/DetailsScreen";
import HomeSearchScreen from "./src/screens/HomeSearchScreen";
import { NativeRouter, Route, Switch } from "react-router-native";

const App = () => {
  let stationId = 0

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path='/' render={(props) => <HomeSearchScreen history={props.history} takeStationId={(id: number) => {
            stationId = id
          }} />} />
          <Route exact path='/details' render={(props) => <DetailsScreen history={props.history} id={stationId}/>}/>
        </Switch>
      </View>
  </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "13%",
    justifyContent: 'center'
  },
});
export default App;
