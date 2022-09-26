const initialFirstNumber = null
const initialCurrentNumber = null
const initialResultOperation = 0
const initialOperation = null

let firstNumber = initialFirstNumber
let currentNumber = initialCurrentNumber
let resultOperation = initialResultOperation
let operation = initialOperation

let resultPanel = document.getElementById('calculator-result')
const numericButtons = document.getElementsByName('calculator-button-numeric') 
const plusButton = document.getElementById('calculator-button-plus')
const restButton = document.getElementById('calculator-button-rest')
const multButton = document.getElementById('calculator-button-mult')
const divButton = document.getElementById('calculator-button-div')
const percentButton = document.getElementById('calculator-button-percent')
const symbolButton = document.getElementById('calculator-button-symbol')
const cleanButton = document.getElementById('calculator-button-clean')
const resultButton = document.getElementById('calculator-button-result')
const decimalButton = document.getElementById('calculator-button-decimal')

const captureButtonCleanResult = () => {
    cleanButton.addEventListener('click', () => {
    resultPanel.innerText = initialResultOperation
    firstNumber = initialFirstNumber
    currentNumber = initialCurrentNumber
    operation = initialResultOperation
    resultOperation = initialResultOperation})
}

const handleClickNumericButton = (clickValue) => {
    if(!Number(resultPanel.innerText)) { 
        return resultPanel.innerText = clickValue 
    }
    if((operation)) { 
        if(!currentNumber) { 
            currentNumber = clickValue
        } else { 
            currentNumber = currentNumber + clickValue
        }
        return resultPanel.innerText = currentNumber
    }
    resultPanel.innerText = resultPanel.innerText + clickValue 
}

const captureNumbers = () => numericButtons.forEach((numericButton)=> numericButton.addEventListener('click', (event) => {
        const value = event.target.innerText
        handleClickNumericButton(value)
    }))
    

const handleClickOperation = (currentOperation) => {
    if(operation && !currentNumber) return true
    else if(operation) {
        firstNumber = result() 
        operation = currentOperation
        currentNumber = initialCurrentNumber     
        return
    }
    else if(!operation) {
        operation = currentOperation
        firstNumber = resultPanel.innerText
    }
}

const captureOperationsButtons = (button, operation) => {
    button.addEventListener('click', () => {
        handleClickOperation(operation)
    })
}

const captureButtonPlus = () => {
    captureOperationsButtons(plusButton, "+")
}

const captureButtonRest = () => {
    captureOperationsButtons(restButton, "-")
}

const captureButtonMult = () => {
    captureOperationsButtons(multButton, "*")
}

const captureButtonDiv = () => {
    captureOperationsButtons(divButton, "/")
}

const captureButtonPerc = () => {
    percentButton.addEventListener('click', () => {
        firstNumber = parseFloat(resultPanel.innerText)
        resultPanel.innerText = ((Number(resultPanel.innerText)) / 100)       
    })
}

const captureOperations = () => {
    captureButtonPlus()
    captureButtonRest()
    captureButtonMult()
    captureButtonDiv()
    captureButtonPerc()
}

const captureButtonResult = () => {
    captureOperations()
   
    resultButton.addEventListener('click', () => {
        currentNumber = parseFloat(resultPanel.innerText)
        result();
    })
}

const captureButtondecimal = () => {
    decimalButton.addEventListener('click', () => {
        return resultPanel.innerText = parseFloat(resultPanel.innerText) + "."        
    })
}

const captureButtonNegativePositive = () => {
    symbolButton.addEventListener('click', () => {
        return resultPanel.innerText = ((Number(resultPanel.innerText)) * -1)
    })
}


const result = () => {
    switch(operation){
        case "+":
            resultOperation = parseFloat(firstNumber) + parseFloat(currentNumber)
            break;
        case "-":
            resultOperation = parseFloat(firstNumber) - parseFloat(currentNumber)
            break;
        case "*":
            resultOperation = parseFloat(firstNumber) * parseFloat(currentNumber)
            break;
        case "/":
            resultOperation = parseFloat(firstNumber) / parseFloat(currentNumber)
            break;
 
        default: 
        resultOperation = 99999
        }
    resultPanel.innerText = resultOperation
    return resultOperation
}

const calculator = () => {
    captureNumbers()
    captureButtondecimal()
    captureButtonNegativePositive()
    captureButtonCleanResult()
    captureButtonResult()
}

calculator()