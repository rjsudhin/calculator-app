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
allOperators.forEach((operator) => {
  operator.addEventListener('mousedown', (e) => {
    handlingOperator(e.target.textContent)
    currentDisplay.textContent = previousValue
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
  operator = op
  previousValue = currentValue
  currentValue = ''
}