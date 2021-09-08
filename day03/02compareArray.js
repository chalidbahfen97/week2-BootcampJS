const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
const fruitNamesD = ['mangga', 'anggur', 'alpukat', 'apel'];

function isArraysEqual(array1,array2) {  
    if (!Array.isArray(array1) || !Array.isArray(array2) ) {
        return false;
    } else if (array1 === array2) {
        return true;
    } else if (array1.length !== array2.length){
        return false;
    }else{
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            } 
        }
    }
    return true;
}

console.log(isArraysEqual(fruitNamesA,fruitNamesB));
console.log(isArraysEqual(fruitNamesA,fruitNamesC));
console.log(isArraysEqual(fruitNamesC.sort(),fruitNamesD.sort()));