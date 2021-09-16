for (let i = 0 ; i < 6 ; i++) {
    let concat = "";
    for (let j = i ; j < 6 ; j++) {
        concat = j-i+ " "+ concat;
    }
    console.log(concat.replace("0",""));
    console.log();
}