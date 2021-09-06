//Number

const n = 54.56;

console.log(parseFloat(n));
console.log(parseInt(n));

//conv string to number
const x = "123";
const nx = Number(x);
console.log(nx);

if (isNaN(x)){
    console.log(`${x} is not a number`);
}

console.log();