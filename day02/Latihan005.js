for (let i = 0 ; i < 6 ; i++) {
    let concat = "";
    for (let j = i ; j < 6 ; j++) {
        concat = j-i+ " "+ concat;
    }
    console.log(concat.replace("0",""));
    console.log();
}

console.log("---------------------------");
console.log(" ");

for (let i = 7 ; i >= i ; i--) {
    let concat = "";
    for (let j = 1 ; j <= i ; j++) {
        concat = i-j+ " "+ concat;
    }
    console.log(concat.replace("0",""));
    console.log();
}