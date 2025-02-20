let previousValue = ''
let currentValue = ''
let operator = ''


const previousScreen = document.querySelector('.previous-screen')
const currentScreen = document.querySelector('.current-screen')

// while the number clicks
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
   number.addEventListener('click', (e) => {
      let num = e.target.textContent
      operatingNumbers(num)
      // showing the values in screen
      currentScreen.textContent = currentValue
   })
})

// while the operator clicks
const operators = document.querySelectorAll('.operator')
operators.forEach((op) => {
   op.addEventListener('click', (e) => {
      console.log(e.target.textContent)
      if (!currentValue == '') {
         let ope = e.target.textContent
         operatingOperators(ope)
         // showing values and operator
         previousScreen.textContent = previousValue + ' ' + operator
         currentScreen.textContent = currentValue
      } else {
         console.log('please enter a number button first')
      }
      
   })
})

// while the equal button clicks
const equalButton = document.querySelector('.equal')
equalButton.addEventListener('click', () => {
   // check the values are true
   if (!previousValue == '' && !currentValue == '') {
      // calculating values
      calculation()
      previousScreen.textContent += ' ' + currentValue
      if (previousValue.length <= 19) {
         currentScreen.textContent = previousValue
         currentValue = ''
         currentValue = previousValue
      } else {
         currentScreen.textContent = previousValue.slice(0,10) + "..."
         currentValue = ''
         currentValue = previousValue
      }
   }
})

// while the clear button clicks
const clearButton = document.querySelector('.clear-btn')
clearButton.addEventListener('click', () => {
   previousValue = ''
   currentValue = ''
   previousScreen.textContent = previousValue
   currentScreen.textContent = currentValue
})

// while the decimal button clicks
const decimalButton = document.querySelector('.decimal')
decimalButton.addEventListener('click', () => {
   addingDecimal()
})

// operating number when it clicks
function operatingNumbers(num) {
   // check the length of entered values
   if (currentValue.length < 9) {
      currentValue += num
   }
}

// operating operator when it clicks
function operatingOperators(ope) {
   // adding value to ope
   operator = ope
   // add the values to previousValue
   previousValue = currentValue
   // make current value to empty 
   currentValue = ''
}

// adding decimal when the button clicks
function addingDecimal() {
   if (!currentValue.includes('.')) {
      currentValue += '.'
   }
}

// calculating values
function calculation() {
   // make string to numbers
   previousValue = parseFloat(previousValue)
   currentValue = parseFloat(currentValue)

   // checking the operator
   switch(operator) {
      case '/':
         previousValue /= currentValue
         break
      case 'X':
         previousValue *= currentValue
         break
      case '-':
         previousValue -= currentValue
         break
      case '+':
         previousValue += currentValue
         break
   }

   console.log(`result is ${previousValue}`)
   // make numbers to round maximum
   previousValue = makeNumberRound(previousValue)
   // make numbers to string
   previousValue = previousValue.toString()
   currentValue = currentValue.toString()
}

function makeNumberRound(num) {
   return Math.round(num * 1000) / 1000
}

