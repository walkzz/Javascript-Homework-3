// Задача 6.
// Креирајте низа од 10 градови и испечатети ги во конзола со помош на:

// a. for-in циклус

// б. for-of циклус


let cities = [
    "Tokyo",
    "Paris",
    "Sydney",
    "Cairo",
    "Toronto",
    "Buenos",
    "Aires",
    "Reykjavik",
    "Nairobi",
    "Berlin",
    "San Francisco"];

// loop methods
function forIn() {
    for (let city in cities) { 
        console.log(cities[city]);
    }
}
function forOf() {
    for (let city of cities) { 
        console.log(city);
    }
}
// calling the functions
forIn();
console.log("--------------------------------------");
forOf(); 