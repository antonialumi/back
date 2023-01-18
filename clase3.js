class ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
    
    addProduct(){
        console.log(`Se agregó ${this.title} al carrito`)
    }

    getProducts(){
        console.log(`${ProductManager}`)
    }

    getProductById(){
        console.log(`El código es ${this.code} `)
    }

    noticeStock(){
        console.log(`Apurate a comprar ${this.title} tan solo quedan ${this.stock} en stock!! `)
    }

    
}
const product1 = new ProductManager("Mouse", "Mouse Inalámbrico Óptico Led Recargable Silencioso Bluetooth Portátil Usb", 5000, "Mouse Inalámbrico - Bluetooth & USB", 101, 7)
const product2 = new ProductManager("Auriculares" , "Auriculares inalámbricos bluetooth con 12 hrs de autonomía", 8000, "Auriculares Inalámbricos - Bluetooth Fast charge", 102, 15);

console.log(product2);
console.log(product1);

product1.getProductById();
product2.getProductById();

product1.addProduct();
product2.addProduct();

product1.noticeStock();
product2.noticeStock();

getProducts();
