const dark = document.querySelector('.js-dark')
const light = document.querySelector('.js-light')

dark.addEventListener('click', evt => {
  evt.preventDefault()
  document.body.classList.remove('default')
  document.body.classList.add('dark')
})

light.addEventListener('click', evt => {
  evt.preventDefault()
  document.body.classList.remove('dark')
  document.body.classList.add('default')
})