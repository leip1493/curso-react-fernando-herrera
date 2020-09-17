import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

// Se reemplaza el elemento por un mock
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("<MultipleCustomHooks />", () => {

  // Se mockea data de retorno del useCounter
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("Debe renderizarse correctamente", () => {
    // Se mockea data de retorno del useFetch
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Luis", quote: "Hola mundo" }],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Luis");
  });
});
