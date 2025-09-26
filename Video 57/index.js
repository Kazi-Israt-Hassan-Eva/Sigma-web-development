console.log("I am tutorial on loops");

let a = 1;

// for loop

for (let i = 0; i < 100; i++) {
    console.log( a + i );
    
}


let obj = {
    name : "Kazi Israt Hassan Eva",
    role : "Software Engineer",
    Company : "Not Identified"
}

//forin

for (const key in obj) {
    console.log(key); 
    
    
}

//forof

for (const char of "Eva Kazi") {
    console.log(char); 
    
    
}

//while


let b = 1;
while (b < 10) {
    console.log(b);
    b++;
}

while (b > 0) {
    console.log(b);
    b--;
}

//do ....... while


let c = 0;
do {
    console.log(c);
    c++;
} while (c<10);