let inputRows = document.getElementById('rows');
let inputColumns = document.getElementById('columns');
let createTableBtn = document.querySelector('button');
let tableArea = document.getElementById('table-area');


// function createTable(rows, columns) {

//     let table = document.createElement("table");
//     document.body.appendChild(table);
//     table.style.border = '1px solid black';
  
//     let tr = '';
//     let td = '';
//     let tdText = '';
    
//     if (isNaN(rows) || isNaN(columns)){ 
//         alert `You must enter numerical values!`;
//     } else if ((rows < 1) || (columns < 1)){
//             alert `You must enter numbers from 1 and up!`;
//         } else {
//             for (let i = 1; i <= rows; i++) {
//                 tr = document.createElement("tr");
//                 table.appendChild(tr);

//                 for (let j = 1; j <= columns; j++){
//                     td = document.createElement("td");
//                     tdText = document.createTextNode(`Row ${i} Column ${j}`);
//                     td.appendChild(tdText);
//                     tr.appendChild(td);
//                     td.style.border = '1px solid black';
//                 }
//             }    
//         }    
//     tableArea.appendChild(table);
//     document.body.appendChild(table);
// }

// createTableBtn.addEventListener('click', function(){
//     createTable(inputRows.value, inputColumns.value);
//     inputRows.value = '';
//     inputColumns.value = '';
// })


function createTable(rows, columns, element){

    element.innerHTML = `<table id="table" border = "1"></table>` // Namerno go napraviv so .innerHTML =, a ne so +=, zaso mi se vide pozgodno so sekoe vnesuvanje input bez refreshiranje na stranata da se prikaze i kreira skroz nova tabela, namesto da se dodava cela nova na prethodno iskreiranata. E sega, toa verojatno bi zaviselo od toa dali imame potreba da ni se zacuvuva ispecatenata tabela, sekako, vo toj slucaj +=.

    document.getElementById('table').innerHTML = `<tbody id = 'tbody'></tbody>` // Ovde isto go ostaviv so .innerHTML = a ne so +=, bidejkji toa ne ni menuva vo slucajov mnogu, zasto neli so sekoj klik odnovo kje se kreira nova tabela, odnosno kje se prebrisuva stariot html i kje se stava noviot vo elementot koj i go davam kako parametar na f-jata, poso so prethodnoto parce kod toa i go barame od funkcijata;
   
    if (isNaN(rows) || isNaN(columns)){ 
        alert `You must enter numerical values!`;
        } else if ((rows < 1) || (columns < 1)){
            alert `You must enter numbers from 1 and up!`;
        } else {
            for (let i = 1; i <= rows; i++){
                document.getElementById('tbody').innerHTML += `<tr class="row"></tr>`;
                    for (let j = 1; j <= columns; j++){
                        document.getElementsByClassName('row')[i-1].innerHTML += `<td class="tableCell">Row ${i} Column ${j}</td>`; 
                    }
                    
            }
    }
}


createTableBtn.addEventListener('click', function(){
        createTable(inputRows.value, inputColumns.value, tableArea);
        inputRows.value = '';
        inputColumns.value = '';
    })
    