let servicios = [
    {
        id: 1, 
        nombre:'Catering', 
        precio: 7000,
        imagen: "./imagenes/catering.jpg"
    },
    {
        id: 2, 
        nombre: 'Decoración', 
        precio: 1000,
        imagen: "./imagenes/decoracion.jpg"
    },
    {
        id: 3, 
        nombre: 'Musicalización', 
        precio: 800,
        imagen: "./imagenes/musicalizacion.jpg"
    },
    {
        id: 4,
        nombre: 'Animación',
        precio: 700,
        imagen: "./imagenes/animacion.jpg"
    },
    {
        id: 5, 
        nombre: 'Mesa Dulce', 
        precio: 1800,
        imagen: "./imagenes/mesadulce.jpg"
    },
    {
        id: 6,
        nombre: 'Cotillón',
        precio: 1500,
        imagen: "./imagenes/cotillon.jpeg"
    },
    {
        id: 7, 
        nombre: 'Decoración + Cotillón + Animación', 
        precio: 2600,
        imagen: "./imagenes/combo1.jpg",
    },
    {
        id: 8, 
        nombre: 'Decoración + Musicalización', 
        precio: 1500,
        imagen: "./imagenes/combo2.jpeg"
    },
    {
        id: 9, 
        nombre: 'Todos nuestros servicios', 
        precio: 11200,
        imagen: "./imagenes/combo3.png"
    }
    
]

let invitados = document.getElementById('inputInvitados')
invitados.addEventListener('input',()=>{
    console.log(invitados.value)
    })

const contenedor = document.getElementById("container")
servicios.forEach((servicio, indice)=>{
    let card = document.createElement("div")
    card.classList.add("card", "col-sm-12", "col-md-6", "col-lg-4")
    card.innerHTML = `<div class="col">
    <div class="card">
      <img src="${servicio.imagen}" class="card-img-top" alt="imagen del servicio">
      <div class="card-body">
        <h3 class="card-title">${servicio.nombre}</h3>
        <p class="card-text">$ ${servicio.precio} por persona</p>
        <a href="#carrito" class="btn bg-deeppink w-100 btn-comprar" onClick="cargarCarrito(${indice})">Contratar</a>
      </div>
    </div>
  </div>`
  contenedor.appendChild(card)
})

let carritoFinal = []
if (localStorage.getItem("carritoFinal")){
    carritoFinal = JSON.parse(localStorage.getItem("carritoFinal"))
    dibujarCarrito()
}

const cargarCarrito = (indice) => {
    const servicioAgregado = servicios[indice]
    carritoFinal.push(servicioAgregado) 
    actualizarStorage()
    dibujarCarrito()
    }

const modeloDeCarrito = document.getElementById("carrito")
    const dibujarCarrito = () => {
        const containerCarrito = document.createElement("div")
        carritoFinal.forEach((elemento, indice) => {
        containerCarrito.classList.add("servicio-carrito", "servicio-detalle", "cart")
        containerCarrito.innerHTML=`<img class="car-img" src="${elemento.imagen}"/>
        <div class="product-details">${elemento.nombre}</div>
        <div class="product-details"> Invitados: ${invitados.value}
        </div>
        <div class="product-details"> Precio: ${elemento.precio}
        </div>
        <div class="product-details"> Subtotal $: ${invitados.value * elemento.precio}
        </div>
        <button class="btn btn-color" id="remove-product" onClick="eliminarServicio(${indice})">Eliminar Servicio</button>
        `
        modeloDeCarrito.appendChild(containerCarrito)
        
    })
    
}

const eliminarServicio = (indice) => {
    carritoFinal.splice(indice, 1)
    const modeloDeCarrito = document.getElementById("carrito")
    modeloDeCarrito.remove(indice)
    
}

const actualizarStorage = (carritoFinal) => {
    localStorage.setItem("carritoFinal", JSON.stringify(carritoFinal))
}

