console.log("Sigma Web")

var a = 5;
var b = 3;
var c = "rrr";
console.log(a + b)
console.log(typeof a, typeof c);

// const a1 = 90;
// a1 = a1 + 1; NOT ALLOWED

{
    let a = 7;   //OUTSIDE BLOCK HAS NO VALUE
    console.log(a);
}

console.log(a);




//Primitive numbers

let x = "reg";
let y = "85";
let z = "3.5"
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


//objective = key + value

let o = {
    "name" : "Kazi Israt Hassan",
    "Job id" : 123,
    "year of experience" : 4
}

console.log(o)

o.salary = 40000
console.log(o)

o.salary = 90000
console.log(o)

o.isBeautifule = "Yes"
console.log(o)