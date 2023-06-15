let nav
let navItems
let navBurgerBtn
let navMobile
let footerYear
let body
let allNavMobileItems
let pagePathName

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	handleCurrentYear()
	navActiveClassSetter()
}

const prepareDOMElements = () => {
	pagePathName = window.location.pathname
	nav = document.querySelector('.nav')
	navItems = document.querySelectorAll('.nav__item')
	navBurgerBtn = document.querySelector('.nav__burger-btn')
	navMobile = document.querySelector('.nav__items-mobile')
	footerYear = document.querySelector('.footer__year')
	body = document.querySelector('body')
	allNavMobileItems = document.querySelectorAll('.nav__item-mobile')
}

const prepareDOMEvents = () => {
	navBurgerBtn.addEventListener('click', handleBurgerBtnClick)
	handleNavMobileItemClick()
}

const navActiveClassSetter = () => {
	if (pagePathName === '/contact.html') {
		navItems[3].classList.add('nav__item--active')
	}
}

const handleBurgerBtnClick = () => {
	navMobile.classList.toggle('nav__items-mobile--active')
	body.classList.toggle('scroll-block')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNavMobileItemClick = () => {
	allNavMobileItems.forEach(item => {
		item.addEventListener('click', () => {
			handleBurgerBtnClick()
		})
	})
}

document.addEventListener('DOMContentLoaded', main)
