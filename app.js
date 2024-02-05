
function clearInputs() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
}

function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;

    if (celsiusInput !== "") {
        
        var result = (celsiusInput * 9/5) + 32;
        document.getElementById("fahrenheitInput").value = result.toFixed(2);
    } else if (fahrenheitInput !== "") {
        
        var result = (fahrenheitInput - 32) * 5/9;
        document.getElementById("celsiusInput").value = result.toFixed(2);
    } else {
        alert("Please enter a temperature value.");
    }
}