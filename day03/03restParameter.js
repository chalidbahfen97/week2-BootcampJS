function cetakAngka(n1,n2,n3,n4,ns,n6) {
    return n1 + " " + n2 + " " + n3 + " " + n4;
}

function cetakNumber(...numbers) {
    return numbers + " "
}

function sumNumber(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        sum = sum +numbers[i];
    }
    return sum
}

console.log(cetakAngka(1,2,5,4));
console.log(cetakNumber(4,5,7,10,98,12,12,343,3434));
console.log(sumNumber(1,2,5,4));