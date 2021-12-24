import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
  });

  test('no debe enviar el formulario si inputValue.length < 2', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe enviar el formulario y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    // Esperamos que setCategories haya sido llamado con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop('value')).toBe('');
  });
});
