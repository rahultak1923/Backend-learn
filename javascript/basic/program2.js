// user amount deposit then user check balance how to slove the question with useing the closures 

//  closures = funciton ke under ak or function is could closures

function BankAccount(firstdeposit){
    let balance = firstdeposit;
    console.log("your available balance is " , balance)
    return{
        deposit(ammount){
            balance = balance + ammount;
            console.log("you add the deposit ammount is "+ ammount)
        },
        checkbalance (){
            console.log("your total amount is " + balance)
        }
    }
}

const myaccount = BankAccount(1000);
myaccount.deposit(500);
myaccount.checkbalance();