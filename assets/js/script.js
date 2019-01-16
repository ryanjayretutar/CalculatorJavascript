var calculator = {
	display: "",
	operator: null,
	firstOperand: 0,
	secondOperand: 0,
	result: 0
}	

function updateDisplay(value){
	const display = document.querySelector('.calculator-screen');
 
  	if(calculator.result == 0){
  		calculator.display = calculator.display + value;
		calculator.firstOperand = calculator.display;
		display.value = calculator.display;
  	}else {
  		calculator.display = calculator.display + value;
		calculator.secondOperand = calculator.display;
		display.value = calculator.display;
  	}
}

function operation(operator){
		calculator.operator = operator;
		calculator.display = "";
		calculator.result =  1;	
}

function performCalculation(){
	const display = document.querySelector('.calculator-screen');
	// display.value = calculator.firstOperand calculator.operator calculator.secondOperand;
	switch(calculator.operator) {
		case "+":
			display.value = (calculator.firstOperand*1) + (calculator.secondOperand*1);
			break;
		case "-":
			display.value = (calculator.firstOperand) - (calculator.secondOperand);
			break;
		case "*":
			display.value = (calculator.firstOperand) * (calculator.secondOperand);
			break;
		case "/":
			display.value = (calculator.firstOperand) / (calculator.secondOperand);
			break;
	}
	calculator.firstOperand = display.value;
}

function reset() {
	const display = document.querySelector('.calculator-screen');
	calculator.display = "";
	calculator.operator = null;
	calculator.firstOperand = 0;
	calculator.secondOperand = 0;
	calculator.result = 0;
	display.value = null;
}






// const calculator = {
//   displayValue: '0',
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };

// function inputDigit(digit) {
//   const { displayValue, waitingForSecondOperand } = calculator;

//   if (waitingForSecondOperand === true) {
//     calculator.displayValue = digit;
//     calculator.waitingForSecondOperand = false;
//   } else {
//     calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//   }
// }

// function inputDecimal(dot) {
// 	if (calculator.waitingForSecondOperand === true) return;
  
//   // If the `displayValue` does not contain a decimal point
//   if (!calculator.displayValue.includes(dot)) {
//     // Append the decimal point
//     calculator.displayValue += dot;
//   }
// }

// function handleOperator(nextOperator) {
//   const { firstOperand, displayValue, operator } = calculator
//   const inputValue = parseFloat(displayValue);

//   if (operator && calculator.waitingForSecondOperand)  {
//     calculator.operator = nextOperator;
//     return;
//   }

//   if (firstOperand == null) {
//     calculator.firstOperand = inputValue;
//   } else if (operator) {
//     const currentValue = firstOperand || 0;
//     const result = performCalculation[operator](currentValue, inputValue);

//     calculator.displayValue = String(result);
//     calculator.firstOperand = result;
//   }

//   calculator.waitingForSecondOperand = true;
//   calculator.operator = nextOperator;
// }

// const performCalculation = {
//   '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

//   '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

//   '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

//   '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

//   '=': (firstOperand, secondOperand) => secondOperand
// };

// function resetCalculator() {
//   calculator.displayValue = '0';
//   calculator.firstOperand = null;
//   calculator.waitingForSecondOperand = false;
//   calculator.operator = null;
// }

// function updateDisplay() {
//   const display = document.querySelector('.calculator-screen');
//   display.value = calculator.displayValue;
// }

// updateDisplay();

// const keys = document.querySelector('.calculator-keys');
// keys.addEventListener('click', (event) => {
//   const { target } = event;
//   if (!target.matches('button')) {
//     return;
//   }

//   if (target.classList.contains('operator')) {
//     handleOperator(target.value);
// 		updateDisplay();
//     return;
//   }

//   if (target.classList.contains('decimal')) {
//     inputDecimal(target.value);
// 		updateDisplay();
//     return;
//   }

//   if (target.classList.contains('all-clear')) {
//     resetCalculator();
// 		updateDisplay();
//     return;
//   }

//   inputDigit(target.value);
//   updateDisplay();
// });