let colorCircles = document.getElementsByClassName('colorCircle');
let currentColor = localStorage.getItem('color');
let currentColorId = localStorage.getItem('colorId');
let currentButtonColorA = localStorage.getItem('buttonColorA');
let currentButtonColorB = localStorage.getItem('buttonColorB');
let colorPickerBtn = document.querySelector('#colorPickerBtn');
let colorsDiv = document.querySelector('#colors');

function confirmColor(color, colorId, buttonColorA, buttonColorB) {
    for (let i = 0; i < colorCircles.length; i++) {
        colorCircles[i].classList.remove('active');
    }
    colorCircles[colorId].classList.add('active');
    document.documentElement.style.setProperty('--active-color-bg-dark', `var(--color-${color}-dark)`);
    document.documentElement.style.setProperty('--active-color-bg-light', `var(--color-${color}-light)`);
    document.documentElement.style.setProperty('--active-button-purple', `var(--button-${buttonColorA})`);
    document.documentElement.style.setProperty('--active-button-red', `var(--button-${buttonColorB})`);
    localStorage.setItem('color', color);
    localStorage.setItem('colorId', colorId);
    localStorage.setItem('buttonColorA', buttonColorA);
    localStorage.setItem('buttonColorB', buttonColorB);
}

colorCircles[0].addEventListener('click', () => {
    confirmColor('bg', 0, 'purple', 'red');
});
colorCircles[1].addEventListener('click', () => {
    confirmColor('lightbluepink', 1, 'darkblue', 'lightgreen');
});
colorCircles[2].addEventListener('click', () => {
    confirmColor('darkgreengold', 2, 'orange', 'yellow');
});
colorCircles[3].addEventListener('click', () => {
    confirmColor('darknavygray', 3, 'darkpink', 'darkpurple');
});

colorPickerBtn.addEventListener('click', () => {
    if (colorsDiv.classList.contains('invisible')) {
        colorsDiv.classList.remove('invisible');
        colorsDiv.classList.add('scale-up-top');
        setTimeout(() => {
            colorsDiv.classList.remove('scale-up-top');
        }, 260);
    }
    else {
        colorsDiv.classList.add('scale-up-top-reverse');
        setTimeout(() => {
            colorsDiv.classList.add('invisible');
            colorsDiv.classList.remove('scale-up-top-reverse');
        }, 260);
    }
})

confirmColor(currentColor, currentColorId,currentButtonColorA,currentButtonColorB);
