import React from "react";
import { shallow } from "enzyme";
import Pokev2 from "./Pokev2";

describe("Pokev2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokev2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
