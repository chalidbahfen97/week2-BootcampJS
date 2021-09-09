export default class Product{
    constructor(prodId,prodName,category="ELECTRONIC",price,jumlahBeli = 1,subTotal){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.jumlahBeli = jumlahBeli;
        this.subTotal = subTotal;
    }

    toString(){
        return `${this.prodId}. ${this.prodName}, category : ${this.category}, Harga : ${this.price}, Qty : ${this.jumlahBeli}, Subtotal = ${this.price * this.jumlahBeli}`
    }


}