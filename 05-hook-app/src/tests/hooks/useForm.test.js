const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

test("Pruebas de useForm", () => {
  const initialForm = {
    name: "Luis",
    email: "leip1493@gmail.com",
  };

  describe("Debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [formValues, handleInputChange, reset] = result.current;

    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
    expect(formValues).toEqual(initialForm);
  });

  describe("Debe cambiar valor del name", () => {
    const newName = "Enrique";

    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    act(() => {// Aqui es donde se ejecutan los metodos que devuelve el hook
      handleInputChange({
        target: {
          name: "name",
          value: newName,
        },
      });
    });

    const [formValues] = result.current;// Se obtienen los states actualizados 

    expect(formValues).toEqual({
      ...initialForm,
      name: newName,
    });
  });

  describe("Debe re-establecer el formulario con RESET", () => {
    const newName = "Enrique";

    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: newName,
        },
      });
      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
