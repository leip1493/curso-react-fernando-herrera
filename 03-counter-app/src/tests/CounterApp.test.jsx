import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  test("Debe mostrar <CounterApp /> correctamente ", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar mostrar el valor por defecto de 100 ", () => {
    const initialCounter = 100;

    const wrapper = shallow(
      <CounterApp value={initialCounter}/>
    );

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(initialCounter.toString());
  });
});
