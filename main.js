
var button, ac, pm, pct,
    add, subtract, multiply, divide, equals,
    displayValueStr = '0',
    value1,
    operation;

result = document.getElementById('result');

// zero = document.getElementById('zero');
// one = document.getElementById('one');
// two = document.getElementById('two');
// three = document.getElementById('three');
// four = document.getElementById('four');
// five = document.getElementById('five');
// six = document.getElementById('six');
// seven = document.getElementById('seven');
// eight = document.getElementById('eight');
// nine = document.getElementById('nine');
// decimal = document.getElementById('decimal');

ac = document.getElementById('ac');
pm = document.getElementById('pm');
pct = document.getElementById('pct');
add = document.getElementById('add');
subtract = document.getElementById('subtract');
multiply = document.getElementById('multiply');
divide = document.getElementById('divide');
equals = document.getElementById('equals');

// Helper function - determine if value is a number.
function isNumber(val) {
  return !isNaN(parseFloat(val))
}

function solve(operation, val1, val2) {
  if (operation === 'add') {
    return val1 + Number(val2);
    console.log('Solve add')
  }
  else if (operation === 'subtract') {
    return val1 - Number(val2);
    console.log('Solve subtract')
  }
  else if (operation === 'multiply') {
    return val1 * Number(val2);
    console.log('Solve multiply')
  }
  else if (operation === 'divide') {
    return val1 / Number(val2);
    console.log('Solve divide')
  }
}

function reset() {
  value1 = undefined;
  displayValueStr = '0';
  result.textContent = displayValueStr;
};

function storeFirstValue() {
  value1 = Number(displayValueStr);
  displayValueStr = '0';
}

// Handle number click events.
document.onclick = function (e) {
  inputStr = e.target.textContent;
  if (isNumber(inputStr)) {
    if (displayValueStr === '0') { displayValueStr = ''; };
    displayValueStr = displayValueStr + inputStr;
    result.textContent = displayValueStr;
    console.log(displayValueStr);
  }
};

// Handle non-number click events.
add.onclick = function () {
  operation = 'add';
  storeFirstValue();
};

subtract.onclick = function () {
  operation = 'subtract';
  storeFirstValue();
};

multiply.onclick = function () {
  operation = 'multiply';
  storeFirstValue();
};

divide.onclick = function () {
  operation = 'divide';
  storeFirstValue();
};

ac.onclick = function () { reset(); };

equals.onclick = function () {
  result.textContent = solve(operation, value1, displayValueStr);
  // reset();
};

