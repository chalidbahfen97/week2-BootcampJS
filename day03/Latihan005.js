const numbers = [2, 42, 5, 304, 1, 13];
function maxNumber(array){
    array = numbers[0];
    let result = Math.max(...array);
    return result;
}
console.log(`output = ${result}`);
console.log();