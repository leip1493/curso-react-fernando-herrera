import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);// Redundante , pero habilita el intellisense :P

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test("Debe mostrar <CounterApp /> correctamente ", () => {

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar mostrar el valor por defecto de 100 ", () => {
    const initialCounter = 100;

    const wrapper = shallow(<CounterApp value={initialCounter} />);
    
    const counterText = wrapper
      .find("h2")
      .text()
      .trim();

    expect(counterText).toBe(initialCounter.toString());
  });

  test('debe incrementar el valor a 11 con el boton +1 ', () => {
  
    const incrementButton = wrapper.find('button').at(0);
    incrementButton.simulate('click', {});
    
    const counterText = wrapper
      .find("h2")
      .text()
      .trim();

    expect(counterText).toBe('11');
  })

  test('debe decrementar el valor a 9 con el boton -1 ', () => {
  
    const decrementButton = wrapper.find('button').at(2);
    decrementButton.simulate('click', {});

    const counterText = wrapper
      .find("h2")
      .text()
      .trim();

    expect(counterText).toBe('9');
  });

  test('debe resetear el valor inicial al hacer click en el boton reset', () => {
    const initialCounter = 50;

    const wrapper = shallow(<CounterApp value={initialCounter} />);

    const decrementButton = wrapper.find('button').at(2);
    decrementButton.simulate('click', {});

    const resetButton = wrapper.find('button').at(1);
    resetButton.simulate("click");

    const counterText = wrapper
      .find("h2")
      .text()
      .trim();

    expect(counterText).toBe(initialCounter.toString());
  });
  
});
