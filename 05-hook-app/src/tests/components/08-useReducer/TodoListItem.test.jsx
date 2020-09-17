import { shallow } from "enzyme";
import React from "react";
import { todos } from "../../fixtures/todos";
const {
  TodoListItem,
} = require("../../../components/08-useReducer/TodoListItem");

describe("<TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={todos[0]}
      index={0}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );
  test("Debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar la funcion handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(todos[0].id);
  });

  test("Debe llamar la funcion handleToggle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(todos[0].id);
  });

  test("Debe mostrar el texto correctamente", () => {
    const p = wrapper.find("p");
    console.log(p.text());
    expect(p.text().trim()).toBe(`${0 + 1}. ${todos[0].description}`);
  });

  test("Debe tener la clase complete si TODO.done == true", () => {
    const todo = todos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find("p").hasClass("complete")).toBeTruthy()
  });
});
