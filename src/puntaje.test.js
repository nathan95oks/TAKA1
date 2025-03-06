import puntaje from './puntaje.js';

describe('debería devolver el puntaje de la partida', () => {
  it('debería devolver love si el puntaje devuelto es 0', () => {
    expect(puntaje(0, 0)).toEqual(['love', 'love']);
  })
});