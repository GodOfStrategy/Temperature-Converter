function convertTemp() {
    let temp = parseFloat(document.getElementById("temprature").value);
    let type = document.getElementById("ConversionType").value;
    let result = "";
  
    if (isNaN(temp)) {
      result = "! Please enter a valid number!";
    } else if (type === "Celsius") {
      result = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F`;
    } else {
      result = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`;
    }
  
    document.getElementById("result").innerText = result
}