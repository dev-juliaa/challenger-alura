function encrypt() {
    var originalText = document.getElementById("inputText").value;
    var encryptedText = originalText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("result").value = encryptedText;
}

function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var originalText = encryptedText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("result").value = originalText;
}

document.getElementById("inputText").addEventListener("input", function() {
    var fotoElement = document.getElementById("foto_menino");
    var textElement = document.getElementById("texto_resultado");
    var paragraphElement = document.getElementById("paragrafo_resultado");

    fotoElement.style.display = "none";
    textElement.style.display = "none";
    paragraphElement.style.display = "none";

    document.getElementById("result").value = "";

    var text = document.getElementById("inputText").value.trim();
    if (text === "") {
        fotoElement.style.display = "block";
        textElement.style.display = "block";
        paragraphElement.style.display = "block";
    }
    
    document.getElementById("foto_menino").style.marginTop = "-32%";
});

document.getElementById("copyButton").addEventListener("click", function() {
    var result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    console.log("Texto copiado para a área de transferência!");
});


