/* 
    * Make references to the html elements that we want to interact with through JS
    * Add in the ability to add a new list item
    * Add in the ability to remove a list item
    * Add in the ability to mark a list item as done
    
*/

var submitButton = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); // querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that.

function createListElement() {
    // Create a new li element
    // Add content to it 
    // Add it to our ul

    var li = document.createElement("li");

    li.innerHTML = input.value;

    ul.appendChild(li);

    input.value = "";

    function markDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    li.appendChild(deleteButton);

    function deleteListItem() {
        li.classList.add("delete")
    }

    deleteButton.addEventListener("click", deleteListItem);

}

function createListItemSubmitButton() { 
    if (input.value.length > 0) {
        createListElement();
    }
}

function createListItemEnterKey(event) {
    console.log(event.keyCode);
    
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    } 
}

submitButton.addEventListener("click", createListItemSubmitButton);

input.addEventListener("keypress", createListItemEnterKey);
