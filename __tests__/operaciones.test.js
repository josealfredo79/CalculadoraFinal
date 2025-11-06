const { sumar, restar, multiplicar, dividir } = require('../funcionalidad');

describe('Operaciones básicas de la calculadora', () => {
  test('suma de enteros', () => {
    expect(sumar(2,3)).toBe(5);
  });
  test('suma con decimales (precisión flotante)', () => {
    expect(sumar(0.1,0.2)).toBeCloseTo(0.3, 5);
  });
  test('resta con negativos', () => {
    expect(restar(-5, -2)).toBe(-3);
  });
  test('multiplicación básica', () => {
    expect(multiplicar(4,5)).toBe(20);
  });
  test('multiplicación por cero', () => {
    expect(multiplicar(7,0)).toBe(0);
  });
  test('división básica', () => {
    expect(dividir(10,2)).toBe(5);
  });
  test('división por cero retorna Infinity', () => {
    expect(dividir(5,0)).toBe(Infinity);
  });
  test('entrada cadena numérica se convierte correctamente', () => {
    expect(sumar('6','4')).toBe(10);
  });
  test('división con decimales', () => {
    expect(dividir(0.3,0.1)).toBeCloseTo(3,5);
  });
});

describe('Casos borde y tipos', () => {
  test('NaN cuando el primer argumento no es interpretable como número', () => {
    expect(Number.isNaN(sumar('abc',1))).toBe(true);
  });
  test('NaN cuando el segundo argumento no es interpretable como número', () => {
    expect(Number.isNaN(restar(1,'xyz'))).toBe(true);
  });
});
