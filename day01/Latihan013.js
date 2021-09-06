function isPalindrome(number){
    const numberStr = number.toString();

    if(isNaN(numberStr)){
        return `${number} is not a number`;
    } else if (numberStr.charAt(0) === numberStr.charAt(3) && numberStr.charAt(1) === numberStr.charAt(2)){
        return `${number} is a Palindrome`;
    } else {
        return `${number} is not a Palindrome`;
    }
}

console.log(isPalindrome(8888));