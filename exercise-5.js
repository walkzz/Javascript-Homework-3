// Задача 5.
// а. Да се направи for циклус кој што ќе го печати секој втор непарен број од 1 до 100.

// б. Да се направи for циклус кој што ќе го испечати секој парен број од 1 до 50.

let count = 0;

for (let i = 1; i <= 100; i += 2) {
  count++;
  if (count % 2 === 0) {
    console.log(i);
  }
}