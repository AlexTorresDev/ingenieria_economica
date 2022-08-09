import"./main.722ffefe.js";import{c as m,a as u,b as l}from"./conversiones.117a34d7.js";const h=document.getElementById("formulario-amortizacion"),i=document.getElementById("tabla-amortizacion"),v=document.getElementById("datos-amortizacion");h.addEventListener("submit",function(d){d.preventDefault();const t=d.target;if(t.checkValidity()){const s=parseFloat(t.valorDeuda.value),c=parseInt(t.numeroPagos.value),a=t.modalidadPago.value,o=parseFloat(t.interes.value),n=t.modalidadInteres.value,e=m(a,o,n),r=u(s,e,c);p(s,c,r,e)}});const p=(d,t,s,c)=>{let a=0,o=d,n=0,e=0,r=0;for(i.innerHTML="",i.insertAdjacentHTML("beforeend",`<thead>
            <tr>
                <th scope="col">Periodo</th>
                <th scope="col">Saldo</th>
                <th scope="col">Interes</th>
                <th scope="col">Cuota</th>
                <th scope="col">Amortizaci\xF3n</th>
            </tr>
        </thead><tbody>`);a<=t;)i.insertAdjacentHTML("beforeend",'<tr><th scope="row">'+a+"</th><td>"+l(o)+"</td><td>"+l(n)+"</td><td>"+l(e)+"</td><td>"+l(r)+"</td></tr>"),n=o*c,o<e?e=o+n:a==0&&(e=s),r=e-n,o-=r,a++;i.insertAdjacentHTML("beforeend","</tbody>"),v.classList.remove("invisible")};
