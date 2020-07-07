import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en archivo 08-imp-exp.js", () => {

  test("Debe devolver el heroe por id", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find(heroe => heroe.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe devolver undefined si el id no coincide", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un array con todos los heroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter(heroe => heroe.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Debe retornar la cantidad de heroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
