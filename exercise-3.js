// a. Да се декларира променлива count на која што ќе и доделите нумеричка вредност 5. 
// Користете јамка (while) за да ги испечатите броевите од count надолу до 1.

// б. Напишете програма што одбројува од 10 до 1. 
// Користете јамка do-while и вклучете услов да излезе од циклусот кога одбројувањето ќе достигне 5. 
// Испечатете го секој број во конзолата.

let count = 5;
let str = "";
while(count > 0){
    str += count + " ";
    count--;
}
console.log(str);

// b
let num = 10;
let s = ""; // empty string
do{
    s += num + " ";
    if(num === 5){
        console.log(s);
        console.log("Counting stopped.");
        break;
    }
    num--;
}while(num > 0);