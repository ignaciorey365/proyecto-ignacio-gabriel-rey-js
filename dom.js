let productos = []
let carrito = []
const selecTag = document.getElementById("lista")

const Placasdevideo = {
    id:1,
    nombre:"Placas de video",
    precio: 40000
  }
  productos.push(Placasdevideo)
  const Procesadores = {
    id:2,
    nombre:"Procesadores",
    precio: 25000
  }
  productos.push(Procesadores)
  const Ram = {
    id:3,
    nombre:"Memorias Ram",
    precio: 5000
  }
  productos.push(Ram)
  const Armadas = {
    id:4,
    nombre:"Computadoras Armadas",
    precio: 100000
  }
  productos.push(Armadas)

console.log(productos)


productos.forEach((producto) => {
    const option = document.createElement('option')
    option.innerText = `${producto.nombre}: ${producto.precio}`
    option.setAttribute("id", `${producto.id}`)
    selecTag.append(option)
})

const boton = document.createElement("button")
boton.innerText = "AGREGAR PRODUCTO"
document.body.append(boton)

const boton2 = document.createElement("button")
boton2.innerText = "TERMINAR COMPRA"
document.body.append(boton2) 

boton.onclick = ()=>{
  const productoSeleccionado = productos[selecTag.selectedIndex] 
 carrito.push(productoSeleccionado)
}

boton2.onclick = () =>{
  console.log(carrito)
  let totalCompra = 0 
  carrito.forEach((prod)=>{
    totalCompra = totalCompra + prod.precio
})
/* alert(`El Precio Total a Pagar es ${totalCompra}`) */
  const p = document.createElement("p")
  p.innerText = `El Precio Total a Pagar es ${totalCompra}`
  document.body.append(p)
}

