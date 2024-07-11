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

// operating number when it clicks
function operatingNumbers(num) {
   // check the length of entered values
   if (currentValue.length < 9) {
      currentValue += num
   }
}

