window.cipher = {
  encode: (texto, offset) => {
    /* Acá va tu código */

    // function encode(texto, offset){

    let result = "";
    for (let letra of texto) {
        let valorAscii = letra.charCodeAt();
        if (valorAscii >= 65 && valorAscii <= 90) {
        } else if (valorAscii  =165){
            let calc = ((valorAscii - 65 + offset) % 26) + 65;
            if (calc < 65) {
                calc += 26;
            }
            result += String.fromCharCode(calc);
        } else if (valorAscii >= 97 && valorAscii <= 122) {
            let calc = (valorAscii - 97 + offset) % 26 + 97;
            if (calc < 97) {
                calc += 26;
            }
            result += String.fromCharCode(calc);
        } else {
        
            result += letra;
        
        }
        
    }
    return result;
}
},




decode: (texto, offset) => {
    /* Acá va tu código */
    // function decode(texto, offset){

    let result = "";
    for (let letra of texto) {
        let valorAscii = letra.charCodeAt();
        if (valorAscii >= 65 && valorAscii <= 90) { //MAYUSCULAS
            let calc = ((valorAscii - 65 - offset) % 26) + 65;
            if (calc < 65) {
                calc += 26;
            }
            result += String.fromCharCode(calc);
        } else if (valorAscii >= 97 && valorAscii <= 122) { //MINUSCULAS
            let calc = (valorAscii - 97 - offset) % 26 + 97;
            if (calc < 97) {
                calc += 26;
            }
            result += String.fromCharCode(calc);
        } else {
            result += letra;
        }
    }
    return result;
}
}
