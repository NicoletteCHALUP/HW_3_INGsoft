/*import sumar from "./sumador";
import multiplicar from "./multiplicardor";
import generarFizzBuzz from "./FizzBuzz";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const first2 = document.querySelector("#primer-numero2");
const second2 = document.querySelector("#segundo-numero2");
const numero = document.querySelector("#numero");
const form = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multiplicar-form");
const form3 = document.getElementById("fizzbuzz-form");
const resultadoDiv = document.getElementById("resultado-div");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber2 = Number.parseInt(first2.value);
  const secondNumber2 = Number.parseInt(second2.value);
  div2.innerHTML = "<p>" + multiplicar(firstNumber2, secondNumber2) + "</p>";
});

*/

import generarFizzBuzz from './FizzBuzz.js';

const form = document.getElementById("fizzbuzz-form");
const resultadoDiv = document.getElementById("resultado-div");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const numero = Number.parseInt(document.getElementById("numero").value);
  resultadoDiv.innerHTML = "<p>" + generarFizzBuzz(numero) + "</p>";
});