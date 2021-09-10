import Product from "./product.js";

const prod1 = new Product(1,"Samsung A1","HP",2500000,3);
const prod2 = new Product(2,"Dell Ultrabook","COMPUTER",7850000,2);
const prod3 = new Product(3,"Mesin Cuci LG","ELECTRONIC",3500000);
const prod4 = new Product(4,"Iphone 12","HP",6000000,2);
const prod5 = new Product(5,"Asus Laptop","COMPUTER",6500000,4);

// prod1.setPrice(1000);
// prod1.setPriceJmlBeli(200,20);

let listProduct = [];

//add product 
function addToProduct(product) {
    listProduct = [...listProduct,product];
    return listProduct;
}

addToProduct(prod1);
addToProduct(prod2);
addToProduct(prod3);
addToProduct(prod4);
addToProduct(prod5);

//display all product
function findAllProduct(array=[]) {
    return array;
}
console.log(findAllProduct(listProduct));

//anonymous function
(hello)=>{
    console.log(hello);
}

//filter by category
function listProductByCategory(category) {
    return listProduct.filter((el) => el.category === category);
}
console.log(listProductByCategory("HP"));
console.log(listProductByCategory("COMPUTER"));
console.log(listProductByCategory("ELECTRONIC"));

//hitung total
const totalProduct = listProduct.reduce((sum,jmlHarga) => sum + jmlHarga.subTotal,0);
console.log(`Total = Rp.${totalProduct}`);

//hitung total + discount
const subTotalDiscount = listProduct.reduce((sum,val) =>{
    if(val.jumlahBeli > 1 ){
        return sum + (val.subTotal - (val.subTotal * 10/100));
    }else{
        return sum + val.subTotal;
    }
},0)
console.log(`Total tagihan + discount = Rp. ${subTotalDiscount}`);

//hitung total + discount with ternary
const subTotalDiscount2 = listProduct.reduce((sum,val) =>
(val.jumlahBeli > 1) ? sum + (val.subTotal - (val.subTotal * 10/100)) : (sum + val.subTotal),0);

console.log(`Total tagihan + discount = Rp. ${subTotalDiscount2}`);


/*
listProduct = [...listProduct,prod1]
listProduct = [...listProduct,prod2]
listProduct = [...listProduct,prod3]
listProduct = [...listProduct,prod4]
listProduct = [...listProduct,prod5]
*/

console.log(prod1.toString());
console.log(prod2.toString());
console.log(prod3.toString());
console.log(prod4.toString());
console.log(prod5.toString());

console.log();