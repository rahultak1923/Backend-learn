// arrry methods in javascript

let num = [1,2,3,4,5]

num.push(6); // add the element to end
num.pop(); // remove the end element
num.shift(); // remove the first element
num.unshift(9); // add the first element

let squared = num.map((n)=> n*n)
let finds = num.find((f)=> f<=50)
let passed = squared.filter((n)=> n>=50)

console.log(num)
console.log(squared)
console.log(finds)
console.log(passed)

