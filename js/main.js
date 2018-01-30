
//set variables to specific areas in on the pages
let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");
// console.log("header", header);

// handle mouse events and track the mouse movement event. 
function handleHeaderMouseEvent(event){
    // console.log("event", event.target, event.currentTarget);
    saywhat.innerHTML = "The Force is strong with this one";
};

function handleHeaderMouseOut(event){
    saywhat.innerHTML = "Remember... the Force will be with you always.";
};

//Grabbing the list elements in the HTML
let listItems = document.getElementsByClassName("list-item");
// console.log("listItems"); 

//Loop through the li items and for each one looping through each item and adding a click event
for(var i = 0; i < listItems.length; i++){
    listItems.item(i).addEventListener("click", handleClick);
};

//on click event on one of the list items, it will be inserted the list in the id output in the small block element
function handleClick(MouseEvent){
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML= "hmmmm, " + elementText + " clicked you have";
};

//events related to the event listeners
header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);

//targets yoda image
var yodaImage = document.getElementById("theYoda");
//fat arrow replaces function ; () => annoymous function because there is no name for the event
document.getElementById("change-color").addEventListener("click", () => {
    yodaImage.classList.toggle("flashy");
});

// longer way of writing the above statement but writing the function instead of a fat arrow
// document.getElementById("change-color").addEventListener("clicked", function() {
//     yodaImage.classList.toggle("flashy");
// };

//below is the js for writting out the full event
// document.getElementById("change-color").addEventListener("clicked", toggle);
// function toggle(event){
//     yodaImage.classList.toggle("flashy");
// }

// button events changes the size, color and border of the yoda's image
document.getElementById("force-lots-of")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("moreforce");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("bordered");
});

// conditional statement on what we click on
document.getElementById("starwars").addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "li"){
        console.log("You clicked on an <li> item");
    }
    if(event.target.className == "list-item"){
        console.log("you clicked on list-item element");
    }
});

var quotesArray = [
    "A long time ago in a galaxy far, far away…",
    "Use the force, Luke.",
    "The force is strong with this one.",
    "Do. Or do not. There is no try.",
    "Fear is the path to the dark side.",
    "Someday I will be the most powerful Jedi ever.",
    "You were the chosen one!"
    ];

    //created a temporal string for creating a new div and html string
    quotesArray.forEach( (quote, index) => {
        let quoteBlock = `<div id="quote--${index}">
                        <h3>"${quote}" - Star Wars</h3>
                        </div>`;
                        
        let quoteDiv = document.createElement("div");
        quoteDiv.innerHTML = quoteBlock;

        //allowing us to have a container and appending a child node in the html
        document.getElementById("stickItHere").appendChild(quoteDiv);

        let quoteDom = document.getElementById(`quote--${index}`);
        quoteDom.addEventListener("click", () => {
            event.currentTarget.classList.add("accent");
        });
    });





