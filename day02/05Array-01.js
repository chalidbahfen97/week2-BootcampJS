const emptyArray = [];

const foods = ["Sup","Pizza","Pasta"];

//add element at lastIndex
foods.push("indomeie");

//delete lastIndex
foods.pop();

//add element at firstIndex
foods.unshift("Bakso");

//delete firstIndex
foods.shift();

//display with index
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]);

//display by looping
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

//String to Array
const s = "bootcamp codeid academy";
const arr = s.split(" ");

console.log();