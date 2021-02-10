
let usernameInput = document.getElementById("userName");
let passwordInput = document.getElementById("pass");
let loginBtn = document.getElementById("loginBtn");
let resultHeading = document.getElementById("resHeading");

console.log(usernameInput, passwordInput, loginBtn);

let userNamesArray = ["Jana", "Anastas", "Petko", "Pero", "Blazo"];
let passwordsArray = ["Jana91", "Anastas93", "Petko87", "Pero84", "Blazo96"];

let usernameInputIndexNumber = undefined;
function checkUserName (username, array) {
    for (let i = 0; i < array.length; i++){
        if (username === array[i]){
            usernameInputIndexNumber = array.indexOf(array[i]);
        }
        else {
            continue;
        }
        return usernameInputIndexNumber;
    }
}

let passInputIndexNumber = undefined;
function checkPassword (pass, array) {
    for (let i = 0; i < array.length; i++){
        
        if (pass === array[i]){
            passInputIndexNumber = array.indexOf(array[i]);
        } 
        else {
            continue;
        }
        return passInputIndexNumber;
    }    
}

function checkMatch (user, pass, element){
    if (user === pass){
        element.innerText = `Hello ${usernameInput.value}!`;
    } 
    else {
        element.innerText = `No such user! Try again`;
    }
}


loginBtn.addEventListener("click", function(){
    if(usernameInput.value === "" || passwordInput.value === ""){
        alert `Username and password input fields can't be empty!`;
    }
    else {
        checkUserName(usernameInput.value, userNamesArray);
        checkPassword(passwordInput.value, passwordsArray);
        checkMatch(usernameInputIndexNumber, passInputIndexNumber, resultHeading);
    }
    usernameInput.value = '';
    passwordInput.value = '';
})