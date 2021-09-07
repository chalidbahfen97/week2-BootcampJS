function isPalindrome(word) {
    const wordArr = word.toUpperCase().split("");

    for (let i = 0 ; i < word.length/2 ; i++) {
        if(wordArr[i] !== wordArr[wordArr.length - 1 - i]){
            return `tidak palindrome`;
        }
    }
    return `palindrome`;
}
console.log(isPalindrome("kasur itu rUsak"));
console.log();