import productAgain from "./productAgain.js";

const prod1 = new productAgain(1,"Samsung A1","HP",2500000,3);
const prod2 = new productAgain(2,"Dell Ultrabook","COMPUTER",7850000,2);
const prod3 = new productAgain(3,"Mesin Cuci LG","ELECTRONIC",3500000);
const prod4 = new productAgain(4,"Iphone 12","HP",6000000,2);
const prod5 = new productAgain(5,"Asus Laptop","COMPUTER",6500000,4);

let listProduct = [];

//add product
function addToCart(product) {
    if (this.price >= 3000000) {
        listProduct = [...listProduct,product]
        return listProduct;
    }
}

let payment = [`BCA`,`Shopee Pay`,`OVO`];

console.log();