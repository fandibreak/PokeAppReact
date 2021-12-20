import React from "react";
import { shallow } from "enzyme";
import Pokev1 from "./Pokev1";

describe("Pokev1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokev1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
