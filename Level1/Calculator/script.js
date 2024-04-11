function appendToDisplay(value) {
    document.getElementById("display").value += value;
    display.focus();
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
    display.focus();
}
function cancelLastCharacter() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
    display.focus();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate(); 
    }
    if (key === "Backspace" || key === "Delete") {
        cancelLastCharacter(); 
    }
});