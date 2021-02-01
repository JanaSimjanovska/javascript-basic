console.log('Hello');

let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log(arr);


function divBy7and3(array){

    let sortedArr = [];    
    for (let number of array) {
        
        if ((number % 3 === 0) && (number % 7 === 0)){
            sortedArr.push(number);
        } else {
            continue
        } 
    }
    return sortedArr;
}

console.log(divBy7and3(arr));
