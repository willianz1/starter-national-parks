
/*
console.log(document);
//This only finds the first one
const heading = document.querySelector("h1"); 
console.log(heading);

const findVal = document.querySelector(".value");
console.log(findVal); 

const findDive = document.querySelector("div.stat"); 
console.log(findDive); 

const findArea = document.querySelector(".area-display")
console.log(findArea);

//This uses selectorAll

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);


//Node lets you use it like an array 

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
*/

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("div.value");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

