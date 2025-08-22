// Tenemos un li de productos

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

const li = document.getElementById("lista-de-productos"); //se agrega el punto y como y $
const $i = document.querySelector(".input");
const botonDeFiltro = document.querySelector("button"); //muevo este boton

function displayProductos(productos) {
  li.innerHTML = ""; //antes de agregar a la lista esta vacio

  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div"); //agregue ; faltante
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].img);

    //const li = document.createElement("");
    //li.innerHTML ;

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
  

  


}

displayProductos(productos); //muestra los productos antes

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);//se agrega display para que muestre los productos filtrados
  

  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div");
  //   d.classList.add("producto");

  //   var ti = document.createElement("p");
  //   ti.classList.add("titulo");
  //   ti.textContent = productosFiltrados[i].nombre;

  //   var imagen = document.createElement("img");
  //   imagen.setAttribute("src", productosFiltrados[i].img);

  //   d.appendChild(ti);
  //   d.appendChild(imagen);

  //   li.appendChild(d);
  // } 

  //comento codigo repetido
};

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
