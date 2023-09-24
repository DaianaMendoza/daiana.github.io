let wpp = document.getElementById("wp");
let face = document.getElementById("face");
let twt = document.getElementById("tw");
let inst = document.getElementById("inst");


wpp.addEventListener("click",function(){
   let texto= document.getElementById("1");

   if (texto.style.display === "none"){
       texto.style.display = "block";
    }
    else{
       texto.style.display = "none";
        }
   
});

face.addEventListener("click",function(){
   let texto= document.getElementById("2");

   if (texto.style.display === "none"){
      texto.style.display = "block";
   }
   else{
      texto.style.display = "none";
   }
});

twt.addEventListener("click", function(){
   let texto= document.getElementById("3");

   if (texto.style.display === "none"){
      texto.style.display = "block";
   }
   else{
      texto.style.display = "none";
   }
});

inst.addEventListener("click", function(){
   let texto= document.getElementById("4");
   if (texto.style.display ==="none"){
      texto.style.display = "block";
   }
   else{
      texto.style.display = "none";
   }
});

 
 
 
