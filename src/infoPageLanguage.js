let language;
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

let mainDescriptionText = document.querySelector('h3');
let h2Headers = document.querySelectorAll('h2');
let h4Header = document.querySelector('h4');
let paragraphs = document.querySelectorAll('p');
let movesText = document.querySelector('#moves');
let timerText = document.querySelector('#timer');


function changeLanguageTo(lang) {
  if (lang == "PL") {
    language = "PL";
    mainDescriptionText.innerText = "Klikaj na puzzle znajdujące się w pobliżu pustego miejsca aby je przesuwać. Pobijaj rekordy w najkrótszym czasie i przy najmniejszej liczbie ruchów. Układaj własne zdjęcia na różnych poziomach trudności.";
    h2Headers[0].innerText = 'Układaj inne zdjęcia';
    h2Headers[1].innerText = 'Lub cokolwiek zechcesz';
    h2Headers[2].innerText = 'Gra jest zbyt łatwa?';
    h2Headers[3].innerText = 'Pomieszaj!';
    h2Headers[4].innerText = 'Nie możesz ułożyć?';
    h2Headers[5].innerText = 'Działaj szybko i mądrze!';
    h2Headers[7].innerHTML = '<span class="selected-word-close">Wyłącz</span> grę...';
    h4Header.innerHTML = 'I <span class="selected-word-continue">kontynuuj</span> kiedy chcesz.';
    paragraphs[1].innerText = 'Możesz zmienić zdjęcie, które chcesz ułożyć, klikając na przycisk Menu Zdjęć i wybierając zdjęcie za pomocą strzałek lub kropek pod zdjęciem.';
    paragraphs[2].innerText = 'Nie ograniczaj się! Możesz dodać własne zdjęcie, jakie tylko chcesz. Jeśli zdjęcie nie będzie kwadratowe zostaniesz zapytany czy chcesz je przyciąć czy rozciągnąć.';
    paragraphs[3].innerText = 'Kliknij na przycisk zmiany poziomu trudności, aby wybrać poziom trudności i zmienić liczbę puzzli.';
    paragraphs[4].innerText = 'Kliknij przycisk Mieszaj Puzzle i pomieszaj je.';
    paragraphs[5].innerText = 'Kliknij przycisk Resetuj Puzzle, aby przywrócić klocki na ich pierwotne miejsce.';
    paragraphs[6].innerText = 'Każdy twój ruch jest zapisywany, zwiększając ich liczbę. Od momentu przesunięcia pierwszego klocka rozpoczyna się odliczanie czasu. Działaj mądrze i szybko, pobijaj własne rekordy.';
    paragraphs[12].innerText = "W pamięci przeglądarki zapisywany jest stan gry, w tym ustawienia, własne zdjęcia, poziom trudności, czas gry czy liczba ruchów.";
    paragraphs[13].innerText = "Zawsze możesz zamknąć grę i wrócić do niej w dowolnym momencie.";
    isTimerRunning ? timerText.innerText = 'Czas: ' + infoFormatTime(countdownTimer) : timerText.innerText = 'Czas: 0:00';

  } else {
    language = "EN";
    mainDescriptionText.innerText = "Click on the blocks that are near the empty space to move the puzzle. Break records in the shortest time and with the least number of moves. Solve your own pictures in different difficulty levels.";
    h2Headers[0].innerText = 'Solve other pictures';
    h2Headers[1].innerText = 'Or whatever You want';
    h2Headers[2].innerText = 'Is the game too easy?';
    h2Headers[3].innerText = 'Mix it!';
    h2Headers[4].innerText = "You Can't solve it?";
    h2Headers[5].innerText = "Play fast and smart!";
    h2Headers[7].innerHTML = '<span class="selected-word-close">Close</span> the game...';
    h4Header.innerHTML = 'And <span class="selected-word-continue">continue</span> whenever you want.';
    paragraphs[1].innerText = 'You can change the photo you want to solve by clicking on the Image Menu button and select the photo using the arrows or dots under the photo.';
    paragraphs[2].innerText = "Don't limit yourself! You can add your own photo whatever you want. If the photo is not square you will be asked if you want to crop or stretch it.";
    paragraphs[3].innerText = "Click on the change difficulty button to select the difficulty level and change the number of blocks.";
    paragraphs[4].innerText = "Click on the Mix Puzzle button and mix them up.";
    paragraphs[5].innerText = "Click on the Reset Puzzle button to return the blocks to their original place.";
    paragraphs[6].innerText = "Each of your moves is saved, increasing the number of moves. From the moment you move the first block, the timer starts counting down. Act smart and fast and break your records.";
    paragraphs[13].innerText = "You can always close the game and return to it at any time.";
    isTimerRunning ? timerText.innerText = 'Time: ' + infoFormatTime(countdownTimer) : timerText.innerText = 'Time: 0:00';
  }
}

setInterval(() => {
  loadLanguageFromLs();
}, 1500);