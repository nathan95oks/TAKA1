import puntaje from './puntaje.js';

describe('debería devolver el puntaje de la partida', () => {
  it('debería devolver love si el puntaje devuelto es 0', () => {
    expect(puntaje(0, 0)).toEqual(['love', 'love']);
  });

  it('debería devolver love si el puntaje devuelto es 0 y 15 si se logro hacer un punto ', () => {
    expect(puntaje(0, 1)).toEqual([0, 15]);
  });

  it('debería devolver love si el puntaje devuelto es 0 y 15 si se logro hacer un punto ', () => {
    expect(puntaje(1 , 0 )).toEqual([15, 0]);
  });

});