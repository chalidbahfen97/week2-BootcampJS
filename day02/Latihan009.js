function maxWordLength(word) {
    const array = word.split(" ")
    let max = " ";
    let result;
    for (let i = 0 ; i < array.length ; i++) {
        const word = array[i].split("")
        if(max < word.length){
            max = word.length
            result = array[i];
        }
        return result
    }
}
console.log(maxWordLength("Aku suka bootcamp sentul city"));
console.log();