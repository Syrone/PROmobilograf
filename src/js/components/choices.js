import Choices from 'choices.js'

const selectChoices = document.querySelectorAll('.js-choices')
const selectChoicesLanguage = document.querySelectorAll('.js-choices-language')

const selectConfig = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
}

const selectConfigLanguage = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
	classNames: {
		containerOuter: 'choices choices--language'
	},
}

selectChoices?.forEach((select) => {
	new Choices(select, selectConfig)
})

selectChoicesLanguage?.forEach((select) => {
	new Choices(select, selectConfigLanguage)
})

const newChoices = document.querySelectorAll('.choices')

newChoices?.forEach((choices) => {
	const inner = choices.querySelector('.choices__inner'),
				select = choices.querySelector('select')

	if (inner) {
		const span = document.createElement('span');
		span.classList.add('icon', 'icon-lg', 'choices__inner-icon');

		const svgNamespace = "http://www.w3.org/2000/svg";
		const svg = document.createElementNS(svgNamespace, 'svg');
		const use = document.createElementNS(svgNamespace, 'use');

		use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/icons/down.svg#svg-down');

		svg.appendChild(use);
		span.appendChild(svg);
		inner.appendChild(span);
	}
})