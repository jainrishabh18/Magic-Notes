console.log("Notes App");
showNotes();

let addBtn = document
  .getElementById("addBtn")
  .addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    // console.log(notesObj);
    showNotes();
  });

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {

    //   onclick use =llows the programmer to execute a JavaScript's function when an element gets clicked.
    html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> Note ${index +1} </h5>
            <p class="card-text">
               ${element} 
            </p>
            
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-danger">
               Delete Note
            </button>    
            
        </div>
    </div>;`
  });

  let notesElem = document.getElementById("notes");
  if(notesObj.length !=0)
  {
    notesElem.innerHTML=html;
  }
  else
  {
      notesElem.innerHTML="Make Notes";
  }
}

function deleteNote(index)
{
    // console.log("deleting Note ",index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    // we have to stringify after deleting because local storage deals in string we have to convert it to a string
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}

let search =document.getElementById('searchTxt');
// console.log(search);
search.addEventListener("input",function()
{
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    // console.log('Input event fired!', noteCards);

    Array.from(noteCards).forEach(function(element) 
    {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log('Input event fired!', cardTxt);

        if(cardTxt.includes(inputVal))
        {
            element.style.display ="block";

        }
        else
        {
            element.style.display ="none";
        }
        // console.log(cardTxt)
    })
    
    
})



