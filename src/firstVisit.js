let isFirstVisit;
let introStage = 0;
let firstVisitOkButton = document.querySelector(
  "#firstVisitOkButtonDiv button"
);
let firstVisitSkipButton = document.querySelector("#firstVisitSkipButton");
let firstVisitInfoDiv = document.querySelector("#firstVisitInfoDiv");
let firstVisitENButton = document.querySelector("#firstVisitENButton");
let firstVisitPLButton = document.querySelector("#firstVisitPLButton");
let firstVisitButtonPresentationDiv = document.querySelector(
  "#firstVisitButtonPresentationDiv"
);
let firstVisitOkButtonDiv = document.querySelector("#firstVisitOkButtonDiv");
let firstVisitHelloDiv = document.querySelector("#firstVisitHelloDiv");
let firstVisitSelectedLanguage = "EN";
let firstVisitInfoButton = document.querySelector("#firstVisitInfoButton");
let firstVisitLanguageButton = document.querySelector(
  "#firstVisitLanguageButton"
);
let firstVisitColorPickerBtn = document.querySelector(
  "#firstVisitColorPickerBtn"
);

if (
  localStorage.getItem("isFirstVisit") == null ||
  localStorage.getItem("isFirstVisit") == "true"
) {
  firstVisitInfoDiv.classList.remove("invisible");
  isFirstVisit = "true";
  localStorage.setItem("isFirstVisit", isFirstVisit);
}

function translateTo(lang, stage) {
  if (stage === 0) {
    if (lang === "EN") {
      firstVisitSkipButton.innerText = "Skip";
      firstVisitHelloDiv.children[1].innerText = "Hello!";
      firstVisitHelloDiv.children[2].innerText =
        "It looks like you are here for the first time";
      firstVisitHelloDiv.children[3].innerText = "Choose your language";
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Click the button that looks like this to open a page with instructions";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "It is located in the upper left corner of the game";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "There you will learn all the information about the game";
    }
    if (lang === "PL") {
      firstVisitSkipButton.innerText = "Pomiń";
      firstVisitHelloDiv.children[1].innerText = "Cześć!";
      firstVisitHelloDiv.children[2].innerText =
        "Wygląda na to, że jesteś tu po raz pierwszy";
      firstVisitHelloDiv.children[3].innerText = "Wybierz swój język";
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Kliknij przycisk, który tak wygląda aby otworzyć stronę z instrukcjami";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "Jest on zlokalizowany w lewym górnym rogu gry";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "W tamtym miejscu dowiesz się wszystkich informacji o grze";
    }
  }
  if (stage === 1) {
    if (lang === "EN") {
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Click the button that looks like this to change game theme";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "It is located in the upper left corner of the game under the instructions button";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "Choose your favorite color scheme";
    }
    if (lang === "PL") {
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Kliknij przycisk, który tak wygląda aby zmienić motyw gry";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "Jest on zlokalizowany w lewym górnym rogu gry pod przyciskiem instrukcji";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "Wybierz swój ulubiony motyw kolorystyczny";
    }
  }
  if (stage === 2) {
    if (lang === "EN") {
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Click the button that looks like this to change language";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "It is located in the upper right corner of the game";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "You can change the language at any time";
    }
    if (lang === "PL") {
      firstVisitButtonPresentationDiv.children[0].children[0].innerText =
        "Kliknij przycisk, który tak wygląda aby zmienić język";
      firstVisitButtonPresentationDiv.children[0].children[4].innerText =
        "Jest on zlokalizowany w prawym górnym rogu gry";
      firstVisitButtonPresentationDiv.children[0].children[5].innerText =
        "Język możesz zmienić w każdej chwili";
    }
  }
}

function nextStage(stage, lang) {
  if (stage === 0) {
    if (lang === "EN") {
      firstVisitButtonPresentationDiv.classList.remove("opacity0");
      firstVisitButtonPresentationDiv.classList.remove("visibilityHidden");
      firstVisitOkButtonDiv.classList.remove("opacity0");
      firstVisitOkButtonDiv.classList.remove("visibilityHidden");
      translateTo("EN", 0);
    }
    if (lang === "PL") {
      firstVisitButtonPresentationDiv.classList.remove("opacity0");
      firstVisitButtonPresentationDiv.classList.remove("visibilityHidden");
      firstVisitOkButtonDiv.classList.remove("opacity0");
      firstVisitOkButtonDiv.classList.remove("visibilityHidden");
      translateTo("PL", 0);
    }
  }
  if (stage === 1) {
    firstVisitENButton.classList.add("opacity0");
    firstVisitPLButton.classList.add("opacity0");
    firstVisitOkButton.classList.add("opacity0");
    firstVisitHelloDiv.children[3].classList.add("opacity0");
    firstVisitButtonPresentationDiv.classList.add("opacity0");
    setTimeout(() => {
      translateTo(lang, 1);
      firstVisitInfoButton.classList.add("invisible");
      firstVisitColorPickerBtn.classList.remove("invisible");
    }, 190);

    setTimeout(() => {
      firstVisitENButton.classList.add("visibilityHidden");
      firstVisitPLButton.classList.add("visibilityHidden");
      firstVisitHelloDiv.children[3].classList.add("visibilityHidden");
      firstVisitButtonPresentationDiv.classList.remove("opacity0");
      firstVisitOkButton.classList.remove("opacity0");
    }, 340);
    introStage++;
  }
  if (stage === 2) {
    firstVisitHelloDiv.children[3].classList.add("opacity0");
    firstVisitButtonPresentationDiv.classList.add("opacity0");
    firstVisitOkButton.classList.add("opacity0");
    setTimeout(() => {
      translateTo(lang, 2);
      firstVisitColorPickerBtn.classList.add("invisible");
      firstVisitLanguageButton.classList.remove("invisible");
    }, 190);

    setTimeout(() => {
      firstVisitButtonPresentationDiv.classList.remove("opacity0");
      firstVisitOkButton.classList.remove("opacity0");
    }, 340);
    introStage++;
  }
  if (stage === 3) {
    firstVisitInfoDiv.classList.add("opacity0");
    changeLanguageTo("EN");
    if (firstVisitSelectedLanguage === "PL") {
      changeLanguageTo("PL");
    }
    isFirstVisit = "false";
    localStorage.setItem("isFirstVisit", isFirstVisit);

    setTimeout(() => {
      firstVisitInfoDiv.classList.add("invisible");
    }, 340);
  }
}

firstVisitOkButton.addEventListener("click", () => {
  nextStage(introStage + 1, firstVisitSelectedLanguage);
});

firstVisitSkipButton.addEventListener("click", () => {
  firstVisitInfoDiv.classList.add("opacity0");
  isFirstVisit = "false";
  localStorage.setItem("isFirstVisit", isFirstVisit);
  setTimeout(() => {
    firstVisitInfoDiv.classList.add("invisible");
  }, 300);
});

firstVisitENButton.addEventListener("click", () => {
  nextStage(0, "EN");
  firstVisitSelectedLanguage = "EN";
});

firstVisitPLButton.addEventListener("click", () => {
  nextStage(0, "PL");
  firstVisitSelectedLanguage = "PL";
});
