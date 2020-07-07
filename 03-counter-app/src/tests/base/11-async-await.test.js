import { getImagen } from "../../base/11-async-await";

describe('Pruebas de async-await', () => {
  test('Debe retornar una url de imágen random', async () => {
    
    const url = await getImagen();

    expect(typeof url).toBe("string");
    
  });

  test('Debe retornar una url de imágen random que contenga el texto http', async () => {
    
    const url = await getImagen();

    expect(url.includes('http')).toBe(true);
    
  });
  
})
