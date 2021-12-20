import React from "react";
import { shallow } from "enzyme";
import Pokev3 from "./Pokev3";

describe("Pokev3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokev3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
