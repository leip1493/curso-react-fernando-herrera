import React from "react";
import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("<AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe renderizar exitosamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el texto del input", () => {
    const input = wrapper.find("input");

    const value = "Hola mundo";

    input.simulate("change", { target: { value } });

    expect(
      wrapper
        .find("p")
        .text()
        .trim()
    ).toBe(value);
  });

  test("No debe realizar el cambio de estado onSubmit si no hay inputValue", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe llamar setCategories y limpiar la caja de texto", () => {
    const value = "Lorem ipsum";

    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: () => {} });

    expect(input.prop('value')).toBe("");
    expect(setCategories).toHaveBeenCalledTimes(1);
    // Garantiza que sea llamado con una funcion como argumento
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function));


  });
});
