const previousOperationsText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectAll("#buttons-container button");

class Calculator {
    constructor(previousOperationsText, currentOperationText) {
         this.previousOperationsText = previousOperationsText;
         this.currentOperationText = currentOperationText;
         this.currentOperationText = "";
}

    // add digit to calculator screen
        addDigit(digit) {
    // check if current operation already has adot
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }

        this.currentOperationText = digit
        this.updateScreen()
}

    // Process all calculator operations
    processOperation(operation) {
    // check if current is empty
    if(this.currentOperationText.innerText === "" && operation !== "c") {
        // change operation
        if(this.previousOperationsText.innerText !== "" ) 
        this.changeOperation(operation);
        
    }
    return;

        //get current and previous value
        let operationValue
        let previous = +this.previousOperationsText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                default:
                return;
            case "-":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                return;
            case "/":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                return;
            case "*":
                operationValue = previous + current;
                this.processDelOperation()
                break;
                return; 
            case "DEL":
                this.updateScreen(operationValue, operation, current, previous);
                break;
                return;
            case "CE":
                this.processClearCurrentOperation();
                break;
                return;     
            case "C":
                this.processClearOperation();
                break;
                return; 
            case "=":
                this.processEqualOperation();
                break;

                return;       
    }


     // change values of the calculator screen
     updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
      ); {
        if (operationValue === null) {
          // Append number to current value
          this.currentOperationText.innerText += this.currentOperation;
        } else {
          // Check if value is zero, if is just add current value
          if (previous === 0) {
            operationValue = current;
          }
          // Add current value to previous
          this.previousOperationText.innerText = `${operationValue} ${operation}`;
          this.currentOperationText.innerText = "";
        }
      }
    }

   // change math operation
   changeOperation(operation) {

    const mathOperation = ["*", "/", "-", "+"]

    if(!mathOperation.includes(operation)) {
        return;    
    }
    ///123 operation
this.previousOperationsText.innerText = this.previousOperationsText.innerText.slice(0, -1) + operation;
}

// Delete the last digit
processDelOperation() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
}

// Clear the current operation
processClearCurrentOperation() {
    this.currentOperationText.innerText = "";
    
}

// Clear All operation
processClearOperation() {
    this.currentOperationText.innerText = "";
    this.previousOperationsText.innerText = "";
}

// process an operation
processEqualOperation() {
    const operation = previousOperationsText.innerText.split(" ")[1]
    this.processOperation(operation);

}
}

const calc = new Calculator(previousOperationsText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innertext;

        if(+value >= 0 || value === "." ) {
            calc.addDigit(value);
        } else {
            console.log("Op: "+ value);
        }


    });
});
