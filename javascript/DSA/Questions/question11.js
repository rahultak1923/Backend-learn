console.log("swapping two variables without using third variable");
let a = 10 ;
let b = 20 ;

a = a+b;
b = a-b;
a= a-b;
console.log("a is " + a);
console.log("b is " + b);