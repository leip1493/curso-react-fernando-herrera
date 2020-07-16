import { getGifs } from "../../helpers/getGifs";

describe("Pruebas de helper getGifs", () => {
  test("Debe devolver 10 elementos", async () => {
    const category = "Naruto";

    const gifs = await getGifs(category);

    expect(gifs.length).toBe(10);
  });

  test("Si no se pasa la categoría debe retornar un array vacio", async () => {
    const gifs = await getGifs("");
    
    expect(gifs.length).toBe(0);
  });
});
