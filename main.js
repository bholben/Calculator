
var result, ac, pm, pct,
    add, subtract, multiply, divide, equals,
    valueDisplayed = '0',
    valueStored = undefined,  // Just being explicit here.
    operation,
    equalFlag;

add = document.getElementById('add');
subtract = document.getElementById('subtract');
multiply = document.getElementById('multiply');
divide = document.getElementById('divide');

equals = document.getElementById('equals');

ac = document.getElementById('ac');  // All Clear
pm = document.getElementById('pm');  // Plus/Minus
pct = document.getElementById('pct');  // Percent

result = document.getElementById('result');  // Displayed Result


// Helper function - determine if value is a number.
isNumber = function (val) {
  return !isNaN(parseFloat(val))
};

// Do the math.
solve = function (operation, val1, val2) {
  if (operation === 'add') {
    return Number(val1) + Number(val2);
    console.log('Solve add')
  }
  else if (operation === 'subtract') {
    return Number(val1) - Number(val2);
    console.log('Solve subtract')
  }
  else if (operation === 'multiply') {
    return Number(val1) * Number(val2);
    console.log('Solve multiply')
  }
  else if (operation === 'divide') {
    return Number(val1) / Number(val2);
    console.log('Solve divide')
  }
};

customReset = function (firstVal) {
  valueStored = firstVal;
  valueDisplayed = '0';
  result.textContent = valueDisplayed;
};

reset = function () {
  valueStored = undefined;
  valueDisplayed = '0';
  result.textContent = valueDisplayed;
};

storeFirstValue = function () {
  valueStored = valueDisplayed;
  valueDisplayed = '0';
};


// CLICK EVENT HANDLERS ////////////////////////////////////////////////

// Handle number click events.
document.onclick = function (e) {
  inputStr = e.target.textContent;
  if (isNumber(inputStr)) {
    // Clear if previous calculation was run.
    if (equalFlag) { reset(); };

    // Get rid of the leading zero before string concatenation.
    if (valueDisplayed === '0') { valueDisplayed = ''; };

    valueDisplayed = valueDisplayed + inputStr;
    result.textContent = valueDisplayed;
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
  result.textContent = solve(operation, valueStored, valueDisplayed);
  equalFlag = true;
};

