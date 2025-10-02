console.log("Factorial Calculator");

let num = 5;

function factorial(number){
    let array = Array.from(Array(number+1).keys());
    console.log(array.slice(1));
    // console.log(array);
    const factorialCalculate = (a,b)=>{
        return a*b;
    }
    console.log(array.slice(1).reduce(factorialCalculate));
}

let array = factorial(num);


