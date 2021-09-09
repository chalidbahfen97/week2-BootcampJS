import Product from "./product.js";

const prod1 = new Product(1,"Samsung A1","HP",2500000,3,7500000);
const prod2 = new Product(2,"Dell Ultrabook","COMPUTER",7850000,2,15700000);
const prod3 = new Product(3,"Mesin Cuci LG","ELECTRONIC",3500000);
const prod4 = new Product(4,"Iphone 12","HP",6000000,2,1200000);
const prod5 = new Product(5,"Asus Laptop","COMPUTER",6500000,4,2600000);

const listProduct = [prod1,prod2,prod3,prod4,prod5];
/*
console.log(prod1.toString());
console.log(prod2.toString());
console.log(prod3.toString());
console.log(prod4.toString());
console.log(prod5.toString());
*/

const totalProduct = listProduct.reduce((sum,jmlHarga) => sum + jmlHarga.subTotal,0);
console.log(`Total = Rp.${totalProduct}`);

console.log();