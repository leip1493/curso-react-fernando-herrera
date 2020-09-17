import { shallow } from "enzyme";
import React from "react";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { todos } from "../../fixtures/todos";

describe("<TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={todos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("debe renderizar correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener <TodoListItem /> igual a la cantidad de todos", () => {
    const todoListItem = wrapper.find("TodoListItem");
    
    expect(todoListItem.length).toBe(todos.length);

    expect(todoListItem.at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
    expect(todoListItem.at(0).prop("handleToggle")).toEqual(
      expect.any(Function)
    );
  });
});
