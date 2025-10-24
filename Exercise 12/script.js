// console.log("hello")

let boxs  = document.getElementsByClassName("box");
console.log(boxs);

// let boxs = document.querySelector(".container").children

function getRandomColor() {
    let value1 = Math.ceil(0+Math.random()*255);
    let value2 = Math.ceil(0+Math.random()*255);
    let value3 = Math.ceil(0+Math.random()*255);
    return`rgb(${value1}, ${value2}, ${value3})`

}
console.log("function-----------",getRandomColor())
Array.from(boxs).forEach(e=>{
    console.log("efrgh")
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
    console.log(e)
});
