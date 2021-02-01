let inputBookTitle = document.getElementById('bookTitle');
let inputBookAuthor = document.getElementById('bookAuthor');
let readButton = document.getElementById('read');
let notReadButton = document.getElementById('notRead');
let submitBtn = document.getElementById('saveBtn');
let tBody = document.getElementsByTagName('tbody')[0];


function BookAndStatus(bookTitle, bookAuthor, status){

    this.title = bookTitle;
    this.author = bookAuthor;
    this.isRead = status;

    this.readNotRead = function(status){
        
        if (status) {
            return `Already read '${this.title}' by ${this.author}`
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`
        }
    }

}


function readOrNotRead(){
    let readingStatus = '';
    if (document.getElementById('read').checked) {
        readingStatus = true;
      } else if (document.getElementById('notRead').checked){
        readingStatus = false;
      } else {
          alert(`You must select either Yes or No!`)
      }
      return readingStatus;
}


submitBtn.addEventListener('click', function(){
    let bookAuthorStatus = new BookAndStatus(inputBookTitle.value, inputBookAuthor.value, readOrNotRead());

    tBody.innerHTML += `<tr>
    <td>${bookAuthorStatus.title}</td>
    <td>${bookAuthorStatus.author}</td>
    <td class="status">${bookAuthorStatus.readNotRead(bookAuthorStatus.isRead)}</td>
    <td><button type="button" class="changeBtn">Change status</button></td>
    </tr>`;

    inputBookTitle.value = '';
    inputBookAuthor.value = '';
    readButton.checked = false;
    notReadButton.checked = false;

    let changeBtns = document.getElementsByClassName('changeBtn');
    for(let i = 0; i < changeBtns.length; i++){
        changeBtns[i].addEventListener('click', function(){
            document.getElementsByClassName('status')[i] = ''
            function checkStatus(){
                if(bookAuthorStatus.isRead) {
                    bookAuthorStatus.isRead = false;
                } else {
                    bookAuthorStatus.isRead = true;
                }
                return bookAuthorStatus.isRead;
            }
            checkStatus();
            document.getElementsByClassName('status')[i].innerText = `${bookAuthorStatus.readNotRead(bookAuthorStatus.isRead)}`; 
        })
    }
})

