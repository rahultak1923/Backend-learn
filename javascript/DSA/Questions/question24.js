let age = Number(prompt("enter your age"));

if(isNaN(age)){
    console.log("wrong intput")
}
if(age>=18){
    console.log("you can vote")
}else{
    console.log("you can't vote")
}