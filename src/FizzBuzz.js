function generarFizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;
    if (n % (FIZZ * BUZZ) === 0) {
        return "FizzBuzz";
    } else if (n % FIZZ === 0) {
      return "Fizz";
    } else if (n % BUZZ === 0) {
      return "Buzz";
    } else {
      return n + "";
    }
  }
  export default generarFizzBuzz;
