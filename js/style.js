function OpenID1(){
      
    document.getElementById('mycv_right1').style.display = "flex";
    document.getElementById('mycv_right2').style.display = "none";
    document.getElementById('mycv_right3').style.display = "none";
    document.getElementById('mycv_right4').style.display = "none";
    document.getElementById('toolbar__link1').style.color = "#04b4e0";//disabled
    document.getElementById('toolbar__link2').style.color = "#babbbc"; //disabled
    document.getElementById('toolbar__link3').style.color = "#babbbc";//disabled
    document.getElementById('toolbar__link4').style.color = "#babbbc";//disabled
   
 }
function OpenID2(){
      
   document.getElementById('mycv_right2').style.display = "inline-block";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right3').style.display = "none";
   document.getElementById('mycv_right4').style.display = "none";
   document.getElementById('toolbar__link2').style.color = "#04b4e0";
   document.getElementById('toolbar__link1').style.color = "#babbbc";//disabled
   document.getElementById('toolbar__link3').style.color = "#babbbc";//disabled
   document.getElementById('toolbar__link4').style.color = "#babbbc";//disabled
}
function OpenID3(){
   document.getElementById('mycv_right3').style.display = "flex";   
   document.getElementById('mycv_right2').style.display = "none";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right4').style.display = "none";
   document.getElementById('toolbar__link3').style.color = "#04b4e0";
   document.getElementById('toolbar__link2').style.color = "#babbbc";
   document.getElementById('toolbar__link1').style.color = "#babbbc";
   document.getElementById('toolbar__link4').style.color = "#babbbc";
}
function OpenID4(){
   document.getElementById('mycv_right4').style.display = "flex";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right2').style.display = "none";
   document.getElementById('mycv_right3').style.display = "none";
   document.getElementById('toolbar__link4').style.color = "#04b4e0";
   document.getElementById('toolbar__link1').style.color = "#babbbc";//disabled
   document.getElementById('toolbar__link2').style.color = "#babbbc";//disabled
   document.getElementById('toolbar__link3').style.color = "#babbbc";//disabled
  
}
function OpenID5(){
   document.getElementById('toolbar__mobileid').style.transform= "translateX(0%)";
}
function OpenID6(){
   document.getElementById('toolbar__mobileid').style.transform= "translateX(100%)";
}
function Mobile_Click_NavBar(){
   document.getElementById('toolbar__mobileid').style.transform= "translateX(100%)";
   document.getElementById('mycv_right2').style.display = "inline-block";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right3').style.display = "none";
   document.getElementById('mycv_right4').style.display = "none";
}
function Mobile_Click_NavBar1(){
   document.getElementById('toolbar__mobileid').style.transform= "translateX(100%)";
   document.getElementById('mycv_right3').style.display = "flex";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right2').style.display = "none";
   document.getElementById('mycv_right4').style.display = "none";
}
function Mobile_Click_NavBar2(){
   document.getElementById('toolbar__mobileid').style.transform= "translateX(100%)";
   document.getElementById('mycv_right4').style.display = "flex";
   document.getElementById('mycv_right1').style.display = "none";
   document.getElementById('mycv_right2').style.display = "none";
   document.getElementById('mycv_right3').style.display = "none";
}