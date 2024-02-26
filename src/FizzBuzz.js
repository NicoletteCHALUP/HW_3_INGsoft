function generarFizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;
    let output = [];
    for (let i = 1; i <= n; i++) {
        if (i % (FIZZ * BUZZ) === 0) {
            output.push("FizzBuzz");
        } else if (i % FIZZ === 0) {
            output.push("Fizz");
        } else if (i % BUZZ === 0) {
            output.push("Buzz");
        } else {
            output.push(i + "");
        }
    }
    return output.join(", ");
}
export default generarFizzBuzz;