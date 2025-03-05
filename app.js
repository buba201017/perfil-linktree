
const botonDOM=document.querySelector("#botonCambio");
botonDOM.addEventListener("click",()=>{
    let nombre=prompt("Ingrese el nombre que quiere poner");
    let segundaLinea=prompt("Ingrese lo que quiere que diga en la segunda linea:");
    const nombreDOM=document.querySelector("#nombre");
    const lineaDOM=document.querySelector("#texto1");
    nombreDOM.innerText=nombre;
    lineaDOM.innerText=segundaLinea;
})
