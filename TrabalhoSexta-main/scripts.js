const myButton = document.getElementById("my-button");

// Variável para armazenar a cor do texto atual
let textColor = "black";

// Adiciona um evento de clique ao botão
myButton.addEventListener("click", () => {
    // Altera a cor do texto para a cor alternada
    textColor = textColor === "white" ? "black" : "white";

    // Altera a cor do texto do botão
    myButton.style.color = textColor;

    // Altera a cor do texto de todos os elementos de texto na página
    const allTextElements = document.querySelectorAll("*");
    for (const textElement of allTextElements) {
        textElement.style.color = textColor;
    }
});

