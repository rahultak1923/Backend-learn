// 1. let , const variable 
let name = "rahul";

// 2. normal function 
function add (a, b ){
    return a +b ;
}
const num = add(5,6);
console.log(num)

// arrow function
const added = (c,d) => c+d;
console.log(added(8,9));

// 3. template backticks ``
let name2 = "kunal";
console.log(`my brothe name is ${name2}`,)

// 4. destructuring
const user = {username:"rahul", age:"21"}
const {username, age}= user
console.log(username);