import"./main.722ffefe.js";import{c as u,a as h,b as p,d as i}from"./conversiones.e4bd61e2.js";document.getElementById("formulario-amortizacion").addEventListener("submit",function(l){l.preventDefault();const m=document.getElementById("tabla-amortizacion"),s=document.getElementById("datos-amortizacion"),t=l.target;if(t.checkValidity()){const a=parseFloat(t.valorDeuda.value),c=parseInt(t.numeroPagos.value),d=t.modalidadPago.value,o=parseFloat(t.interes.value),n=t.modalidadInteres.value,e=u(d,o,n),r=h(a,e,c);v(a,c,r,e,m,s)}});document.getElementById("formulario-capitalizacion").addEventListener("submit",function(l){l.preventDefault();const m=document.getElementById("tabla-capitalizacion"),s=document.getElementById("datos-capitalizacion"),t=l.target;if(t.checkValidity()){const a=parseFloat(t.valorCapitalizable.value),c=parseInt(t.numeroPagos.value),d=t.modalidadPago.value,o=parseFloat(t.interes.value),n=t.modalidadInteres.value,e=u(d,o,n),r=p(a,e,c);f(a,c,r,e,m,s)}});const v=(l,m,s,t,a,c)=>{let d=0,o=l,n=0,e=0,r=0;for(a.innerHTML="",a.insertAdjacentHTML("beforeend",`<thead>
            <tr>
                <th scope="col">Periodo</th>
                <th scope="col">Saldo</th>
                <th scope="col">Interes</th>
                <th scope="col">Cuota</th>
                <th scope="col">Amortizaci\xF3n</th>
            </tr>
        </thead><tbody>`);d<=m;)a.insertAdjacentHTML("beforeend",'<tr><th scope="row">'+d+"</th><td>"+i(o)+"</td><td>"+i(n)+"</td><td>"+i(e)+"</td><td>"+i(r)+"</td></tr>"),n=o*t,o<e?e=o+n:d==0&&(e=s),r=e-n,o-=r,d++;a.insertAdjacentHTML("beforeend","</tbody>"),c.classList.remove("invisible")},f=(l,m,s,t,a,c)=>{let d=0,o=s,n=0,e=s,r=s;for(a.innerHTML="",a.insertAdjacentHTML("beforeend",`<thead>
            <tr>
                <th scope="col">Periodo</th>
                <th scope="col">Saldo</th>
                <th scope="col">Interes</th>
                <th scope="col">Cuota</th>
                <th scope="col">Incremento</th>
            </tr>
        </thead><tbody>`);parseInt(o.toFixed(0))<=l;)a.insertAdjacentHTML("beforeend",'<tr><th scope="row">'+d+"</th><td>"+i(o)+"</td><td>"+i(n)+"</td><td>"+i(e)+"</td><td>"+i(r)+"</td></tr>"),n=o*t,o<e?e=o+n:d==0&&(e=s),r=e+n,o+=r,d++;a.insertAdjacentHTML("beforeend","</tbody>"),c.classList.remove("invisible")};
