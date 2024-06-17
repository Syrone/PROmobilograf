const filters = document.querySelectorAll('.filter')

filters?.forEach((el) => {
	const btn = el.querySelector('.filter__btn')

	if (btn) {
		btn.addEventListener('click', () => {
			filters.forEach((filter) => {
				if (filter !== el) {
					filter.classList.remove('is-show');
				}
			});

			el.classList.toggle('is-show');
		});
	}

	document.addEventListener('click', (event) => {
		filters.forEach((filter) => {
				if (!filter.contains(event.target)) {
						filter.classList.remove('is-show');
				}
		});
});
})