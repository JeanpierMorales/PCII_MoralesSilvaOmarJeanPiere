const sum = require("./sum");

describe("Pruebas para la función sum", () => {
  // Validar que la suma de 4 y 6 nos devuelva 10
  test("Debe sumar 4 y 6 correctamente para obtener 10", () => {
    expect(sum(4, 6)).toBe(10);
  });

  // Valida que la suma de -3 y 8 nos devuelva 5
  test("Debe sumar -3 y 8 correctamente para obtener 5", () => {
    expect(sum(-3, 8)).toBe(5);
  });
});
