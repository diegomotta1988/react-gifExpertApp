import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from './../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el <GifGrid />', () => {
  const category = 'Dragon Ball';
  const mockUseFetchGifs = useFetchGifs;

  test('debe mostrarse correctamente', () => {
    mockUseFetchGifs.mockImplementation((category) => ({
      data: [],
      loading: true,
    }));
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar items cuando se cargan imágenes con useFecthGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://test',
        title: 'test',
      },
    ];
    mockUseFetchGifs.mockImplementation((category) => ({
      data: gifs,
      loading: false,
    }));
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    // Comprobamos que no hay párrafo de cargando
    expect(wrapper.find('p').exists()).toBe(false);
    // Comprobamos que genera un item por cada gif
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
