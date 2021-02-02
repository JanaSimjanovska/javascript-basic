let kindOfPet = document.getElementById('kind');
let nameOfPet = document.getElementById('name');
let petSays = document.getElementById('petSays');
let saveBtn = document.getElementById('saveBtn');
let resPar = document.getElementsByTagName('p')[0]; 


function Animal(kindFromUser, nameFromUser){

    this.kind = kindFromUser;
    this.name = nameFromUser;

    this.animalSays = function(says){
        console.log(`The ${this.kind} ${this.name} says: "${says}"!`);
    }
}


saveBtn.addEventListener('click', function(){

    let petKind = kindOfPet.value;
    let petName = nameOfPet.value;
    let petSaysWhat = petSays.value;

    let animal = new Animal(petKind, petName);
    animal.animalSays(petSaysWhat);
    resPar.innerText = `The ${animal.kind} ${animal.name} says: "${petSaysWhat}"!`

    kindOfPet.value = "";
    nameOfPet.value = "";
    petSays.value = "";

})