const sliderPrices = document.querySelectorAll('.slider-price')

sliderPrices?.forEach((el) => {
	const rangeMin = el.querySelector('.slider-price-min'),
		rangeMax = el.querySelector('.slider-price-max'),
		rangeTrack = el.querySelector('.slider-price-track'),
		displayMin = el.querySelector('.slider-price-display-min'),
		displayMax = el.querySelector('.slider-price-display-max'),
		currentMin = el.querySelector('.slider-price-current-min'),
		currentMax = el.querySelector('.slider-price-current-max')


	const sliderMinValue = parseInt(rangeMin.min)
	const sliderMaxValue = parseInt(rangeMin.max)
	let minGap = parseInt(((sliderMaxValue - sliderMinValue) * 5) / 100);

	function formatPrice(value) {
		return value.toLocaleString('ru-RU')
	}

	function sliderCurrent() {
		let minValue = parseInt(rangeMin.value)
		let maxValue = parseInt(rangeMax.value)
		currentMin.innerHTML = formatPrice(minValue)
		currentMax.innerHTML = formatPrice(maxValue)
	}

	function sliderMin() {
		let minValue = parseInt(rangeMin.value)
		let maxValue = parseInt(rangeMax.value)

		if (maxValue - minValue <= minGap) {
			minValue = maxValue - minGap
			rangeMin.value = minValue
		}

		if (minValue < sliderMinValue) {
			minValue = sliderMinValue
			rangeMin.value = minValue
		}

		displayMin.innerHTML = formatPrice(minValue) + ' ₽'
		sliderTrack()
	}

	function sliderMax() {
		let minValue = parseInt(rangeMin.value)
		let maxValue = parseInt(rangeMax.value)

		if (maxValue - minValue <= minGap) {
			maxValue = minValue + minGap
			rangeMax.value = maxValue
		}

		if (maxValue > sliderMaxValue) {
			maxValue = sliderMaxValue
			rangeMax.value = maxValue
		}

		displayMax.innerHTML = formatPrice(maxValue) + ' ₽'
		sliderTrack()
	}

	function sliderTrack() {
		rangeTrack.style.left = ((rangeMin.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100 + '%'
		rangeTrack.style.right = 100 - ((rangeMax.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100 + '%'
	}

	sliderMin()
	sliderMax()
	sliderCurrent()

	rangeMin.addEventListener('input', (event) => {
		let minValue = parseInt(rangeMin.value)
		let maxValue = parseInt(rangeMax.value)

		if (maxValue - minValue <= minGap) {
			rangeMax.value = minValue + minGap
			maxValue = minValue + minGap
		}

		if (minValue < sliderMinValue) {
			rangeMin.value = sliderMinValue
		}

		sliderMin()
		sliderMax()
	})

	rangeMax.addEventListener('input', (event) => {
		let minValue = parseInt(rangeMin.value)
		let maxValue = parseInt(rangeMax.value)

		if (maxValue - minValue <= minGap) {
			rangeMin.value = maxValue - minGap
			minValue = maxValue - minGap
		}

		if (maxValue > sliderMaxValue) {
			rangeMax.value = sliderMaxValue
		}

		sliderMin()
		sliderMax()
	})
})