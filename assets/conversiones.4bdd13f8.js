const r=[{name:"NM",value:12},{name:"NB",value:6},{name:"NT",value:4},{name:"NC",value:3},{name:"NS",value:2},{name:"MV",value:12},{name:"BV",value:6},{name:"TV",value:4},{name:"CV",value:3},{name:"SV",value:2},{name:"CM",value:12},{name:"CB",value:6},{name:"CT",value:4},{name:"CC",value:3},{name:"CS",value:2}],s=[{name:"EM",value:12},{name:"EB",value:6},{name:"ET",value:4},{name:"EC",value:3},{name:"ES",value:2},{name:"EA",value:1},{name:"PM",value:12},{name:"PB",value:6},{name:"PT",value:4},{name:"PC",value:3},{name:"PS",value:2},{name:"PA",value:1}],f=(e,l,v)=>{let n=r.filter(u=>u.name===v);l/=100,n.length>0?l/=n[0].value:n=s.filter(u=>u.name===v);const t=n[0].value;if(e!=t){const u=t,m=parseInt(e);let a=Math.pow(1+l,u);l=Math.pow(a,1/m)-1}return l},C=(e,l,v)=>{let n,t,u,m;if(n=s.filter(a=>a.name===l),t=s.filter(a=>a.name===v),e/=100,n.length>0&&t.length==0?(m=r.filter(a=>a.name===v),t=e/m[0].value):n.length==0&&t.length>0?(u=r.filter(a=>a.name===l),n=e/u[0].value):(u=r.filter(a=>a.name===l),m=r.filter(a=>a.name===v),n=e/u[0].value,t=e/m[0].value),n[0].value!=t[0].value){const a=n[0].value,o=t[0].value;let c=Math.pow(1+e,a);e=Math.pow(c,1/o)-1,e*=o}return m.length>0&&(e*=m[0].value),e*=100,e.toFixed(2)},h=(e,l,v)=>{let n=(1-Math.pow(1+l,v*-1))/l,t=e/n;return parseFloat(t.toFixed(3))},M=e=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(e);export{h as a,M as b,f as c,C as d};