function totalGaji(gaji1,gaji2,gaji3){
    totalGaji1 = gaji1 + ((gaji1 * 2)/100);
    totalGaji2 = gaji2 + ((gaji2 * 5)/100);
    totalGaji3 = gaji3+ ((gaji3 * 10)/100);
    seluruhTotal = totalGaji1 + totalGaji2 + totalGaji3;

    return `\t Total Gaji yang harus dibayar :
        Emp1 : ${gaji1} + Pajak (2%) = ${totalGaji1}
        Emp2 : ${gaji2} + Pajak (5%) = ${totalGaji2}
        Emp3 : ${gaji3} + Pajak (10%) = ${totalGaji3}
        Total : ${seluruhTotal}`;
}
console.log(totalGaji(500,2000,12000));
console.log();