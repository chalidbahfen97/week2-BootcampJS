function getPersentase(income1,income2){
    let selisih,rasio,persen;
    if(isNaN (income1 || income2)){
        return `${income1} dan ${income2} harus angka`
    }

    selisih = income2 - income1;
    rasio = selisih / income1;
    persen = Math.floor(rasio * 100);

    if(persen >= 0){
        return `total kenaikan income ${persen}%`
    } else{
        return `total penurunan income ${persen}%`
    }
}
console.log(getPersentase(75000,65000));
console.log();