class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

}

delete(){

}
appendNumber(number){
}

chooseOperation(operation){
}

compute(){
}

updateDisplay(){

}

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equelsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = doument.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('clik', ()=>
}








//   $(function () {
//
//      var calculator = $("calculator");
//      var functionButtons ="CBack*/-+=";
//
//      var lines = [
//                  ["C", "Back", "()", "/"],
//                  ["7", "8", "9", "*"],
//                  ["4", "5", "6", "+" ],
//                  ["1", "2", "3", "-" ],
//                  ["0", ".", "=" ]
//          ];
//
//      var input = $("<div class='input'> </div>");
//      calculator.append(input);
//
//      var equal, times, plus, minus, back, clear, slash;
//
//      for (var i = 0; i< lines.length; i++) {
//          var line = "<div class='line'></div>;
//              for (var j=0; j < lines[i].length; j++) {
//                  var btn = $("<div class= 'button b"+lines[i][j]+"'></div>);
//              }
//              if (btn.text()=="+") plus = btn;
//              else if (btn.text()==("-")) minus = btn;
//              else if (btn.text()==("*")) times = btn;
//              else if (btn.text()==("/")) slash = btn;
//              else if (btn.text()==("Back")) back = btn;
//              else if (btn.text()==("=")) equal = btn;
//              else if (btn.text()==("C")) clear = btn;
//              line.append(btn);
//      }
//      calculator.append(line);
//  }
//
// });