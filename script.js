let hola = "holaaa";


let $openClose = document.getElementById("open-close"),
      $aside = document.getElementById("aside1");

$openClose.addEventListener("click",()=>{
    console.log(hola);
    $aside.classList.toggle("desplegar")
})



const $openClose2 = document.getElementById("open-close2"),
      $aside2 = document.getElementById("aside2");

$openClose2.addEventListener("click",()=>{ 
    console.log(hola); 
    $aside2.classList.toggle("desplegar2")
})



console.log(hola);