

import { Producto } from "./Producto";

let lista = new Array <Producto>

let Producto1 = new Producto("178", "Trapeador","Aseo",15000,"Colombia",5)
let Producto2 = new Producto("190", "Limpido","Aseo",35000,"Colombia",10)
let Producto3 = new Producto("189", "Escoba","Aseo",15000,"Colombia",5)
let Producto4 = new Producto("156", "Recojedor","Aseo",15000,"Colombia",8)
let Producto5 = new Producto("114", "Esponja","Aseo",20000,"Colombia",20)


lista.push(Producto1)
lista.push(Producto2)
lista.push(Producto3)
lista.push (Producto4)
lista.push(Producto5)


let valorTotal:number = 0
let cantidadProductos = lista.length

for(let i = 0; i < lista.length; i++){
    valorTotal = valorTotal + lista[i].getPrecio()
}

console.log("  ")
console.log("====================  REGISTRO DE LA EMPRESA ===========================")
console.log("La cantidad de productos es de: " + cantidadProductos + ".")
console.log("==================================================================")
console.log("El valor total de los productos es de: " + valorTotal + " pesos Colombianos.")
console.log("==================================================================")



