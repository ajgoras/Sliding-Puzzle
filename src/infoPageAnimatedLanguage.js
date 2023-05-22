let langButtondiv = document.getElementById("langButtondiv");
let languageHeader = document.getElementById("language-header");
let languageParagraph = document.getElementById("language-paragraph");
let langSpan = document.getElementById("langSpan");
setInterval(() => {
  changeLanguageToPL();
  setTimeout(() => {
    changeLanguageToEN();
  }, 5000);
}, 10000);

function changeLanguageToPL() {
  langButtondiv.classList.add("PL");
  languageHeader.innerText = "Zmień język!";
  languageParagraph.innerText =
    "W prawym górnym rogu gry znajduje się przycisk zmiany języka. Kliknij w ten przycisk by zmienić język na Polski lub Angielski.";
  langSpan.innerText = "Język";
}

function changeLanguageToEN() {
  langButtondiv.classList.remove("PL");
  languageHeader.innerText = "Change the language!";
  languageParagraph.innerText =
    "In the upper right corner of the game there is a button which changes the language. Click on this button to change the language to Polish or English.";
  langSpan.innerText = "Language";
}
