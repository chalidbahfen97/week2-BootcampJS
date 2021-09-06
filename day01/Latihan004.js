function getSalesTax(price , tax){
    let total;
    if(isNaN(price , tax)){
        return `Price harus dalam angka`
    } else if(isNaN(tax)){
        return `Pajak harus dalam angka`
    } else{
       // console.log(`Price & Pajak harus dalam angka`);
    }

    total = price + (tax / 100);
    return `\t Total Sales : Rp.${price}
            Pajak : ${tax / 100}
            Total Harga + Pajak : ${total}`;
}
console.log(getSalesTax(4500,5));
console.log();