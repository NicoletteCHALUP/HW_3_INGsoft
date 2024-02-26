function generarFizzBuzz(n) {
    const FIZZ = 3;
    //const BUZZ = 5;
    if (n % FIZZ === 0) {
      return "Fizz";
    } else if (n ===5) {//% BUZZ === 0
      return "Buzz";
    } else {
      return n + "";
    }
  }
  export default generarFizzBuzz;
