function sumDigit(n){
    let total;

    if(n >= 10000){
        return `${n} harus lebih kecil daripada 10000`
    } else if(isNaN(n)){
        return `${n} is not a number, try again...`
    }

    total = 0;
    while(n >=1){
        total += parseInt(n%10)
        angka = parseInt(n/10)
    }
    return total;
}
console.log(sumDigit(1234));