console.log("Loops and array");

let a = [23, 5, 7 ,98, 3, 6, 98, 99];


//for loop

for (let index = 0; index < a.length; index++) {
    const element = a[index];
console.log(element);
}


//for in

a.forEach((value , index, arr) => {
    console.log(value , index, arr);
});


//for in for object

let object = {
    a : 1,
    b : 3,
    c : 1
}

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key , element);
    
    
}


//for of for array

for (const element of a) {
    console.log(element);
}



//map for new array
