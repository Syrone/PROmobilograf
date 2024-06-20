const darkThemeButton = document.querySelector('.js-theme-dark');
const lightThemeButton = document.querySelector('.js-theme-light');
const darkThemeClass = 'dark-theme';
const activeClass = 'is-active';

const currentHour = new Date().getHours();

const setThemeByTime = () => {
    if (currentHour >= 20 || currentHour < 8) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
};

const selectedTheme = localStorage.getItem('selected-theme');

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add(darkThemeClass);
        darkThemeButton.classList.add(activeClass);
        lightThemeButton.classList.remove(activeClass);
    } else {
        document.documentElement.classList.remove(darkThemeClass);
        darkThemeButton.classList.remove(activeClass);
        lightThemeButton.classList.add(activeClass);
    }
    localStorage.setItem('selected-theme', theme);
};

if (selectedTheme) {
    setTheme(selectedTheme);
} else {
    setThemeByTime();
}

darkThemeButton.addEventListener('click', () => setTheme('dark'));
lightThemeButton.addEventListener('click', () => setTheme('light'));