let result = document.getElementById("result");

function insertValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;
  if (expression) {
    result.value = eval(expression);
  }
}
