const toTopButton = document.querySelector('.to-top')

function handleScroll() {
	if (window.scrollY > 400) {
		toTopButton.classList.add('is-show')
	} else {
		toTopButton.classList.remove('is-show')
	}
}

toTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

window.addEventListener('scroll', handleScroll)
handleScroll()