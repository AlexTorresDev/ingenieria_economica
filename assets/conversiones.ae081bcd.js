import"./main.722ffefe.js";import{e as i}from"./conversiones.e4bd61e2.js";const d=document.getElementById("formulario-conversiones"),a=document.getElementById("resultado"),l=document.getElementById("texto-resultado");d.addEventListener("submit",function(t){t.preventDefault();const e=t.target;if(e.checkValidity()){const n=parseFloat(e.interes.value),o=e.modalidadInteresOrigen.value,s=e.modalidadInteresDestino.value,r=i(n,o,s);l.innerText=`El inter\xE9s convertido es ${r}%`,a.classList.remove("invisible")}});
