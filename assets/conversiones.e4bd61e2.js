const r=[{name:"NM",value:12},{name:"NB",value:6},{name:"NT",value:4},{name:"NC",value:3},{name:"NS",value:2},{name:"MV",value:12},{name:"BV",value:6},{name:"TV",value:4},{name:"CV",value:3},{name:"SV",value:2},{name:"CM",value:12},{name:"CB",value:6},{name:"CT",value:4},{name:"CC",value:3},{name:"CS",value:2}],v=[{name:"EM",value:12},{name:"EB",value:6},{name:"ET",value:4},{name:"EC",value:3},{name:"ES",value:2},{name:"EA",value:1},{name:"PM",value:12},{name:"PB",value:6},{name:"PT",value:4},{name:"PC",value:3},{name:"PS",value:2},{name:"PA",value:1}],c=(a,t,o)=>{let e=r.filter(l=>l.name===o);t/=100,e.length>0?t/=e[0].value:e=v.filter(l=>l.name===o);const u=e[0].value;if(a!=u){const l=u,n=parseInt(a);let s=Math.pow(1+t,l);t=Math.pow(s,1/n)-1}return t},i=(a,t,o)=>{let e=v.filter(n=>n.name===t),u=v.filter(n=>n.name===o),l=v.filter(n=>n.name===o);if(a/=100,e.length==0&&l.length>0&&(e=r.filter(n=>n.name===t),a/=e[0].value,console.log("Origen es j: ",e[0],"Destino es i: ",l[0])),e.length==0&&(e=r.filter(n=>n.name===t),console.log("Origen es j: ",e[0].value)),l.length==0&&(l=r.filter(n=>n.name===o),console.log("Destino es j: ",l[0])),e[0].value!=l[0].value){const n=e[0].value,s=l[0].value;let m=Math.pow(1+a,n);a=Math.pow(m,1/s)-1,console.log("Conversi\xF3n de tasas: ",e[0])}return e.length>0&&u.length==0&&(a*=r.filter(s=>s.name===o)[0].value,console.log(`Se convierte a j
Origen es i: `,e[0],"Destino es j: ",l[0])),a*=100,a.toFixed(2)},f=(a,t,o)=>{let e=(1-Math.pow(1+t,o*-1))/t,u=a/e;return parseFloat(u.toFixed(3))},g=(a,t,o)=>{let e=(Math.pow(1+t,o)-1)/t,u=a/e;return parseFloat(u.toFixed(3))},h=a=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(a);export{f as a,g as b,c,h as d,i as e};
