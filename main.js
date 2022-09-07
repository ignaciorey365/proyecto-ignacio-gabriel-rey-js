window.addEventListener("load", function(){
  alert("La pagina esta cargada")
});

let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Placas de Video - 2.Procesadores - 3.Memorias Ram - 4.Computadoras Armadas'
  )
)
let seguirComprando = true
let decision
let productos = []
let carrito = []

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

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + Placasdevideo.precio
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + Procesadores.precio
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + Ram.precio
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + Armadas.precio
  } 
    
  const productoSolicitado = productos.find(prod=>prod.id===productoSeleccionado)
  if(productoSolicitado){
    totalCompra = totalCompra +productoSolicitado.precio
  }
  else {
    productoSeleccionado = parseInt(prompt('Ingresa un producto existente: 1.Placas de Video - 2.Procesadores - 3.Memorias Ram - 4.Computadoras Armadas'))
    continue
  }

  /* while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
      carrito.push(productos[0])
    } else if (productoSeleccionado === 2) {
      carrito.push(productos[1])
    } else if (productoSeleccionado === 3) {
      carrito.push(productos[2])
    } else if (productoSeleccionado === 4) {
      carrito.push(productos[3])
    } else {
      productoSeleccionado = parseInt(
        prompt(
          'Ingresa un producto existente: 1.Placas de Video - 2.Procesadores - 3.Memorias Ram - 4.Computadoras Armadas'
          )
        )
      continue
    } */


  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Placas de Video - 2.Procesadores - 3.Memorias Ram - 4.Computadoras Armadas'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

function calcularPrecioConDescuento(valor) {
  let descuento = 0
  if (valor <= 1000) {
    descuento = 10
  } else if (valor > 1000 && valor <= 1500) {
    descuento = 15
  } else if (valor > 1500 && valor <= 2000) {
    descuento = 20
  } else {
    descuento = 25
  }
  let valorDescuento = valor * (descuento / 100)
  valor = valor - valorDescuento
  return valor
}

let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: ' + valorConDescuento)

function calcularPrecioConImpuesto(valor) {
  const impuestos = valor * (8 / 100)
  return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: ' + valorFinalConImpuesto)

class CalculadoraPrecioFinal {
  constructor(total) {
    this.total = total
  }

  calcularPrecioConDescuento() {
    let descuento = 0
    if (this <= 1000) {
      descuento = 10
    } else if (this > 1000 && this <= 1500) {
      descuento = 15
    } else if (this > 1500 && this <= 2000) {
      descuento = 20
    } else {
      descuento = 25
    }
    let valorDescuento = this * (descuento / 100)
    let valor = this.total - valorDescuento
    return valor
  }

  calcularPrecioConImpuesto(){
    const PrecioConDescuento = this.calcularPrecioConDescuento()
    const impuestos = PrecioConDescuento * (8 / 100)
  return PrecioConDescuento + impuestos
  }

}

const calculadora = new CalculadoraPrecioFinal(totalCompra)
console.log(calculadora.calcularPrecioConImpuesto())