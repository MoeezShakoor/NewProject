var x = window.matchMedia("(min-width: 1150px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

 function myFunction(x) {
   if (x.matches) { // If media query matches
      //console.log(x);
      var NavLEFT= document.getElementById("NavLeft");
      NavLEFT.style.visibility= "visible";
      NavLEFT.style.width= "22%";
      NavLEFT.style.marginTop = "10px";

      var Innercontainer= document.getElementById("InnerContainer");
      Innercontainer.style.visibility= "visible";
      Innercontainer.style.width= "74%";

      var Downarrow= document.getElementById("DownArrow");
      Downarrow.style.visibility= "hidden";


      var Rightarrow= document.getElementById("RightArrow");
      Rightarrow.style.visibility= "hidden";
      } 
      else {
      var NavLEFT= document.getElementById("NavLeft");
      NavLEFT.style.visibility= "hidden";
      NavLEFT.style.width= "0px";

      var Innercontainer= document.getElementById("InnerContainer");
      Innercontainer.style.visibility= "visible";
      Innercontainer.style.width= "88%";

      var Downarrow= document.getElementById("DownArrow");
      Downarrow.style.visibility= "visible";


      
   }
 }
 
 


function DEL(){
    var ConfirmBox= document.getElementById("Confirmation");
    ConfirmBox.style.visibility= "visible";

}
function closeDeletePopUp(){
   var ConfirmBox= document.getElementById("Confirmation");
    ConfirmBox.style.visibility= "hidden";
}
function Del_Confirm_Yes(){
      var ConfirmBox= document.getElementById("Confirmation");
      ConfirmBox.style.visibility= "hidden";

}
function Del_Confirm_No(){
   var ConfirmBox= document.getElementById("Confirmation");
   ConfirmBox.style.visibility= "hidden";

}
function showNavBar(){
  var Innercontainer= document.getElementById("InnerContainer");
   Innercontainer.style.visibility= "hidden";
   Innercontainer.style.width= "0px";

   var Downarrow= document.getElementById("DownArrow");
   Downarrow.style.visibility= "hidden";


   var Rightarrow= document.getElementById("RightArrow");
   Rightarrow.style.visibility= "visible";

   var NavLEFT= document.getElementById("NavLeft");
   NavLEFT.style.visibility= "visible";
   NavLEFT.style.width= "90%";
   NavLEFT.style.marginTop = "40px";
}

function closeNavBar(){
   var Innercontainer= document.getElementById("InnerContainer");
   Innercontainer.style.visibility= "visible";
   Innercontainer.style.width= "88%";

   var Downarrow= document.getElementById("DownArrow");
   Downarrow.style.visibility= "visible";


   var Rightarrow= document.getElementById("RightArrow");
   Rightarrow.style.visibility= "hidden";

   var NavLEFT= document.getElementById("NavLeft");
   NavLEFT.style.visibility= "hidden";
   NavLEFT.style.width= "0px";
  
 }
