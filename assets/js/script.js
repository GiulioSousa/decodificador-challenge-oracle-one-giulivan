let input = document.querySelector('#input');
let entradaAviso = document.querySelector('.entrada__aviso');
let btnCript = document.querySelector('.btn-cript');
let btnDecript = document.querySelector('#btn-decript');
let output = document.querySelector('#output');
let btnCopy = document.querySelector('#btnCopy');
let msgNotFoundTitle = document.querySelector('#msgNotFoundTitle');
let msgNotFoundText = document.querySelector('#msgNotFoundText');
let imgNotFound = document.querySelector('#imgNotFound');

const vogais = ['a', 'e', 'i', 'o', 'u'];
const vogaisCriptografadas = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function verificaMinuscula(texto) {
    const regex = /^[a-z ]+$/;
    return regex.test(texto)
}

function inverterVogais(texto, arr, arrCriptografado) {
    for (let i = 0; i < arr.length; i++) {
        if (texto.includes(arr[i])) {
            texto = texto.replaceAll(arr[i], arrCriptografado[i]);
        }
    }
    return texto;
}

function criptografar() {
    let texto = input.value;
    if (!verificaMinuscula(texto)) {
        entradaAviso.classList.add('entrada__aviso--erro');
        return
    }
    let textoConvertido = inverterVogais(texto, vogais, vogaisCriptografadas);
    output.textContent = textoConvertido;
    entradaAviso.classList.remove('entrada__aviso--erro');
    msgNotFoundTitle.classList.add('hidden');
    msgNotFoundText.classList.add('hidden');
    btnCopy.classList.add('active')
    imgNotFound.style.display = 'none';
}

function descriptografar() {
    let texto = input.value;
    if (!verificaMinuscula(texto)) {
        entradaAviso.classList.add('entrada__aviso--erro');
        return
    }
    let textoConvertido = inverterVogais(texto, vogaisCriptografadas, vogais);
    output.textContent = textoConvertido;
    entradaAviso.classList.remove('entrada__aviso--erro');
    msgNotFoundTitle.classList.add('hidden');
    msgNotFoundText.classList.add('hidden');
    btnCopy.classList.add('active')
    imgNotFound.style.display = 'none';
}

function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .then(() => {return texto})
}


btnCript.addEventListener('click', criptografar);
btnDecript.addEventListener('click', descriptografar);
btnCopy.addEventListener('click', async () => {
    await navigator.clipboard.writeText(output.innerText);
});
