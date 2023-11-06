// Escribe tu código aquí:
class Product {
    constructor(name, price, quantily) {
        this.name = name
        this.price = price
        this.quantily = quantily
    }
    get quantily() {
        return this._quantily
    }
    set quantily(newQuantity) {
        this._quantily = newQuantity
    }
    get totalPrice() {
        return this.price * this._quantily
    }
}
const product = new Product('Hat', 19.99, 2)
console.log('Total Price: ', product.totalPrice)

product.quantily = 5
console.log('Updated Total Price: ', product.totalPrice)