const previousScreen = document.querySelector('.previous-screen')
const currentScreen = document.querySelector('.current-screen')

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
   number.addEventListener('click', () => {
      operatingNumbers()
   })
})

function operatingNumbers() {
   console.log('number clicks')
}