
// TODO:
//  - Add capability to handle compound operations.
//  - React to early equal request.
//  - Fix up JS number approximation (binary issue) with rounding.
//  - Add commas.
//  - Round irrational results to 9 digits.

var add, subtract, multiply, divide, equals,
    decimal,
    ac, pm, pct, result,
    maxNumDigits = 9,
    maxBigDigits = 6,
    valueDisplayed = '0',
    valueStored = undefined,  // Just being explicit here.
    operation,
    decimalClick,
    equalFlag;

add = document.getElementById('add');
subtract = document.getElementById('subtract');
multiply = document.getElementById('multiply');
divide = document.getElementById('divide');
equals = document.getElementById('equals');
decimal = document.getElementById('decimal');
allClear = document.getElementById('ac');
plusMinus = document.getElementById('pm');
percent = document.getElementById('pct');
result = document.getElementById('result');


// Helper function - determine if value is a number.
isNumber = function (val) {
  return !isNaN(parseFloat(val))
};

// Do the math.
solve = function (operation, val1, val2) {
  if (operation === 'add') {
    return Number(val1) + Number(val2);
  }
  else if (operation === 'subtract') {
    return Number(val1) - Number(val2);
  }
  else if (operation === 'multiply') {
    return Number(val1) * Number(val2);
  }
  else if (operation === 'divide') {
    return Number(val1) / Number(val2);
  }
};

reset = function (initialVal) {
  // If no parameter is passed, reset valueStored to undefined.
  valueStored = initialVal;
  // Reset valueDisplayed or it will concatentate next time.
  valueDisplayed = '0';

  // If no parameter is passed, clean the screen to zero.
  if (!initialVal) {
    result.textContent = '0';
  }
};


// CLICK EVENT HANDLERS ////////////////////////////////////////////////

// Turn on decimal flag if decimal is clicked.
decimal.onclick = function () {
  decimalClick = true;
};

// Number/decimal click handler.
document.onclick = function (e) {

  // Extract input value from button text content.
  var input = e.target.textContent,
      repeatedDecimal = valueDisplayed.indexOf('.') !== -1 && decimalClick,
      numDigits = valueDisplayed.length + 1;

  // Adjust font size in results window if too many digits.
  result.style.fontSize = numDigits <= 6 ? '80px' : '54px';

  if (isNumber(input) || decimalClick) {

    // Clear the screen if previous calculation was run.
    if (equalFlag) {
      reset();
      equalFlag = false;
    };

    // Get rid of the leading zero before string concatenation.
    if (valueDisplayed === '0' && !decimalClick) {
      valueDisplayed = '';
    };

    // Build the display value with string concatenation.
    // Don't allow the decimal to be repeated.
    if (!repeatedDecimal && numDigits <= maxNumDigits) {
      valueDisplayed = valueDisplayed + input;
      result.textContent = valueDisplayed;
    };

    decimalClick = false;

    // Change appearance of the "Clear" button.
    allClear.textContent = 'C';
  }
};

// Non-number click handlers.
add.onclick = function () {
  operation = 'add';
  reset(valueDisplayed);
};

subtract.onclick = function () {
  operation = 'subtract';
  reset(valueDisplayed);
};

multiply.onclick = function () {
  operation = 'multiply';
  reset(valueDisplayed);
};

divide.onclick = function () {
  operation = 'divide';
  reset(valueDisplayed);
};

allClear.onclick = function () {
  reset();
  allClear.textContent = 'AC';
};

plusMinus.onclick = function () {
  valueDisplayed = -valueDisplayed;
  result.textContent = valueDisplayed;
};

percent.onclick = function () {
  valueDisplayed = valueDisplayed / 100;
  result.textContent = valueDisplayed;
};

equals.onclick = function () {
  result.textContent = solve(operation, valueStored, valueDisplayed);
  equalFlag = true;
};


