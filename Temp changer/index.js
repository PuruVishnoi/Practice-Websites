const textbox = document.getElementById("tbox");
const toCelsius = document.getElementById("toCelsius");
const toFarenheit = document.getElementById("toFarenheit");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFarenheit.checked) {
    temp = Number(tbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "F";
  } else if (toCelsius.checked) {
    temp = Number(tbox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp + "C";
  } else {
    result.textContent = "select unit";
  }
}

convert();
