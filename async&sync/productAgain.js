export default class productAgain{
    constructor(prodId,prodName,category,price=0,jumlahBeli = 1){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.jumlahBeli = jumlahBeli;
        this.subTotal = this.price * this.jumlahBeli;
    }

    setPrice(price){
        this.price = price;
        return this.subTotal = this.price * this.jumlahBeli;
    }

    setPriceJmlBeli(price,jumlahBeli){
        this.price = price;
        this.jumlahBeli = jumlahBeli;
        return this.subTotal = this.price * this.jumlahBeli;
    }

    toString(){
        return `${this.prodId}. ${this.prodName}, category : ${this.category}, 
        Harga : ${this.price}, Qty : ${this.jumlahBeli}, Subtotal : ${this.subTotal}`
    }


}