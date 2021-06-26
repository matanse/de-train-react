/** @format */

import { render } from "@testing-library/react-native";
import History from 'history';
import React from 'react';
import DetailsScreen from "../../src/screens/DetailsScreen";

const mockedPromise = new Promise(function(resolve, reject){ 
  let result = {data: {
    stationWithEvaId: {name: "name", history: {}, picture: {url: "https://"}},
  }}
  resolve(result)
});

let history = History

describe("Test details screen", () => {
  it("should have station details when valid id is given", async () => {
    const mockedStationById = jest.fn(()=>mockedPromise)
    jest.mock('../../src/deutscheBahn', (()=>{ return mockedStationById}))
    const component = render((<DetailsScreen history={history} id={1234}/>));
    
    // expect(mockedStationById).toBeCalled();
    expect(mockedStationById.mock.calls.length).toBe(1);
  });
});

/**
 * should have station details when valid id passed in
 * should show activityIdicator till fetch data is done
 * should change isLoading when fetch data is done
 * should show StationDetails after isLoading changed to false
 */
