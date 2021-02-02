let inputFirstName = document.getElementById('firstName');
let inputLastName = document.getElementById('lastName');
let inputAge = document.getElementById('age');
let saveBtn = document.getElementById('saveBtn');
let studentList = document.getElementsByTagName('ul')[0];


function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


let studentRegistry = [];


saveBtn.addEventListener('click', function(){

    let studentFirstName = inputFirstName.value;
    let studentLastName = inputLastName.value;
    let studentAge = inputAge.value;

    let student = new Student(studentFirstName, studentLastName, studentAge);

    studentRegistry.push(student);
    console.log(studentRegistry);

    studentList.innerHTML += `<li>First name: ${student.firstName} <br />Last name: ${student.lastName} <br />Age: ${student.age}</li>`

    inputFirstName.value = '';
    inputLastName.value = '';
    inputAge.value = '';
})


