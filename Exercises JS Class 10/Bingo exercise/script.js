
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let thirdNumber = document.getElementById('thirdNumber');
let fourthNumber = document.getElementById('fourthNumber');
let fifthNumber = document.getElementById('fifthNumber');
let submitBtn = document.getElementById("submitBtn");
let displayList = document.getElementById("displayList");
let displayH1 = document.getElementById("lotteryResult");

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

let arrOf37 = [];
function display37(element){
    for(let i = 1; i <= 37; i++){
        arrOf37.push(i);
        element.innerHTML += `<li></li>`// Namerno go ostaiv bez ${i} vo <li> zasto iskaca smesno koga se pecati nizata (se dupliraat brojkite, na pr. 1.1, 2.2 itn), a iskreno i ne sfativ so bese poentata na baranjevo vo zadacata, dali bese samo da isprintame niza ili trebase so nea nesto da pravime. Ako ja utnav sustinata, kazete :)
    }
}

display37(displayList);

let winningComboList = [5, 17, 36, 9, 4];

function check(array, array2, element){
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array2.length; j++){
            if(array[i] === array2[j]){
                counter ++;
            }
        }
    }
    if(counter === 5){
        element.innerText = `Congratulations! You won a 1000000$!!!`;
    }
    else {
        element.innerText = `Sorry, you didn't win the lottery! Better luck next time!`
    }
}


submitBtn.addEventListener("click", function(){
    let userCombo = [];
    
    userCombo.push(parseInt(firstNumber.value),parseInt(secondNumber.value), parseInt(thirdNumber.value), parseInt(fourthNumber.value), parseInt(fifthNumber.value));
    check(userCombo, winningComboList, displayH1);
    firstNumber.value = '';
    secondNumber.value = '';
    thirdNumber.value = '';
    fourthNumber.value = '';
    fifthNumber.value = '';
})

