/* Acá va tu código */



document.getElementById("ingresar").addEventListener("click",()=>{
    document.getElementById("enco").style.display="none";
  document.getElementById("division1").style.display="block";
  document.getElementById("offset").value ="";
    document.getElementById("texto").value ="";
    document.getElementById("copyBlock").value ="";
 
})
 


document.getElementById("cifra").addEventListener("click", ()=> {
    let textoingresado = document.getElementById("texto").value;
    textoingresado = String(textoingresado);
    let offsetingresado = document.getElementById("offset").value;
    offsetingresado = Number(offsetingresado);  
    document.getElementById("tumensaje1").innerHTML = "TU MENSAJE CIFRADO ES:";
    document.getElementById("mensaje3").innerHTML = `${cipher.encode(textoingresado,offsetingresado)}`;
    document.getElementById("desplazado1").innerHTML = `<br>N° desplazado: ${offsetingresado}`
    document.getElementById("division1").style.display="none";
    document.getElementById("division2").style.display="block";
    document.getElementById("cifra2").style.display="block";
    document.getElementById("descifra2").style.display="none";
   

})

document.getElementById("cifra2").addEventListener("click", ()=>{
    document.getElementById("division2").style.display="none";
    document.getElementById("division1").style.display="block";
    document.getElementById("offset").value ="";
    document.getElementById("texto").value ="";
    document.getElementById("copyAnswer").innerHTML ="";
    
  

})

document.getElementById("descifra2").addEventListener("click", ()=>{
    document.getElementById("division2").style.display="none";
    document.getElementById("division1").style.display="block";
    document.getElementById("offset").value ="";
    document.getElementById("texto").value ="";
    document.getElementById("copyAnswer").innerHTML ="";
    

  

})

// document.getElementById("offset").addEventListener("keypress", (event)=> {
//     return event.charCode >= 48 && event.charCode <= 57;


document.getElementById("descifra").addEventListener("click",()=>{
    let textoingresado = document.getElementById("texto").value;
    textoingresado = String(textoingresado);
    let offsetingresado = document.getElementById("offset").value;
    offsetingresado = Number(offsetingresado);  
  

    document.getElementById("tumensaje1").innerHTML = "TU MENSAJE DESCIFRADO ES:";
    document.getElementById("mensaje3").innerHTML = `${cipher.decode(textoingresado,offsetingresado)}`;
    document.getElementById("desplazado1").innerHTML = `<br>N° desplazado: ${offsetingresado}`
    document.getElementById("division1").style.display="none";
    document.getElementById("division2").style.display="block";
    document.getElementById("cifra2").style.display="none";
    
    document.getElementById("descifra2").style.display="block";

})
document.getElementById("copyBlock").addEventListener("click", function() {
    let textarea = document.getElementById("mensaje3");
    let answer = document.getElementById("copyAnswer");
    
   
    
      
// Sleccionando el texto
    textarea.focus();
    textarea.select();
    
       try {
                          // Copiando el texto seleccionado
        let successful = document.execCommand('copy');    
         if(successful) answer.innerHTML = 'Copiado!';
                   else answer.innerHTML = 'Incapaz de copiar!';
           } catch (err) {
               answer.innerHTML = 'Browser no soportado!';
           }
        
})



document.getElementById("limpiar").addEventListener("click", ()=> {
    document.getElementById("offset").value ="";
})

document.getElementById("limpiar2").addEventListener("click", ()=> {
    document.getElementById("texto").value ="";

})
