let d=new Date();
    document.getElementById('d').innerHTML =''+d.toLocaleDateString();
function subm(){
 
var NOM = document.getElementById("Nom").value;
var PR= document.getElementById("Prenom").value;
var CDP= document.getElementById("CPostale").value;



//alert(NOM);

if( NOM.length < 2){ 
    document.getElementById("err").innerHTML="ressayer";
}else{
    document.getElementById("err") .innerHTML="" ;
  
 }

if(PR.length < 2){
    document.getElementById("errr").innerHTML="erreur";
}else{
    document.getElementById("errr") .innerHTML="" ;
  
 }
if(CDP.length < 5){
    document.getElementById("errrr").innerHTML="erreur!";
}else{
    document.getElementById("errrr") .innerHTML="" ;
  
 }

/* var NM =document.getElementById("TL").value;
 alert("kk");
 var  regExp = ( "/^(\([0-9]{2}\) [0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/$");

 var phone = NM.test(regExp);
 if (!phone) {
   document.getElementById("Num").innerHTML="FALSE";
  
 }else{
    document.getElementById("Num").innerHTML="CORRECT";
 }
 */
 //var NM =document.getElementById("TL").value;
 

var MD= document.getElementById("PaW").value;
var V = document.getElementById("Vrf").value;
 if(MD . lenght == 0){
    document.getElementById("Pw").innerHTML=" veuiller remplir";
 }
if( MD . length < 8)  {
   
    document.getElementById("Pw").innerHTML=" Incorrect";
}else if( MD.length > 8 ){
    
    document.getElementById("Pw").innerHTML=" ";  
}

//if( MD.length < 6  ){
    //document.getElementById("Pw").innerHTML="Incorrect";
//}

//if( MD.length > 8){
   // document.getElementById("Pw").innerHTML="Incorrect";
//}

if( V == MD){ 
    document.getElementById("Pw").innerHTML="";
}else if( V != MD){
    document.getElementById("VF").innerHTML=" Incorrect";
}else{
    document.getElementById("VF").innerHTML="Incorrect";
}
/*
if( V.length == MD . length){
    document.getElementById("VF").innerHTML="Incorrect";
}*/

var eer = document.getElementById("email").value;

var temail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{1}[a-z]{2,}[.]{1}[a-z]{2,5}$','i');
var emailteste = temail.test(eer);

if (!emailteste){
    document.getElementById("L").innerHTML="mail incorrect";
}else{
    document.getElementById("L").innerHTML="";
}

var D =document.getElementById("DATEN").value;
var A = new Date().getFullYear()-new Date(D).getFullYear();
if( A < 18 ){
    
    document.getElementById("E").innerHTML="invalid";
}else if( A  >= 18){
    document.getElementById("E").innerHTML=" ";
}else{
    document.getElementById("E").innerHTML="invalid";
}

var VALD= false;
if(document.getElementById("FX").checked){
    VALD = true;
}else if(document.getElementById("TL").checked){
    VALD = true;
}else if(document.getElementById("ML").checked){
    VALD = true;
}
if(VALD){
    document.getElementById("PC").innerHTML="valid";
}else{
    document.getElementById("PC").innerHTML="VEILLER CHOISIR!";
}

if(document.getElementById('MA').checked) {    
    document.getElementById("G").innerHTML="";
}else if(document.getElementById('FE').checked) {   
    document.getElementById("G").innerHTML="";   
} else{
    document.getElementById("G").innerHTML="erreur!";
}
if(document.getElementById('pays').value){
    document.getElementById("Y").innerHTML="";
}else{
    document.getElementById("Y").innerHTML="erreur";
}
}










