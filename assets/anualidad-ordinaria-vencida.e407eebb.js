import"./main.722ffefe.js";const u=document.getElementById("valor-presente"),s=document.getElementById("valor-furuto");u.addEventListener("submit",function(e){e.preventDefault();const n=u.valorcuota.value,o=parseFloat(u.interes.value),t=parseFloat(u.tiempo.value),l=u.vp.value;f(n,o,t,l)});s.addEventListener("submit",function(e){e.preventDefault();const n=s.valorcuotaf.value,o=parseFloat(s.interesf.value),t=parseFloat(s.tiempof.value),l=s.vf.value;c(n,o,t,l)});const c=(e,n,o,t)=>{e!=0&&t==0?d(e,n,o):e==0&&t!=0?m(e,n,o,t):e<0||n<0||o<0||t<0?(alert("ingrese solo valores positivos"),document.getElementById("ValorFuturo").innerHTML=null):e==0||n==0||o==0?(alert("ingrese todos los valores"),document.getElementById("ValorFuturo").innerHTML=null):e!=0&&t!=0&&(alert("ingrese  solo un valor "),document.getElementById("ValorFuturo").innerHTML=null)};function d(e,n,o){let t=n/100;var l=Math.pow(1+t,o),r=e*((l-1)/t);document.getElementById("ValorFuturo").innerHTML=r}function m(e,n,o,t){let l=n/100;var r=Math.pow(1+l,o);let a=t/((r-1)/l);console.log(r,a),document.getElementById("ValorFuturo").innerHTML=a}const f=(e,n,o,t)=>{if(console.log(e,n,o,t,"estos son los valores"),e==0&&t!=0)g(e,n,o,t);else if(e!=0&&t==0){let i=n/100;var l=-1*o,r=Math.pow(1+i,l),a=e*((1-r)/i);document.getElementById("ValorPresente").innerHTML=a}else e==0||n==0||o==0?(alert("ingrese todos los valores"),document.getElementById("ValorPresente").innerHTML=null):e<0||n<0||o<0||t<0?(alert("ingrese solo valores positivos"),document.getElementById("ValorPresente").innerHTML=null):e!=0&&t!=0&&(alert("debe ingresar un solo valor"),document.getElementById("ValorPresente").innerHTML=null)};function g(e,n,o,t){let l=n/100;var r=-1*o,a=Math.pow(1+l,r);let i=t/((1-a)/l);document.getElementById("ValorPresente").innerHTML=i}
