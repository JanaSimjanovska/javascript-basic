console.log(`Hello`)

let depInput = document.getElementById('deposit');
let depBtn = document.getElementById("depositBtn");
let depResult = document.getElementById('amtAfterDep');

let withInput = document.getElementById('withdrawal');
let withBtn = document.getElementById("withdrawBtn");
let withResult = document.getElementById('amtAfterWith');

let exitBtn = document.getElementById('exit');
let divWrapper = document.getElementById('divWrapper');

console.log(depInput, depBtn, withInput, withBtn, exitBtn, depResult, withResult);

let currentAmount = 5000;


depBtn.addEventListener('click', function(){
    function deposit(amount, userAmount){
        amount += userAmount;
        currentAmount = amount;
        return amount;
    }
    
    depResult.innerText = (`Your current balance: ${deposit(currentAmount, parseInt(depInput.value))} euro;`)
})


withBtn.addEventListener('click', function(){
    function withdraw(amount, userAmount){
        amount -= userAmount;
        currentAmount = amount;
        return amount;
    }

    withResult.innerText = (`Your current balance: ${withdraw(currentAmount, parseInt(withInput.value))} euro;`)
})

exitBtn.addEventListener('click', function(){
    divWrapper.innerHTML = ``;
    divWrapper.innerHTML += "<p>Thank you for using our ATM app! Have a good day!</p>"
})





