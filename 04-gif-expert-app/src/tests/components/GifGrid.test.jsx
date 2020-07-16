import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs"); // 1 - Falsea el llamado de la función

describe("<GifGrid />", () => {
  const category = "Naruto";

  test("Debe renderizar exitosamente", () => {
    // Estado al primer renderizado del componente
    useFetchGifs.mockReturnValue({
      // 2 - Falsea el contenido de respuesta de el custom hook/funcion
      gifs: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando cargan los gifs useFetchGifs", () => {
    const gifs = [
      {
        id: 1,
        url: "https://localhost/imagen.jpg",
        title: "lorem ipsum"
      }
    ];
    // Estado luego del primer renderizado
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);
    
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    // Valida que exista tantos GifGridItem como gifs consultados existan
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);

  });
});
