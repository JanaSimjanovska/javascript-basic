$(document).ready(function(){

    let input = $('#nameInput')[0];
    console.log(input);

    let button = $('button');
    console.log(button);

    let result = $('h1');
    console.log(result);

    button.click(function(){
        
        result.text(`Hello ${input.value}!`)

    })

})