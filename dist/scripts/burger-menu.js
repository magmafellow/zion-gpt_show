
const burger = document.querySelector('.burger-menu')
const menu = document.querySelector('.header__menu')
const header = document.querySelector('.header')

const onBurgerClickHandler = (e) => {
  header.classList.toggle('menu-active')
}

burger.addEventListener('click', onBurgerClickHandler)
