function sumar(){
    let dato1=document.getElementById("dato1").value;
    let dato2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoSuma=parseFloat(dato1)+parseFloat(dato2);

    
if(dato1==""|| dato2==""){
    alert("El campo esta vacio");
}
else{
    resultadoTotal.innerHTML="El resultado es: " + resultadoSuma;
}
}
function restar(){
    let dato1=document.getElementById("dato1").value;
    let dato2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoResta=parseFloat(dato1)-parseFloat(dato2);

    
if(dato1==""|| dato2==""){
    alert("El campo esta vacio");
}
else{
    resultadoTotal.innerHTML="El resultado es: " + resultadoResta;
}
}
function multiplicar(){
    let dato1=document.getElementById("dato1").value;
    let dato2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoMultiplicacion=parseFloat(dato1)*parseFloat(dato2);

    
if(dato1==""|| dato2==""){
    alert("El campo esta vacio");
}
else{
    resultadoTotal.innerHTML="El resultado es: " + resultadoMultiplicacion;
}
}
function dividir(){
    let dato1=document.getElementById("dato1").value;
    let dato2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoDivision=parseFloat(dato1)/parseFloat(dato2);

    
if(dato1==""|| dato2==""){
    alert("El campo esta vacio");
}
else{
    resultadoTotal.innerHTML="El resultado es: " + resultadoDivision;
}
}