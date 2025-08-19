let a = 11, b = 22;
let c = a+b + a++ + b++ + ++a + ++b;
console.log(c); // Output will be the result of the expression
console.log(a, b); // Output will show the final values of a and b after all operations
