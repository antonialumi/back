class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

class ProductManager{
    constructor(products = []){
        this.products = products
    }
    
    addProduct(product){
        this.products.push(product)
        console.log("Se ha ingresado el siguiente producto",product)
        return this
    }

    getProducts(){
        return this.products
    }

    getProductById(code){
        return this.products.find( product => code === product.code)
    }
    
}
const carrito = new ProductManager();


const mouseInalambrico = new Product(
    "Mouse", 
    "Mouse Inalámbrico Óptico Led Recargable Silencioso Bluetooth Portátil Usb", 
    5000, 
    "Mouse Inalámbrico - Bluetooth & USB", 
    101, 
    7)

const auricularesInalambricos = new Product(
    "Auriculares" ,
    "Auriculares inalámbricos bluetooth con 12 hrs de autonomía", 
    8000, "Auriculares Inalámbricos - Bluetooth Fast charge", 102, 15);

console.log({
carrito:carrito
    .addProduct(mouseInalambrico)
    .addProduct(auricularesInalambricos)
    .getProducts()
})

const auris = carrito.getProductById(102);

console.log({auris})


// pruebas
