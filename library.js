let myLibrary = [new Book('a time to kill','john grisham','192', 'x')];
var form = document.getElementById("form");
var addBook = document.getElementById("newBook");
var submit = document.getElementById("submit");
var cancel = document.getElementById("cancel");
var table = document.querySelector('table');

//load existing books
render();

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

//display form on click
addBook.addEventListener("click", function(){
    form.style.display="block";
})

//close form on click
cancel.addEventListener("click", function(){
    console.log("close")
    form.style.display="none";
})

//submit form 
submit.addEventListener("click", function(){
    console.log('submit');
    const formContent = document.getElementsByTagName("form");
    const inputs = document.querySelectorAll('input');
    //console.log(inputs)
    const title = inputs[0];
    const author = inputs[1];
    const pages = inputs[2];
    const read = inputs[3]; 

    //console.log(title.value);

    //check for empty inputs
    if(title.value == "" || author.value == "" || pages == ""){
        console.log('empty');
        alert('please fill out all fields');
    }

    form.style.display="none"
    addBookToLibrary(inputs);
})

//add new book to library
function addBookToLibrary(inputs){
    const title = inputs[0];
    const author = inputs[1];
    const pages = inputs[2];
    const read = inputs[3];
    myLibrary.push(new Book(title.value,author.value,pages.value,read.value));
    console.log(myLibrary)
    render();
}

//display library
function render(){
    for(i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
        table.innerHTML += `<tr><th>${myLibrary[i].title}</th> <th>${myLibrary[i].author}</th><th>${myLibrary[i].pages}</th><th><input type="checkbox"${myLibrary[i].read}></th><th><button class="delete">delete</button></th></tr>`
        console.log(table.lastChild.lastChild.lastChild);

        //check for deletes
        const row = table.lastChild.lastChild;
        row.lastChild.firstChild.addEventListener('click', function(){
            var r = this.parentNode.parentNode.rowIndex;
            console.log(r);
            table.deleteRow(r);
        })
    }
}

//addBookToLibrary();
//console.log(myLibrary);