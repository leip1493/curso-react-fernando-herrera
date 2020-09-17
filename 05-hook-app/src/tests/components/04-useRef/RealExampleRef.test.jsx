import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("<RealExampleRef />", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("Debe renderizarse correctamente", () => {

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("Debe renderizar <MultipleCustomHooks /> al hacer click en Show/Hide", () => {
    
    wrapper.find("button").simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
