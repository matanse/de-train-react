/** @format */

import {render} from "@testing-library/react-native";
import React from "react";
import StationTitle from "../../src/components/StationTitle";

describe("station title element", () => {
  it("should add the title to the top of the page", () => {
    const title = "station name";
    const style = {fontSize: 18};
    const {getByText} = render(<StationTitle stationName={title} />);
    const titleElement = getByText(title);

    expect(titleElement.props.style).toEqual(style);
    expect(titleElement.props.children).toBe(title);
  });
});
