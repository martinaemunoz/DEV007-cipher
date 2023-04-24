import cipher from './cipher.js';

//declarando variables
const mainBody = document.getElementById("main_body");
const selectCipher = document.getElementById("select_cipher");
const selectDecipher = document.getElementById("select_decipher");
const btnReturn1 = document.getElementById("return1");
const btnReturn2 = document.getElementById("return2");

//declarando la función del botón cifrar para ingresar al menú de cipher
function cipherMenu(){
    mainBody.style.display = "none";
    document.getElementById("cipher_body").style.display = "block";
}
selectCipher.addEventListener("click", cipherMenu);

//declarando la función del botón descifrar para ingresar al menú de decipher
function decipherMenu(){
    mainBody.style.display = "none";
    document.getElementById("decipher_body").style.display = "block";
}
selectDecipher.addEventListener("click", decipherMenu);

//declarando la función de los botones volver para regresar al menú princial
function btnReturn(){
    cipher_body.style.display = 'none';
    decipher_body.style.display = 'none';
    mainBody.style.display = 'block';
}
btnReturn1.addEventListener('click', btnReturn);
btnReturn2.addEventListener('click', btnReturn);


//llamando el método encode
const btnCipher = document.getElementById("btn_cipher");
const cipherResult = document.getElementById("result1"); 

btnCipher.addEventListener("click", (event) => {
    const cipherMessage = document.getElementById("user_input1").value;
    const offset_value1 = parseInt(document.getElementById("range1").value);
    console.log(cipherMessage);
    console.log(offset_value1);
    cipherResult.value = cipher.encode(offset_value1,cipherMessage);
}
);
 
//llamando el método decode
const btnDecipher = document.getElementById("btn_decipher");
const decipherResult = document.getElementById("result2");

btnDecipher.addEventListener("click", (event) =>{
    const decipherMessage = document.getElementById("user_input2").value;
    const offset_value2 = parseInt(document.getElementById("range2").value);
    decipherResult.value = cipher.decode(offset_value2,decipherMessage);
}
);