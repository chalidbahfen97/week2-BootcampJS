function elapsedTime(second){
    let hari, jam, menit, detik, sisa;
    
    if(isNaN(second)){
        return `${second} is not a number`
    }
    
    hari = parseInt(second/86400);
    sisa = second % 86400;

    jam = parseInt(sisa/3600);
    sisa = sisa % 3600;

    menit = parseInt(sisa/60);
    detik = sisa % 60;

    return`${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik `;
}

console.log(elapsedTime(700005));
console.log();