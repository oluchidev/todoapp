

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const clearButtons = document.querySelector("[data-all-clear]");
const display = document.querySelector("[data-display]");

class Calculator {
    constructor(display) {
      this.display = display
      this.clear() 
    }

    clear() {
this.currentOperand = ""
this.previousOperand = ""
this.operator = undefined
    }

    appendNumber(number) {
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    operation(operator) {
        if (this.previousOperand !== "") {
            this.compute()
        }
       this.operator = operator
       this.previousOperand = this.currentOperand
       this.currentOperand = ""
    }

    delete(){

    }

compute() {
let sum
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if(isNaN(prev) || isNaN(current)) return
switch(this.operator) {
      case '+': 
      sum = prev + current
      break

      case '-': 
      sum = prev - current
      break

      case '/': 
      sum = prev / current
      break

      case 'x': 
      sum = prev * current
      break

      default:
        return
}
this.current = sum
this.operator = undefined
this.previousOperand = ''
}

updateDisplay(){
this.display.innerText = this.currentOperand 
}


}

const calculator = new Calculator(display)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.operation(operator.innerText)
    })
})

equalButton.addEventListener( 'click', button => {
    calculator.compute() 
    calculator.updateDisplay()
} )