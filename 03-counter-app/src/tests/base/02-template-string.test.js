import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Luis", () => {
    
    const nombre = "Luis";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test('getSaludo debe retornar Hola Enrique, sino se pasa argumento nombre', () => {
    
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Enrique`);
  })
  
});
