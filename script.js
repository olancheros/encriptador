/*
! Desafio 1 Alura (ORACLE)
*
* Objetivo hacer una app que encripte texto.
*
* Las llaves de encriptación son:

? La letra "e" es convertida para "enter"
? La letra "i" es convertida para "imes"
? La letra "a" es convertida para "ai"
? La letra "o" es convertida para "ober"
? La letra "u" es convertida para "ufat"

* *Requisitos:*
* Debe funcionar solo con letras minúsculas
* No deben ser utilizados letras con acentos ni caracteres especiales
* Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

*/

/*
! Lógica de programación
*/

let btnEncrypt = document.querySelector(".btnEncrypt");
let btnDecrypt = document.querySelector(".btnDecrypt");
let puppet       = document.querySelector(".puppetContainer");
let h3               = document.querySelector(".h3Container");
let paragraph  = document.querySelector(".paragraphContainer");
let finalResult  = document.querySelector(".finalResult");

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

/*
! Falta definir la función de copia del texto

let btnCopy = document.querySelector(".btnCopy")

function copyToClipBoard() {

}

*/

function encrypt() {
    hideOnFront();
    let inputText = getText();
    finalResult.textContent = encryptText(inputText);
}

function decrypt() {
    hideOnFront();
    let inputText = getText();
    finalResult.textContent = decryptText(inputText);
}

function getText() {
    let inputText = document.querySelector(".inputText");
    return inputText.value;
}

function hideOnFront() {
    puppet.classList.add("hide");
    h3.classList.add("hide");
    paragraph.classList.add("hide");
}

function encryptText(stringToEncrypt) {
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringToEncrypt = stringToEncrypt.toLowerCase();
    for (let i = 0; i < codeMatrix.length; i++) {
        if (stringToEncrypt.includes(codeMatrix[i][0])) {
            stringToEncrypt = stringToEncrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1])
        }
    }
    return stringToEncrypt;
}

function decryptText(stringToDecrypt) {
    let text = stringToDecrypt;
    let stringDecrypted = "";

    for (let i = 0; i < stringToDecrypt.length; i++) {
        if(text[i] == "a") {
            stringDecrypted = stringDecrypted + "a";
            i = i + 1;
        }
        else if (text[i] == "e") {
            stringDecrypted = stringDecrypted + "e";
            i = i + 4;
        }
        else if (text[i] == "i") {
            stringDecrypted = stringDecrypted + "i";
            i = i +3;
        }
        else if (text[i] == "o") {
            stringDecrypted = stringDecrypted + "o";
            i = i +3;
        }
        else if (text[i] == "u") {
            stringDecrypted = stringDecrypted + "u";
            i = i +3;
        }
        else{
            stringDecrypted = stringDecrypted + text[i];
        }
    }
    return stringDecrypted;
}
