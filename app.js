let display = document.getElementById("display");
function appendToDisplay(char) {
  display.value += char;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}

function reset() {
  display.value = "";
}

function deleteLastInput() {
  if (display.value === "error") {
    reset();
  }
  let result = display.value;
  result = result.slice(0, -1);
  display.value = result;
}
