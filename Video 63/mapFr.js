console.log("Map Filter Reduce");

let array = [2, 5, 76, 978, 0, 3, 42];
// let newArray = [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArray.push(element ** 2);
// }

// console.log(newArray);





let newArray = array.map(
    (element) => {
        return element ** 2;
    }
)

console.log(newArray);



//filter

const greaterThanSeven = (element) => {
    if (element > 0) {
        return true;
    }
    return false
}

console.log(newArray.filter(greaterThanSeven));



const lessThanfive = (element) => {
    if (element < 5) {
        return true;
    }
    return false;
}

console.log(newArray.filter(lessThanfive));



//reduce function

let aa = [1, 2, 3, 4, 3, 4, 8];

const red = (a, b) => {
    return a*b
}

console.log(aa.reduce(red))



//array from

console.log(Array.from("Eva"));