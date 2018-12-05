/* Acá va tu código */

const botones = document.getElementById("botones");

function cifrar(){
  botones.innerHTML = `IMPORTANTE: solamente se consideran para cifrado las letras del alfabeto simple (sin Ññ).<br>
  <br>
  <form>
  <p><textarea input="required" id="texto" name="comentario" rows="9" cols="110" placeholder="PASO 1=> Escribe aquí tu mensaje a cifrar/descifrar"></textarea></p>
  <p>N° Desplazado: <input type="texto" name="position" class="offset" id="offset" placeholder="PASO 2=> Ingresa un número"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="limpiar" id="limpiar" type="reset" value="LIMPIAR" /></p>
  <br>
  <p><button type="button" id="cifra" onclick="cifrando()">CIFRAR</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" id="descifra" onclick="descifrando()">DESCIFRAR</button><p><br>
  <br>
    </form>
   `;

}

function cifrando(){

let textoingresado = document.getElementById("texto").value;
textoingresado = String(textoingresado);
let offsetingresado = document.getElementById("offset").value;
offsetingresado = Number(offsetingresado);
document.getElementById("botones").innerHTML =
`
<div type="text" id="tumensaje1" >TU MENSAJE CIFRADO ES:</div>
<p><textarea name="comentario" rows="9" cols="110" id="mensaje3"> ${cipher.encode(textoingresado,offsetingresado)} </textarea><p>
<p id="desplazado1">N° Desplazado: ${offsetingresado} </P>
<br>
<button type="button" id="cifra" onclick="cifrar()">IR A CIFRAR NUEVO MENSAJE</button> <br>
<br>

<!-- <textarea id="textarea" rows="6" cols="40">Texto que queremos copiar al portapapeles!
</textarea><br/> -->
<button id="copyBlock">Copiar Texto</button> <span id="copyAnswer"></span>
`;

//COPIAR SELECCION TEXTO
let textarea = document.getElementById("mensaje3");
let answer = document.getElementById("copyAnswer");
let copy   = document.getElementById("copyBlock");
copy.addEventListener('click', function(e) {
   // Sleccionando el texto
   textarea.select();
   try {
       // Copiando el texto seleccionado
       let successful = document.execCommand('copy');

       if(successful) answer.innerHTML = 'Copiado!';
       else answer.innerHTML = 'Incapaz de copiar!';
   } catch (err) {
       answer.innerHTML = 'Browser no soportado!';
   }
});
//FIN COPIAR SELECCION TEXTO

}




function descifrando(){

let textoingresado = document.getElementById("texto").value;
textoingresado = String(textoingresado);
let offsetingresado = document.getElementById("offset").value;
offsetingresado = Number(offsetingresado);
document.getElementById("botones").innerHTML =
`
<div type="text" id="tumensaje" >TU MENSAJE DESCIFRADO ES:</div>
<p><textarea name="comentario" rows="9" cols="110" id="mensaje3"> ${cipher.decode(textoingresado,offsetingresado)} </textarea><p>
<p id="desplazado">N° Desplazado: ${offsetingresado} </P>
<br>
<button type="button" id="cifra" onclick="cifrar()">IR A DESCIFRAR NUEVO MENSAJE</button><br>
<br>
<!-- <textarea id="textarea" rows="6" cols="40">Texto que queremos copiar al portapapeles!
</textarea><br/> -->
<button id="copyBlock">Copiar Texto</button> <span id="copyAnswer"></span>
`;


//COPIAR SELECCION TEXTO
let textarea = document.getElementById("mensaje3");
let answer = document.getElementById("copyAnswer");
let copy   = document.getElementById("copyBlock");
copy.addEventListener('click', function(e) {
   // Sleccionando el texto
   textarea.select();
   try {
       // Copiando el texto seleccionado
       let successful = document.execCommand('copy');

       if(successful) answer.innerHTML = 'Copiado!';
       else answer.innerHTML = 'Incapaz de copiar!';
   } catch (err) {
       answer.innerHTML = 'Browser no soportado!';
   }
});
//FIN COPIAR SELECCION TEXTO
}


// <!-- window.onload =() =>{
//  document.getElementById("btnEncode").addEventListener("click",
//  (evento)=> {
//    evento.preventDefault();
//
//    let textElement = document.getElementById("text").value.toUpperCase();
//    let offsetNumber = parseInt(document.getElementById("offset").value);
//    let result = cipher.encode(textElement,offsetNumber);
//    document.getElementById("resultado").innerHTML=result;
//
// })
//
// document.getElementById("btnDecode").addEventListener("click",
// (evento) => {
//  evento.preventDefault();
//
//  let textElement = document.getElementById("text").value.toUpperCase();
//  let offsetNumber = parseInt(document.getElementById("offset").value);
//  let result = cipher.decode(textElement,offsetNumber);
//  document.getElementById("resultado").innerHTML = result;
//
// })
//
// }
