const product1 ={
    title : "Mouse",
    description : "Mouse Inalámbrico Óptico Led Recargable Silencioso Bluetooth Portátil Usb",
    price : 5000,
    thumbnail : "Mouse Inalámbrico - Bluetooth & USB",
    code : 101,
    stock : 7,
}
class ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}
const product2 = new ProductManager("Auriculares" , "Auriculares inalámbricos bluetooth con 12 hrs de autonomía", 8000, "Auriculares Inalámbricos - Bluetooth Fast charge", 102, 15)
console.log(product2);

//addProduct();

//getProduct();

//getProductById();