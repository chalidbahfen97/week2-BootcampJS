function citiesSlice(arrays,cityBetween) {
    const indexCity = arrays.indexOf(cityBetween);
    const citySlice = [...arrays.slice(0,indexCity),...arrays.slice(indexCity+1)];

    return citySlice;
}
const cities =  ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];
console.log(citiesSlice(cities,"bogor")); 
console.log(citiesSlice(cities,"jakarta")); 