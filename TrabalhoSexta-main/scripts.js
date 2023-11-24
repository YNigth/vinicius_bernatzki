const myButton = document.getElementById("my-button");

let textColor = "black";


myButton.addEventListener("click", () => {

    textColor = textColor === "white" ? "black" : "white";


    myButton.style.color = textColor;

    const allTextElements = document.querySelectorAll("*");
    for (const textElement of allTextElements) {
        textElement.style.color = textColor;
    }
});

