function getSalesTax(price , tax, discount){
    let totalDiscount, priceAfterDiscount, totalTax, totalPayment;
    if(isNaN(price)){
        return `Price harus dalam angka`
    } else if(isNaN(tax)){
        return `Pajak harus dalam angka`
    } else{
       // console.log(`Price, Tax & Discount harus dalam angka`);
    }

    totalDiscount = (price * discount)/100;
    priceAfterDiscount = price - totalDiscount;
    totalTax = (priceAfterDiscount * tax)/100;
    totalPayment = priceAfterDiscount + totalTax;

    return `\t /**
                    Total Sales                : Rp. ${price}
                    Discount (${discount}%)              : Rp. ${totalDiscount}
                    PriceAfterDiscount         : Rp. ${priceAfterDiscount}
                    Pajak (${tax}%)                : Rp. ${totalTax}
                    -------------------------------------------------------
                    Total Payment              : Rp. ${totalPayment}
          */`;
}
console.log(getSalesTax(4500,10,5));
console.log();