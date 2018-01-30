
//set variables to specific areas in on the pages
let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");
// console.log("header", header);

// handle mouse events and track the mouse movement
function handleHeaderMouseEvent(event){
    // console.log("event", event.target, event.currentTarget);
    saywhat.innerHTML = "The Force is strong with this one";
};

function handleHeaderMouseOut(event){
    saywhat.innerHTML = "Remember... the Force will be with you always.";
}

//Grabbing the list elements in the HTML
let listItems = document.getElementsByClassName("list-item");
// console.log("listItems"); 

//Loop through the li items and for each one looping through each item and adding a click event
for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
}
//on click event on one of the list items, it will be inserted the list in the id output in the small block element
function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML= "hmmmm, " + elementText + " clicked you have";
}

//events related to the event listeners
header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);