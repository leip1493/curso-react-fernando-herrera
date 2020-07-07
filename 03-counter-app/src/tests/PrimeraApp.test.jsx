import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';
describe('Pruebas en <PrimeraApp />', () => {
  
  // test('debe mostrar el mensaje "Hola Mundo"', () => {
  //   const saludo = "Hola Mundo";

  //   const { getByText} = render(<PrimeraApp saludo={saludo}/>);

  //   expect( getByText(saludo) ).toBeInTheDocument();
  // })
  
  test('debe mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = "Hola Mundo"

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    

  });
  

})
