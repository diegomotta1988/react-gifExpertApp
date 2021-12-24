import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from './../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Futurama')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test('debe retornar un array de imagenes y loading a false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Futurama')
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
