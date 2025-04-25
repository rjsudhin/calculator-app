let previousValue = ''
let currentValue = ''
let operator = ''

const previousDisplay = document.querySelector('.previous-display')
const currentDisplay = document.querySelector('.current-display')
const clearBtn = document.querySelector('.clear-btn')

const AllNumbers = document.querySelectorAll('.number')
const allOperators = document.querySelectorAll('.operator')
const decimal = document.querySelector('.decimal')
const equal = document.querySelector('.equal')


// calculation begins
// numbers clicks
AllNumbers.forEach((number) => {
  number.addEventListener('mousedown', (e) => {
    handlingNumber(e.target.textContent)
    currentDisplay.textContent = currentValue
  })
})

// operators clicks
allOperators.forEach((op) => {
  op.addEventListener('mousedown', (e) => {
    handlingOperator(e.target.textContent)
    previousDisplay.textContent = previousValue + ' ' + operator 
    currentDisplay.textContent = currentValue
  })
})


// handling when the numbers clicks
function handlingNumber(num) {
  if (currentValue.length <= 8) {
    currentValue += num
    console.log(currentValue)
  }
}


// handling when the operator clicks
function handlingOperator(op) {
  previousValue = currentValue
  currentValue = ''
  operator = op
}