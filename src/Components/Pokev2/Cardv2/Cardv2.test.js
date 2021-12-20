import React from "react";
import { shallow } from "enzyme";
import Cardv2 from "./Cardv2";

describe("Cardv2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardv2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
