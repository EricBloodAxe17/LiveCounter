let a=0
document.getElementById("numb").textContent=`${a}`
console.log(numb)
 document.getElementById("btn1").onclick=function(){
    let val=Number(document.getElementById("numb").textContent);
    a=val-1;
    document.getElementById("numb").textContent=a;
    console.log(a)
 }
  document.getElementById("btn2").onclick=function(){
   let val=Number(document.getElementById("numb").textContent);
    a=val-val;
    document.getElementById("numb").textContent=a;
    console.log(a)
  }

   document.getElementById("btn3").onclick=function(){
    let val=Number(document.getElementById("numb").textContent);
    a=val+1;
    document.getElementById("numb").textContent=a;
    console.log(a)
   }