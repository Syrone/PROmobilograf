const checkboxLabels = document.querySelectorAll('.btn-checkbox')

checkboxLabels?.forEach((label) => {
	const checkbox = label.querySelector('.checkbox')

	if (label.classList.contains('is-active')) {
		checkbox.checked = true;
	}

	if (checkbox.checked) {
		label.classList.add('is-active');
	}

	checkbox.addEventListener('change', () => {
		if (checkbox.checked) {
			label.classList.add('is-active');
		} else {
			label.classList.remove('is-active');
		}
	});
})