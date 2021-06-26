/** @format */

import {render} from "@testing-library/react-native";
import React from "react";
import StationPicture from "../../src/components/StationPicture";

describe("station picture element", () => {
  it("should get station picture when a valid URL is passed", () => {
    const validUrl = "https://api.railway-stations.org/photos/de/52.jpg";
    const style = {
      borderRadius: 10,
      height: 300,
      width: 300,
    };
    const {getByTestId} = render(<StationPicture pictureUrl={validUrl} />);
    const image = getByTestId("image");

    expect(image.props.style).toEqual(style);
    expect(image.props.source.uri).toBe(validUrl);
  });
});

/* todo test list
- should get a list of stations 
- should show a list of stations
- should search stations by name by clicking the search button
- should show the search bar and button
- should change text value as it is entered
- should switch screens from homeSearch to details when a station is clicked
- should pass an id number
- ---- should show a picture when url is valid
- should show a title with the station name
- 
 */
