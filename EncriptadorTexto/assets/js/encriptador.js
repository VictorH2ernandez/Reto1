const textInput = document.getElementById("input-text");

function codeDecodeText(texto, buscar, rep) {
    textResult = texto.toLowerCase().split(buscar).join(rep);
    return textResult;
}

function hideElements() {

    var img_hidden = document.getElementById("img-hidden");
    var title_hidden = document.getElementById("title-hidden");
    var par_hidden = document.getElementById("par-hidden");
    var result_text = document.getElementById("result-text");

    if (textInput.value !== "") {
        img_hidden.style.display = "none";
        title_hidden.style.display = "none";
        par_hidden.style.display = "none";
        result_text.style.display = "block";
    } else {
        img_hidden.style.display = "block";
        title_hidden.style.display = "block";
        par_hidden.style.display = "block";
        result_text.style.display = "none";
    }
}

function encriptador() {
    codeDecodeText(textInput.value, "e", "enter");
    codeDecodeText(textResult, "i", "imes");
    codeDecodeText(textResult, "a", "ai");
    codeDecodeText(textResult, "o", "ober");
    codeDecodeText(textResult, "u", "ufat");
    hideElements();
    document.getElementById("result-text").innerHTML = textResult;
}

function desencriptar() {

    codeDecodeText(textInput.value, "enter", "e");
    codeDecodeText(textResult, "imes", "i");
    codeDecodeText(textResult, "ai", "a");
    codeDecodeText(textResult, "ober", "o");
    codeDecodeText(textResult, "ufat", "u");

    hideElements();
    document.getElementById("result-text").innerHTML = textResult;
}

function copiarTexto() {
    var textToCopy = document.getElementById("result-text");
    textToCopy.select();
    document.execCommand("copy");

}