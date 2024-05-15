// Задача 4.
// Да се креира низа со име students која што ќе има најмалку два 
// објекти кои што во себе ќе ги содржат следниве својства:

// name: име на студентот (string).
// surname: презиме на студентот (string).
// age: години на студентот (number).
// address: Објект кој што ќе ја претставува адресата на студентот. Овој објект треба да содржи:
// city, street, zipCode
// city: градот во кој што живее студентот (string)
// street: улицата во градот која што исто така ќе биде објект кој што треба да содржи:
// name: име на улицата (string)
// number: број на улицата (number)
// zipCode: поштенски код (string)
// Да се испечати името на градот во кој што живее првиот студент со помош на (dot notation) 
// синтакса и да се испечати името на улицата на вториот студент со помош на (bracket notation) синтакса.

const students = [
    {
        name: "Pavel",
        surname: "Toshinski",
        age: 23,
        address: {
            city: "Skopje",
            street: {
                name: "Str. Confidental 15/1-2",
                number: 123
            },
            zipCode: "1000"
        }
    },
    {
        name: "Alice",
        surname: "Alison",
        age: 60,
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            },
            zipCode: "90001"
        }
    }
];

console.log(students[0].address.city);
console.log(students[1]['address']['street']['name']);