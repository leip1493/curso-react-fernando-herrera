import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem />", () => {
  test("Debe renderizar correctamente", () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
