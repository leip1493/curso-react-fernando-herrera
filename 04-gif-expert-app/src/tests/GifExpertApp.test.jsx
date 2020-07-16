import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("<GifExpertApp />", () => {
  test("Debe renderizar exitosamente ", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categorias de gifs ", () => {
    const categories = ["DBZ", "ONE PIECE"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
