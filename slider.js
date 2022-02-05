var activephoto = 0;
var isSliderActive = 0;

let photos = [
    p1 = document.getElementById('photo0').src,
    p2 = document.getElementById('photo1').src
]

function setImg1() {
    document.getElementById("slide1").src = "img/ritka.jpg"
    activephoto = 0;
    mixingSound.play();
}
function setImg2() {
    document.getElementById("slide1").src = "img/maniek.jpg"
    activephoto = 1;
    mixingSound.play();
}

function nextPhoto() {
    let arrowRight = document.querySelector('#arrow-right');
    mixingSound.play();
    var whatPhoto = activephoto + 1;
    if (whatPhoto===2) {
        whatPhoto = 0;
    }
    activephoto = activephoto + 1;
    if (activephoto==2) {
        activephoto = 0;
    }
    arrowRight.classList.add('arrowslideR');
    setTimeout(() => {  arrowRight.classList.remove('arrowslideR'); }, 700);
    setTimeout(() => {  document.getElementById("slide1").src = photos[whatPhoto]; }, 100); 
}

function prevPhoto() {
    let arrowLeft = document.querySelector('#arrow-left');
    mixingSound.play();
    var whatPhoto = activephoto - 1;
    if (whatPhoto===-1) {
        whatPhoto = 1;
    }
    activephoto = activephoto - 1;
    if (activephoto==-1) {
        activephoto = 1;
    }
    
    arrowLeft.classList.add('arrowslideL');
    setTimeout(() => {  arrowLeft.classList.remove('arrowslideL'); }, 700);
    setTimeout(() => {  document.getElementById("slide1").src = photos[whatPhoto]; }, 100); 
}

function setImg() {
    blocks = document.getElementsByClassName('block');
    for (let i = 0; i < blocks.length-1; i++) {
        //blocks[i].style.cssText = "background-image: url(maniek.jpg)";
        if (activephoto==0) {
            blocks[i].style.backgroundImage = "url('img/ritka.jpg')";
        }
        if (activephoto==1) {
            blocks[i].style.backgroundImage = "url('img/maniek.jpg')";
        }
    }
    openSlider();
}
var click = new Audio('sound/click.mp3');

function openSlider() {
    click.play();
    if (isSliderActive==0) {
        document.getElementById("slider").style.display = 'flex';
        document.getElementById("dots").style.display = 'flex';
        document.getElementById("selectBtndiv").style.display = 'flex';
        isSliderActive = 1;
    }
    else{
        document.getElementById("slider").style.display = 'none';
        document.getElementById("dots").style.display = 'none';
        document.getElementById("selectBtndiv").style.display = 'none';
        isSliderActive = 0;
    }
    selectImgBtn.classList.add('bounce');
    setTimeout(() => { selectImgBtn.classList.remove('bounce');}, 700);

}

selectImgBtn.addEventListener('click', () => {
    openSlider();
});