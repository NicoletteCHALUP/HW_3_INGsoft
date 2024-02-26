import generarFizzBuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("deberia devolver la secuencia de un numero como el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia devolver la secuencia de un numero diferente como el 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });

  it("deberia devolver Fizz al numero 3 caso basico del fizz", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
    it("deberia devolver Fizz a otro numero que sea modulo de 3 como el 6", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
  });
  it("deberia devolver Buzz al numero  5 como caso base de BUZZ ", () => {
    expect(generarFizzBuzz(5)).toEqual("Buzz");
  });
    it("deberia devolver Buzz a otro numero que sea modulo de 5 como caso de 10 ", () => {
    expect(generarFizzBuzz(10)).toEqual("Buzz");
  });

  it("deberia devolver Fizz Buzz al caso base 15 ", () => {
    expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("deberia devolver Fizz Buzz a otro numero que sea multiplo de 3 y 5 como el 30  ", () => {
    expect(generarFizzBuzz(30)).toEqual("FizzBuzz");
  });
});


