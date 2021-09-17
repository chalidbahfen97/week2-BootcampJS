const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam", "Wortel", "Kangkung", "Mangga", "Tomat", "Kembang Kol", "Nangka", "Timun"];


const fusionArray = [...array1,...array2].reduce((acc,val) => acc.set(val,(acc.get(val) || 0) + 1) , new Map() );
const same = [...fusionArray].filter(([k,v]) => v > 1).flat().filter(v => isNaN(v))
const diff =  [...fusionArray].filter(([k,v]) => v === 1).flat().filter(v => isNaN(v))
console.log();