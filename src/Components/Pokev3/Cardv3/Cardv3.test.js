import React from "react";
import { shallow } from "enzyme";
import Cardv3 from "./Cardv3";

describe("Cardv3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardv3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
