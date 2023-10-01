
/*PAGINA DE INICIO*/
let boton = document.getElementById("btnAdd");
// Agrega un event listener para el clic en el botón
boton.addEventListener("click", function () {
  //redirecciono al index
  window.location.href = "index.html";
});



/* FUNCION DE LOS DESPEGABLES */
/*menu hambur*/

let $openClose = document.getElementById("open-close"),
  $aside = document.getElementById("aside");

$openClose.addEventListener("click", () => {
  console.log("Clic en open-close");
  $aside.classList.toggle("desplegar");
});

/*perfil despegable */
let $openClose2 = document.getElementById("open-close2"),
  $aside2 = document.getElementById("aside2");

$openClose2.addEventListener("click", () => {
  console.log("Clic en open-close2"); // Agrega esta línea
  $aside2.classList.toggle("desplegar2");
});

let hola = "holaaaa";
console.log(hola);

// let burgerMain= document.getElementById("main-burger");
// let burger= document.getElementById("burger");

// burger.addEventListener("click",(e)=>{
//     burgerMain.classList.toggle("hidden");
// })




