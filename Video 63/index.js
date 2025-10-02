console.log("Array");


let array = [1, 2, 3, 4, 5, 6];

console.log(array);
console.log(array.slice(1,3));// slice start from index 1 and done until 3
console.log(array.length);
console.log(array[1]);
//replace array
array[1] = 234;
console.log(array);
console.log(array.toString());
console.log(array.join(" and ")); //join
console.log(array.pop()); // pop last one
console.log(array.push(100));
console.log(array.push("Eva"));
console.log(array.shift()); //remoce 1st one
console.log(array.unshift("Kazi")); //add 1st one
console.log(delete array[4]);
console.log(array);


let a1 = [1 ,93 ,5];
let a2 = [11 ,13 ,15];
let a3 = [21 ,23 ,25];

console.log(a1.concat(a2,a3)); //concate array
console.log(a1.sort());

let a4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(a4.splice(1,3));
console.log(a4.reverse());
console.log(a4);