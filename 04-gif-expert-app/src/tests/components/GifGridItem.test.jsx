import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem />", () => {
  const title = "Title";
  const url = "http://google.com/img.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el título", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener la imágen y la url", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = "animate__fadeIn";

    expect(div.hasClass(className)).toBeTruthy(); // usando hasClass

    expect(div.prop("className").includes(className)).toBe(true)// usando prop("className").includes()
  });
});
