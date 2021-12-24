import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp';

describe('pruebas <GifExpertApp /> ', () => {
  test('debe cargar correctamente el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar una lista de categorías', () => {
      const categories = ['Dragon ball, futurama'];
       const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
       expect(wrapper.find('GifGrid').length).toBe(categories.length);

      
  })
  
});
