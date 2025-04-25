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

// calculation configure
equal.addEventListener('mousedown', () => {
  // converting string to number
  previousValue = parseFloat(previousValue)
  currentValue = parseFloat(currentValue)
  // getting the calculation
  switch (operator) {
    case '/': 
      previousValue /= currentValue
      break
    case 'x':
      previousValue *= currentValue
      break
    case '+':
      previousValue += currentValue
      break
    case '-':
      previousValue -= currentValue
      break
  }


  // round the maximum values
  previousValue = roundMaximumValue(previousValue)
  console.log(previousValue)

})

// rounding numbers
function roundMaximumValue(num) {
  return Math.round(num * 1000) / 1000
}


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