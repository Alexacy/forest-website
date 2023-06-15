let sectionAboutUs
let sectionOffers
let sectionHeroImg
let nav
let navItems
let navBurgerBtn
let navBurgerIcon
let navMobile
let footerYear
let body
let allNavMobileItems


const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	handleCurrentYear()
	navItems[0].classList.add('nav__item--active')
}

const prepareDOMElements = () => {
	sectionAboutUs = document.querySelector('.about-us')
	sectionOffers = document.querySelector('.offers')
	sectionHeroImg = document.querySelector('.hero-img')
	nav = document.querySelector('.nav')
	navItems = document.querySelectorAll('.nav__item')
	navBurgerBtn = document.querySelector('.nav__burger-btn')
	navBurgerIcon = document.querySelector('.nav__burger-icon')
	navMobile = document.querySelector('.nav__items-mobile')
	footerYear = document.querySelector('.footer__year')
	body = document.querySelector('body')
	allNavMobileItems = document.querySelectorAll('.nav__item-mobile')
}

const prepareDOMEvents = () => {
	window.addEventListener('scroll', scrollSpyHandle)
	navBurgerBtn.addEventListener('click', handleBurgerBtnClick)
	handleNavMobileItemClick()
}


const scrollSpyHandle = () => {
	if (nav.offsetTop + nav.offsetHeight <= sectionAboutUs.offsetTop) {
		activeClassReset()
		navItems[0].classList.add('nav__item--active')
	} else if (nav.offsetTop + nav.offsetHeight >= sectionHeroImg.offsetTop) {
		activeClassReset()
		navItems[2].classList.add('nav__item--active')
	} else {
		activeClassReset()
		navItems[1].classList.add('nav__item--active')
	}
}

const activeClassReset = () => {
	navItems.forEach(navLink => {
		navLink.classList.remove('nav__item--active')
	})
}

const handleBurgerBtnClick = () => {
	burgerIconChange()
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

const burgerIconChange = () => {
	if(navBurgerIcon.getAttribute('src') == './img/icons/menu.svg'){
		navBurgerIcon.setAttribute('src', './img/icons/x.svg')
	}
	else{
		navBurgerIcon.setAttribute('src', './img/icons/menu.svg')
	}
}

document.addEventListener('DOMContentLoaded', main)