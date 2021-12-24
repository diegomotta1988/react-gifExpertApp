import { getGifs } from '../../helpers/getGifs';

describe('pruebas con getGifs', () => {
  test('Debe traer 10 elementos', async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBe(10);
  });

  test('Debe traer 0 elementos si no se pasa categoría', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
