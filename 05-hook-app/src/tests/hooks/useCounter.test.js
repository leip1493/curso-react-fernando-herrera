import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  test("debe retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);

    expect(typeof result.current.increment).toBe("function");

    expect(typeof result.current.decrement).toBe("function");

    expect(typeof result.current.reset).toBe("function");
  });

  test("debe retornar pasado como parametro", () => {
    const value = 50;

    const { result } = renderHook(() => useCounter(value));

    expect(result.current.counter).toBe(value);
  });

  test("debe incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter());

    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(11);
  });

  test("debe decrementar el counter en 1", () => {
    const value = 500;

    const { result } = renderHook(() => useCounter(value));

    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(value - 1);
  });

  test("debe resetear al valor inicial el counter", () => {
    const value = 100;

    const { result } = renderHook(() => useCounter(value));

    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      decrement();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(value);
  });
});
