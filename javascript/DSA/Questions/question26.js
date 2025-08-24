let unit = Number(prompt("enter electricity unit "))
let amount = 0;
if(unit>400){
    amount += (unit-400)*13
}
if(unit>200 && unit<400){
    amount+= (unit-200)*8
}
if(unit>100 && unit<200){
    amount+= (unit-100)*6
}
unit = 100
amount+= (unit*4);
console.log(amount)
