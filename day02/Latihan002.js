function tagihanKomik(startDate,endDate,jmlKomik) {
    let totalHari, totalHariDalamMili, totalKomik, totalTagihan;
    const tglPinjam = new Date(startDate);
    const tglBalik = new Date(endDate);

    if(tglPinjam.toString().includes("Invalid Date")){
        return `${tglPinjam} tidak valid`
    }

    if(tglBalik.toString().includes("Invalid Date")){
        return `${tglBalik} tidak valid`
    }

    if(jmlKomik > 10){
        return `Maksimal Peminjaman 10 Komik`;
    }

    totalHariDalamMili= (tglBalik - tglPinjam);
    const miliSecond = 1000 * 60 * 60 * 24;
    totalHari = totalHariDalamMili/miliSecond;
    

    totalKomik = jmlKomik * 2500;
    totalTagihan = totalHari * totalKomik;

    return `\t   /**
                Total Hari = ${totalHari}
                Total Komik = ${jmlKomik} x 2500
                -----------------------
                Total Tagihan = ${totalTagihan}
            */`;
}
console.log(tagihanKomik("09-03-2021","09-07-2021",4));
console.log();