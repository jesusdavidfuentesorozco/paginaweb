const display=document.getElementById('display');
let current='0', previous=null, operator=null, waiting=false;
function update(){display.value=current}
function format(n){return Number.isInteger(n)?String(n):String(parseFloat(n.toFixed(10)))}
function calculate(a,b,op){a=parseFloat(a);b=parseFloat(b);if(op==='+')return a+b;if(op==='-')return a-b;if(op==='*')return a*b;if(op==='/')return b===0?'Error':a/b;return b}
function number(n){if(waiting){current=n;waiting=false}else if(current==='0')current=n;else current+=n;update()}
function decimal(){if(waiting){current='0.';waiting=false}else if(!current.includes('.'))current+='.';update()}
function choose(op){if(operator&&waiting){operator=op;return}if(previous===null)previous=parseFloat(current);else if(operator){const r=calculate(previous,current,operator);if(r==='Error')return error();previous=r;current=format(r);update()}operator=op;waiting=true}
function result(){if(operator===null||previous===null)return;const r=calculate(previous,current,operator);if(r==='Error')return error();current=format(r);previous=null;operator=null;waiting=true;update()}
function clearCalc(){current='0';previous=null;operator=null;waiting=false;update()}
function del(){if(waiting||current==='Error')return;current=current.length>1?current.slice(0,-1):'0';update()}
function error(){current='Error';previous=null;operator=null;waiting=true;update()}
document.querySelectorAll('.calculator-btn').forEach(btn=>btn.addEventListener('click',()=>{const a=btn.dataset.action,v=btn.dataset.value;if(a==='number')number(v);else if(a==='decimal')decimal();else if(a==='operator')choose(v);else if(a==='equals')result();else if(a==='clear')clearCalc();else if(a==='delete')del()}));
document.addEventListener('keydown',e=>{if(/[0-9]/.test(e.key))number(e.key);else if(e.key==='.')decimal();else if(['+','-','*','/'].includes(e.key))choose(e.key);else if(e.key==='Enter'||e.key==='='){e.preventDefault();result()}else if(e.key==='Escape')clearCalc();else if(e.key==='Backspace')del()});
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();const text=document.getElementById('searchInput').value.trim();document.getElementById('searchMessage').textContent=text?`Buscando: ${text}`:'Escribe algo para buscar.'});
update();
