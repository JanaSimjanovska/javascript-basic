$(document).ready(function(){

  // 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
  //For example if you accept 025468 the output should be 0-254-6-8.

    let input = $('#numInput').first();

    let button = $('#submitBtn').first();

    let result = $('#resPar').first();

    console.log(input, button, result);


    function numToStringWithDashes(array){
      let newString = '';
      for (let number of array) {
        if((number % 2 === 0) && (number === array[array.length - 1])){
          newString += `${number}`;
        } else if ((number % 2 === 0)){
          newString += `${number}-`;
        } else {
          newString += `${number}`;
        }
      }
      return newString;
    }

    
  button.click(function(){

    let inputToArray = input.val();
    console.log(inputToArray);

    let stringArray = inputToArray.split('');

    result.text(`${numToStringWithDashes(stringArray)}`);
   
  })


   

    
})