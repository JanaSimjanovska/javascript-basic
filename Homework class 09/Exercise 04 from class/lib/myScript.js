

$(document).ready(function(){

    
    let input1 = $('#input1').first();
    let input2 = $('#input2').first();
    let input3 = $('#input3').first();
    let result = $('#result').first();

    console.log(input1, input2, input3);
    
   
    function calculateAvg(num1, num2, num3){
        let sum = num1 + num2 + num3;
        return sum / 3;
    }
    
    $("button").click(function(){

        let average = calculateAvg(parseInt(input1.val()), parseInt(input2.val()), parseInt(input3.val()));
        if(average <= 10){
           result.html(`The average of the numbers you entered is ${average}!`).css('color', 'green');
        } else {
            result.text(`The average of the numbers you entered is ${average}!`).css('color', 'red');
        }
             
    })

    

})