const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiBtn = document.getElementById("multi");
const submitBtn = document.getElementById("submit");
let action;
let resultsList = [];
const resultElement = document.getElementById("result");
plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

divideBtn.onclick = function () {
  action = "/";
};

multiBtn.onclick = function () {
  action = "*";
};

submitBtn.onclick = function () {
  if (!(input1.value.length && input2.value.length)) return
  let result;
  if (action === "+") {
    result = Number(input1.value) + Number(input2.value);
  } else if (action === "-") {
    result = Number(input1.value) - Number(input2.value);
  } else if (action === "/") {
    result = Number(input1.value) / Number(input2.value);
  } else {
    result = Number(input1.value) * Number(input2.value);
  }
    let newResult = document.createElement("p");
    newResult.innerHTML = ` ${input1.value} ${action} ${input2.value} = ${result}`;
    newResult.className = `new-result`;
    resultElement.prepend(newResult);
    input1.value = "";
    input2.value = "";
};


