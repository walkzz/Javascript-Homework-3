// Задача 1.
// Да се креира:

// a. објект кој што опишува книга

// б. објект кој што опишува автомобил

// в. објект кој што опишува студент

// Секој од овие објекти да имаат барем по еден вгнезден објект или низа.

const book = {
    title: "Lorem Ipsum",
    author: "Pavel Toshinski",
    genres: ["Programming", "Technology"]
}
const car = {
    make: "Skoda",
    model: "Skoda Felicia",
    year: 2000,
    owner: {
        name: "Pavel Toshinski",
        address: {
            street: "1234 Elm Street",
            city: "Fremont",
            state: "CA",
            country: "USA"
        }
    }
}
const student = {
    name: "Pavel Toshinski",
    age: 23,
    major: "Computer Science",
    courses: [ // array that has 2 items/objects
        {
            name: "Data Science",
            code: "CS101",
            instructor: "Prof. Bojan"
        },
        {
            name: "Java Algorithms",
            code: "CS102",
            instructor: "Prof. Jovan"
        }
    ],
}
console.log(book);
console.log(car);
console.log(student);