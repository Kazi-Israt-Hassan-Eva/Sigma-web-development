// let boxes = document.getElementsByClassName(box);
// console.log(boxes);


let boxes  = document.querySelector(".box");
console.log(boxes);

let boxeshtml  = document.querySelector(".box").innerHTML;
console.log(boxeshtml);

let containerhtml  = document.querySelector(".container").innerHTML;
console.log(containerhtml);

let containerText  = document.querySelector(".container").innerText;
console.log(containerText);

let containerOuterHTML  = document.querySelector(".container").outerHTML;
console.log(containerOuterHTML);

let containerHidden  = document.querySelector(".container").hidden = true;
console.log(containerHidden);

let containerHasAttribute  = document.querySelector(".container").hasAttribute("style");
console.log(containerHasAttribute);

let containerGetAttribute  = document.querySelector(".container").getAttribute("style");
console.log(containerGetAttribute);

let containerSetAttribute  = document.querySelector(".container").getAttribute("style, background-color:black;");
console.log(containerSetAttribute);

let containerRemoveAttribute  = document.querySelector(".container").getAttribute("style");
console.log(containerRemoveAttribute);

let containerDataset  = document.querySelector(".container").dataset;
console.log(containerDataset);