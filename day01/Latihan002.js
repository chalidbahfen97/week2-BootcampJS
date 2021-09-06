function calculateDistance(a , t){
    let S;
    if(a && t <= 0){
        return `Acceleration or Time must be >= 0`
    } else if (isNaN(a , t)) {
        return `Input must a number`
    }

    S = (a*t*t)/2;

    return `Jarak yang ditempuh adalah ${S} meter/s`;
}

console.log(calculateDistance(50 , 60));
console.log();