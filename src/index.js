import cipher from './cipher.js';

//declarando variables
const mainBody = document.getElementById("main_body");
const selectCipher = document.getElementById("select_cipher");
const selectDecipher = document.getElementById("select_decipher");
const btnReturn1 = document.getElementById("return1");
const btnReturn2 = document.getElementById("return2");

//llamando a la función del botón cifrar para ingresar al menú de cipher
function cipherMenu(){
    mainBody.style.display = "none";
    document.getElementById("cipher_body").style.display = "block";
}
selectCipher.addEventListener("click", cipherMenu);

//llamando a la función del botón descifrar para ingresar al menú de decipher
function decipherMenu(){
    mainBody.style.display = "none";
    document.getElementById("decipher_body").style.display = "block";
}
selectDecipher.addEventListener("click", decipherMenu);

//llamando a la función de los botones volver para regresar al menú princial
function btnReturn(){
    cipher_body.style.display = 'none';
    decipher_body.style.display = 'none';
    mainBody.style.display = 'block';
}
btnReturn1.addEventListener('click', btnReturn);
btnReturn2.addEventListener('click', btnReturn);

 