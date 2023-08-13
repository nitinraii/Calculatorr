const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentExpression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                const result = eval(currentExpression);
                display.value = result;
                currentExpression = result;
            } catch (error) {
                display.value = "Error";
                currentExpression = "";
            }
        } else if (button.textContent === "C") {
            display.value = "";
            currentExpression = "";
        } else {
            currentExpression += button.textContent;
            display.value = currentExpression;
        }
    });
});
