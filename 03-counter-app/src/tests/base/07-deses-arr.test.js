import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en archivo 07-deses-arr.js", () => {
  test("Debe retornar un array con string y un número", () => {
    
    const testArr = ['ABC', 123];

    const [letras, numeros] = retornaArreglo();

    expect([letras, numeros]).toEqual(testArr);

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
    
  });
});
