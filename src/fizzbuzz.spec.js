import generarFizzBuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("deberia devolver la secuencia de un numero como el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
});

