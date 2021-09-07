function howManyKabisat(tahunAwal,tahunAkhir){
    const kabisat = [];
    for (let i = tahunAwal ; i <= tahunAkhir; i++) {
        if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
            kabisat.push(i);
        }
    }
    return `Total Tahun Kabisat : ${kabisat.length} tahun = ${kabisat}`
}
console.log(howManyKabisat(1997,2021));