let num = 6;

function factorialCalculate(number) {
    let array = Array.from(Array(number+1).keys());
    console.log(array.slice(1));
    const calculate = (a,b) =>{
        return a*b;
    }
    console.log(array.slice(1).reduce(calculate));
}

factorialCalculate(num);