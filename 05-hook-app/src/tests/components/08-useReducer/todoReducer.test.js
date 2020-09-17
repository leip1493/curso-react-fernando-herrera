const {
  todoReducer,
} = require("../../../components/08-useReducer/todoReducer");
const { todos } = require("../../fixtures/todos");

describe("Pruebas en todoReducer", () => {
  test("Debe retornar el estado por defecto ", () => {
    const state = todoReducer(todos, {});

    expect(state).toEqual(todos);
  });

  test("Debe agregar un TODO", () => {
    const todo = {
      id: 3,
      desc: "Aprender React Native",
      done: false,
    };

    const state = todoReducer(todos, { type: "add", payload: todo });

    expect(state.length).toEqual(todos.length + 1);
    expect(state).toEqual([...todos, todo]);
  });

  test("Debe eliminar un TODO", () => {
    const todo = todos[0];

    const state = todoReducer(todos, { type: "delete", payload: todo.id });

    expect(state.length).toEqual(todos.length - 1);
    expect(state).toEqual(todos.filter((x) => x.id !== todo.id));
  });

  test("Debe hacer el toggle del TODO", () => {
    const todo = todos[1];

    const state = todoReducer(todos, { type: "toggle", payload: todo.id });

    expect(state.length).toBe(todos.length);
    expect(state.find((x) => x.id === todo.id).done).toBe(!todo.done);    
  });
});
