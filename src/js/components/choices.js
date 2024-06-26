import Choices from 'choices.js'

const selectChoices = document.querySelectorAll('.js-choices')
const selectChoicesLanguage = document.querySelectorAll('.js-choices-language')

function getSavedLanguage() {
  const name = 'selectedLang';
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

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
	callbackOnCreateTemplates: function(template) {
    return {
			item: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${
          data.highlighted
            ? classNames.highlightedState
            : classNames.itemSelectable
        } ${
          data.placeholder ? classNames.placeholder : ''
        } notranslate" data-item data-id="${data.id}" data-value="${data.value}" ${
          data.active ? 'aria-selected="true"' : ''
        } ${data.disabled ? 'aria-disabled="true"' : ''}>
            ${data.label}
          </div>
        `);
      },
      choice: ({ classNames }, data) => {
        return template(`
          <div class="${classNames.item} ${classNames.itemChoice} ${
          data.disabled ? classNames.itemDisabled : classNames.itemSelectable
        } notranslate" data-google-lang="${data.value}" data-select-text="${this.config.itemSelectText}" data-choice ${
          data.disabled
            ? 'data-choice-disabled aria-disabled="true"'
            : 'data-choice-selectable'
        } data-id="${data.id}" data-value="${data.value}" ${
          data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
        }>
        ${data.label}
        </div>
        `);
      },
    };
  }
}

selectChoices?.forEach((select) => {
  new Choices(select, selectConfig)
})

selectChoicesLanguage?.forEach((select) => {
  const element = new Choices(select, selectConfigLanguage)
  
  const savedLang = getSavedLanguage();
  
  if (savedLang) {
    element.setChoiceByValue(savedLang);
  }
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