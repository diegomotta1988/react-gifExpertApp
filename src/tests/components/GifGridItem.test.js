import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Título test';
  const url = 'https://urldepruebas';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un párrafo con el title', () => {
    const parrafo = wrapper.find('p');
    expect(parrafo.text().trim()).toBe(title);
  });

  test('debe tenre la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener animate__fadeIn ', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBe(true);
  });
});
