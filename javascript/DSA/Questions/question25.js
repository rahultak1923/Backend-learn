let amount = Number(prompt("enter your final ammount"));

if(amount>0 && amount<=5000){
    console.log("your final amount is "+ amount)
}
else if(amount>5000 && amount<=7000){
    console.log("your final amount is "+( amount - ((amount *5)/100)))
}
else if(amount>7000 && amount<=9000){
    console.log("your final amount is "+( amount - ((amount *10)/100)))
}