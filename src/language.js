let language;
let langButton = document.getElementById('langButton');
let langSpan = document.getElementById('langSpan');
let imageAspectRatiodivText1 = document.getElementById('imageAspectRatiodivText1');
let imageAspectRatiodivText2 = document.getElementById('imageAspectRatiodivText2');
let stretchImageBtn = document.getElementById('stretchImageBtn');
let cropImageBtn = document.getElementById('cropImageBtn');

function loadLanguageFromLs() {
    if (localStorage.getItem('language')==null) {
        language = 'EN';
        localStorage.setItem('language', language);
    }
    else {
        language = localStorage.getItem('language');
        changeLanguageTo(language);
    }    
}

langButton.addEventListener('click', () => {
    language === 'PL' ? changeLanguageTo('EN') : changeLanguageTo('PL');
})

function changeLanguageTo(lang) {
    if (lang == 'PL') {
        langButtondiv.classList.add('PL');
        selectImgBtn.innerText = 'Menu Zdjęć';
        difficultyBtn.innerText = 'Trudność';
        mixBtn.innerText = 'Mieszaj Puzzle';
        resetPuzzleBtn.innerText = 'Resetuj Puzzle';
        selectBtn.innerText = 'Wybierz';
        addOwnImageLabel.innerText = 'Dodaj Własne Zdjęcie';
        deleteUploadedPhotosBtn.innerText = 'Usuń Własne Zdjęcia';
        easyBtn.innerText = 'Łatwy';
        mediumBtn.innerText = 'Średni';
        hardBtn.innerText = 'Trudny';
        langSpan.innerText = 'Język';
        countdownRun ? timer.innerText = 'Czas: ' + formatTime(countdownTime) : timer.innerText = 'Czas: 0:00';
        moves.innerText = 'Ruchy: ' + movesCount;
        imageAspectRatiodivText1.innerText = 'Zdjęcie nie jest kwadratowe';
        imageAspectRatiodivText2.innerText = 'Wybierz co chcesz zrobić';
        stretchImageBtn.innerText = 'Rozciągnij';
        cropImageBtn.innerText = 'Przytnij';
        language = 'PL';
        localStorage.setItem('language', language);
    }
    else {
        langButtondiv.classList.remove('PL');
        selectImgBtn.innerText = 'Image Menu';
        difficultyBtn.innerText = 'Difficulty';
        mixBtn.innerText = 'Mix Puzzle';
        resetPuzzleBtn.innerText = 'Reset Puzzle';
        selectBtn.innerText = 'Select';
        addOwnImageLabel.innerText = 'Add Own Image';
        deleteUploadedPhotosBtn.innerText = 'Delete Your Photos';
        easyBtn.innerText = 'Easy';
        mediumBtn.innerText = 'Medium';
        hardBtn.innerText = 'Hard';
        langSpan.innerText = 'Language';
        countdownRun ? timer.innerText = 'Time: ' + formatTime(countdownTime) : timer.innerText = 'Time: 0:00';
        moves.innerText = 'Moves: ' + movesCount;
        imageAspectRatiodivText1.innerText = 'Image is not square';
        imageAspectRatiodivText2.innerText = 'Select operation';
        stretchImageBtn.innerText = 'Stretch';
        cropImageBtn.innerText = 'Crop';
        language = 'EN';
        localStorage.setItem('language', language);
    }
    updateRecordsInDOM();
}

loadLanguageFromLs();