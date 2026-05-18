const { getMessage, getStatus, getVersion } = require("../src/app");

describe("Pruebas de app.js", () => {
  test("Incluye versión del app", () => {
    expect(getVersion()).toBe("1.0.0");
  });

  test("El mensaje incluye el ID ofuscado del estudiante", () => {
    expect(getMessage()).toContain("13**1*3");
  });

  test("El estado retorna OK", () => {
    expect(getStatus()).toBe("OK");
  });
});