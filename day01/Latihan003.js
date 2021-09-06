function fareinheitToKelvin(fareinheit){
    let kelvin;
    if(isNaN(fareinheit)){
        return `Farenheit must a number`;
    }

    kelvin = parseInt(fareinheit + 459.67)/1.8;

    return `Convert Fareinheit (${fareinheit}) to Kelvin = ${kelvin}`;
}

console.log(fareinheitToKelvin(45));
console.log();