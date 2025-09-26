let random = Math.random();

let a = prompt("Enter your 1st number :");
let c = prompt("Enter operation :");
let b = prompt("Enter your 2nd number :");


let result;

if (random > 0.1) {
    switch (c) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        default:break;
    }
}

else if (random < 0.1) {
    switch (c) {
        case '+': result = a * b; break;
        case '-': result = a / b; break;
        case '*': result = a + b; break;
        case '/': result = a - b; break;
        default:break;
    }
}

console.log(`${result}`);
alert(`${result}`);