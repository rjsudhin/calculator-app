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
      let ope = e.target.textContent
      operatingOperators(ope)
      // showing values and operator
      previousScreen.textContent = previousValue + ' ' + operator
      currentScreen.textContent = currentValue
      
   })
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

