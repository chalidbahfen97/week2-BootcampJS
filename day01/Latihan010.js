function convertToRupiah(value,currencyType){
    let mataUang;

    if(currencyType === "yen"){
        mataUang = 130.12;
    } else if(currencyType === "usd"){
        mataUang = 14382.5;
    }else if(currencyType === "euro"){
        mataUang = 16000;
    } else{
        return "no match type currency";
    }

    totalUang = value * mataUang;

    return `${value} ${currencyType} = Rp. ${totalUang}`;
}
console.log(convertToRupiah(1000,"yen"));
console.log();