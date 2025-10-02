/*create a business name generator by combining list of adjectives and shop name and another word

adjectives:
crazy
amazing
fire

shop name :
engine
food
garments

another word:
bros
limited
hub

*/


let random = Math.random();

//adjectives: crazy amazing fire


let first;
let second;
let third;
if (random < 0.11) {
    first = "Crazy"
}

else if(random < 0.22 && random > 0.11) {
    first = "Amazing"
}

else if(random < 0.33 && random > 0.22) {
    first = "Spider"
}

else if(random < 0.44 && random > 0.33) {
    first = "Hero"
}

else if(random < 0.55 && random > 0.44) {
    first = "Alam"
}

else if(random < 0.66 && random > 0.55) {
    first = "Amazing"
}


else{
    first = "Fire"
}





//shop name : engine food garments

random = Math.random();

if (random < 0.33) { 
    second = "engine"
}

else if(random < 0.22 && random > 0.11) {
    second = "Dhaka"
}

else if(random < 0.33 && random > 0.22) {
    second = "Metro"
}

else if(random < 0.44 && random > 0.33) {
    second = "Hajj"
}

else if(random < 0.55 && random > 0.44) {
    second = "Sky"
}

else if(random < 0.66 && random > 0.55) {
    second = "Akash"
}

else{
    second = "food"
}




//another word: bros limited hub

random = Math.random();

if (random < 0.33) {
    third = "bros"
}

else if(random < 0.22 && random > 0.11) {
    third = "Boy"
}

else if(random < 0.33 && random > 0.22) {
    third = "Girl"
}

else if(random < 0.44 && random > 0.33) {
    third = "Women"
}

else if(random < 0.55 && random > 0.44) {
    third = "Men"
}

else if(random < 0.66 && random > 0.55) {
    third = "Boka"
}

else{
    third = "hub"
}


console.log(`${first} ${second} ${third}`);