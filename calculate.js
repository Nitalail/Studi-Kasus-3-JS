let output = document.getElementById('output');
buttons = document.querySelectorAll("button");
let outputValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log("Button text is", buttonText)
        if (buttonText === "x") {
            buttonText = "*";
        } else if (buttonText === "÷") {
            buttonText = "/";
        }
        if (buttonText === "C") {
            outputValue = "";
        } else if (buttonText === "%") {
            outputValue += buttonText;
        } else if (buttonText === "=") {
            outputValue = eval(outputValue);
        } else {
            outputValue += buttonText;
        }
        output.value = outputValue;
    });
}
