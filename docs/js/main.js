const orderBtn = document.querySelectorAll('.main__btn')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__icon-close')
const sendMessageBtn = document.querySelector('.modal__btn')
const modalContent = document.querySelector('.modal-content')
const modalInput = document.querySelector('.modal__input')
const navLinks = document.querySelectorAll('.nav-list__link')

const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const closeBurger = document.querySelector('.close__burger')

orderBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('modal--show')
	})
})

modal.addEventListener('click', (e) => {
	if (e.target == closeModalBtn) {
		modal.classList.remove('modal--show')
	}
	if (e.target != modalContent && e.target == modal) {
		modal.classList.remove('modal--show')
	}
})

sendMessageBtn.onclick = btnHandler

function btnHandler() {
	let f = document.forms[0],
		str;
	for (let item of f.elements)
		if (!item.validity.valid) {
			if (item.validity.patternMismatch) {
				str = `${item.id}: ${item.validationMessage} ${item.pattern}`
				
			}
				
			else
				str = `${item.id}: ${item.validationMessage}`;
			alert(str);
			break;
			
		} else {
			modal.classList.remove('modal--show')

		}
		
}







burger.addEventListener('click', (e) => {
	nav.classList.add('nav--show')
})
closeBurger.addEventListener('click', () => {
	nav.classList.remove('nav--show')
})
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		nav.classList.remove('nav--show')
	})
})
