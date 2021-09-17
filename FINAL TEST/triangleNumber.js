for (let i = 0 ; i < 8 ; i++) {
    let concat = "";
    for (let j = 0 ; j < i ; j++) {
        concat = concat + " " + (j+i);
    }
    console.log(concat);
    console.log();
}

for (let i = 0 ; i < 8 ; i++) {
    let concat = "";
    for (let j = 0 ; j < i ; j++) {
        concat = concat + " " + (j+i+4);
    }
    console.log(concat);
    console.log();
}