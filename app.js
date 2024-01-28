/*
let num = 42;
let firstName = "Kirill";
const isProgrammer = true;
*/

/*
Can do
let $ = "test";
let $num = 42;
let num$ = 42;
let _ = 12;
let _num = 12;
let num_ = 12;
let my_Num = 322; // Bad
let myNum = 322; // Good CamelCase
*/
/* Restricted NO DO
let "42"num = 11;
let my"-"num =11;
let "let"
const isProgrammer = true; // const
isProgrammer = false; // error because isProgrammer of const
*/

// alert(firstName);
// console.log("test:", isProgrammer, num, firstName);

/* 
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
console.log(num);
*/

/*
let num2 = num + 10;
console.log(num, num2);
num = num2 - num;
console.log(num, num2);
const fullName = firstName + " Romanov";
console.log(fullName);
*/

/*
console.log(resultElement.textContent);
resultElement.textContent = 42;
*/

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
  let newResult = document.createElement('p');
  newResult.innerHTML = ` ${input1.value} ${action} ${input2.value} = ${result}`;
  // resultsList.push(` ${input1.value} ${action} ${input2.value} = ${result}`);
  // resultElement.textContent = resultsList;
  newResult.className = `new-result`
  resultElement.prepend(newResult);
};
