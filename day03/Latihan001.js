function countValley(hiking) {
    let step = 0 , count = 0 ;
    let arrays = hiking.split("");
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === "U") {
            step++;
        } else if (arrays[i] === "D") {
            step--;
        } else {
            return `Not Hiking Mountain`;
        }
        
        if (step === 0 && arrays[i] === "U") {
            count++;
        }
    }
    return `${count} gunung`;
}

console.log(countValley("UDDDUDUU"));