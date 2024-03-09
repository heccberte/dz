const orderBtn = document.querySelectorAll('.main__btn')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__icon-close')
const sendMessageBtn = document.querySelector('.modal__btn')
const modalContent = document.querySelector('.modal-content')
const modalInput = document.querySelector('.modal__input')
const modalCheckbox = document.querySelector('.modal__input-checkbox')
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

//check form

sendMessageBtn.onclick = closeForm

function closeForm(e) {
	e.preventDefault();
	if (modalInput.validity.valid && modalCheckbox.checked) {
		modal.classList.remove('modal--show')
	} else if (!modalInput.validity.valid) {
		alert('Заполните поле Email')
	} else if (!modalCheckbox.checked) {
		alert('Поставьте флажок')
	}
}

// BURGER
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
