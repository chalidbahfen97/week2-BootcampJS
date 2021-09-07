function payment(tglBayar,tglJatuhTempo,angsuran){
    let totalHari, totalHariDalamMili, totalDenda, totalTagihan ;
    const payDate = new Date(tglBayar);
    const dueDate = new Date(tglJatuhTempo);

    if(payDate.toString().includes("Invalid Date")){
        return `${payDate} tidak valid`
    }

    if(dueDate.toString().includes("Invalid Date")){
        return `${dueDate} tidak valid`
    }

    if(angsuran < 3500000){
        return `Angsuran anda kurang dari Rp. 3.500.000 . Silahkan isi sesuai angsuran`;
    }

    if(payDate > dueDate){
        totalHariDalamMili= (payDate - dueDate);
        const miliSecond = 1000 * 60 * 60 * 24;
        totalHari = totalHariDalamMili/miliSecond;
        totalDenda = angsuran * ((totalHari * 2)/1000);
        totalTagihan = angsuran + totalDenda;

        return `\t/**
                    -----------------------------------
                    Tanggal Bayar : ${tglBayar}
                    Jatuh Tempo : ${tglJatuhTempo}
                    -----------------------------------
                    Tagihan Bulan 9,2021 = Rp.${angsuran}
                    Denda = Rp.${totalDenda} (terlambat ${totalHari} hari)
                    Total = Rp.${totalTagihan} (lunas)
                    -----------------------------------
                    Kwitansi ini sebagai alat bukti pembayaran
                   */ `

    } else {
        totalHariDalamMili= (dueDate - payDate);
        const miliSecond = 1000 * 60 * 60 * 24;
        totalHari = totalHariDalamMili/miliSecond;
        if (totalHari > 5) {
            return `Tagihan Bulan 9 belum tersedia`;
        }
        totalDenda = 0;
        totalTagihan = angsuran + totalDenda;

        return `\t/**
                    -----------------------------------
                    Tanggal Bayar : ${payDate}
                    Jatuh Tempo : ${dueDate}
                    -----------------------------------
                    Tagihan Bulan 9,2021 = Rp.${angsuran}
                    Denda = Rp.${totalDenda} (terlambat ${totalHari-totalHari} hari)
                    Total = Rp.${totalTagihan} (lunas)
                    -----------------------------------
                    Kwitansi ini sebagai alat bukti pembayaran
                   */ `
    }
}
console.log(payment("09-27-2021","09-27-2021",3500000));
console.log();