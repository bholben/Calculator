
var num1, num2, buttonEqual, answer, num1Val, num2Val;

num1 = document.getElementById('num_one');
num2 = document.getElementById('num_two');
buttonEqual = document.getElementById('calculateBtn');
answer = document.getElementById('answer');

buttonEqual.onclick = function() {
  num1Val = Number(num1.value);
  num2Val = Number(num2.value);
  answer.innerHTML = num1Val + num2Val;
};

