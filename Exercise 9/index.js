let random = Math.random();

let a = prompt("Enter 1st number :");
let b = prompt("Enter 2nd number :");
let c = prompt("Enter operation :");

let obj = {
    '+': '*',
    '-': '/',
    '*': '+',
    '/': '-',
}

let result;
if (random > 0.1) {
    result = (a + b);
    result = (a - b);
    result = (a * b);
    result = (a / b);
}

else if(random < 0.1){
    c = obj(c);
    result = (a + b);
    result = (a - b);
    result = (a * b);
    result = (a / b);
}

alert(`${result}`);
