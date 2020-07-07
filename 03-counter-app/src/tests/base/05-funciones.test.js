import "@testing-library/jest-dom";

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser debe retornar un objeto ", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502"
    };

    const user = getUser();    

    expect(user).toEqual(userTest); // Para comparar objetos
  });

  test("getUsuarioActivo debe retornar un objeto", () => {

    const username = "Luis";
    
    const userTest = {
      uid: "ABC567",
      username
    };

    const user = getUsuarioActivo(username);

    expect(user).toEqual(userTest);
  });
});
