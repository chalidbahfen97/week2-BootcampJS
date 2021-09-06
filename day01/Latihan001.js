function getAreaCircle(radius){
    if(radius <= 0){
        return `radius ${radius} <= 0, try higher`
    } else if (isNaN(radius)) {
        return `Inputan harus dalam angka`
    }

    return getAreaCircle = parseFloat(Math.PI * Math.pow(radius,2));
}

console.log(getAreaCircle(5));
console.log();