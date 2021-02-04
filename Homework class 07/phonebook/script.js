console.log(`Hello :)`);

let firstName = document.getElementById('first-name');

let lastName = document.getElementById('last-name');

let mobNum = document.getElementById('mobile-number');

let homeNum = document.getElementById('home-number');

let saveBtn = document.getElementById('saveBtn');

let resList = document.getElementById('result');

console.log(firstName, lastName, homeNum, mobNum, saveBtn, resList);

function printInfo (first, last, mob, home, element){
    
    if(isNaN(mob) || isNaN(home)){
        alert `You must enter numerical values in the fields for phone numbers!`
    }
    else {
        element.innerHTML += `<li>First name: ${first};<br />
        Last name: ${last};<br />
        Mobile phone number: ${mob};<br />
        Home phone number ${home};</li>`;   
    }
}
saveBtn.addEventListener('click', function(){
    printInfo(firstName.value, lastName.value, mobNum.value, homeNum.value, resList);

    firstName.value = '';
    lastName.value = '';
    mobNum.value = '';
    homeNum.value = '';
})

