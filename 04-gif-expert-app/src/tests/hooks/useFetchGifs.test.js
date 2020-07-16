import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas hook useFetchGifs", () => {
  const category = "Naruto";
  test("Debe retornar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { gifs, loading } = result.current;

    await waitForNextUpdate();

    expect(gifs.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test("Debe retornar array de gifs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );

    await waitForNextUpdate(); // Espera a que suceda el renderizado y ejecuta los useEffect

    const { gifs, loading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
