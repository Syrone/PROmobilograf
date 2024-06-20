const formFields = document.querySelectorAll('.form-field')

formFields?.forEach((el) => {
	const field = el.querySelector('.field'),
		btn = el.querySelector('.form-field__btn')

	if (field) {
		field.addEventListener('mouseenter', () => {
			if (!el.classList.contains('is-focus')) {
				el.classList.add('is-hover');
			}
		});

		field.addEventListener('mouseleave', () => {
			if (!el.classList.contains('is-focus')) {
				el.classList.remove('is-hover');
			}
		});

		field.addEventListener('focus', () => {
			el.classList.add('is-focus');
			el.classList.remove('is-hover');
		});
		field.addEventListener('blur', () => {
			el.classList.remove('is-focus');

			if (field.hasAttribute('required')) {
				if (!field.value.trim()) {
					el.classList.add('is-invalid');
				} else {
					el.classList.remove('is-invalid');
				}
			}
		});

		if (field.hasAttribute('required')) {
			field.addEventListener('input', () => {
				if (!field.value.trim()) {
					el.classList.add('is-invalid');
				} else {
					el.classList.remove('is-invalid');
				}
			});
		}

		if (el.classList.contains('form-field--password') && btn) {
			btn.addEventListener('click', () => {
				if (field.type === 'password') {
					field.type = 'text'
					btn.classList.add('is-active')
				} else {
					field.type = 'password'
					btn.classList.remove('is-active')
				}
			});
		}

		if (el.closest('.form-control--code')) {
			const fields = el.querySelectorAll('.field')

			fields?.forEach((field) => {
				field.addEventListener('input', (event) => {
					const value = event.target.value;
					const parent = event.target.closest('.form-field');
	
					if (!/^\d$/.test(value)) {
						parent.classList.remove('is-filled');
						parent.classList.add('is-invalid');
						event.target.value = '';
					} else {
						parent.classList.add('is-filled');
						parent.classList.remove('is-invalid');
	
						const nextField = parent.nextElementSibling?.querySelector('.field');
						if (nextField) {
							nextField.focus();
						}
					}

				});

				field.addEventListener('keydown', (event) => {
          const parent = field.closest('.form-field');
          if (event.key === 'Backspace' && field.value === '') {
            const prevField = parent.previousElementSibling?.querySelector('.field');
            if (prevField) {
              prevField.focus();
            }
          }
        });
	
				field.addEventListener('focus', () => {
					const parent = field.closest('.form-field');
					parent.classList.remove('is-invalid');
				});
			})
    }
	}
})