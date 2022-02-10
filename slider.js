var activephoto = 0;
var isSliderActive = 0;
var click = new Audio('sound/click.mp3');


let photos = [
    p1 = document.getElementById('photo0').src,
    p2 = document.getElementById('photo1').src
]

function setImg1() {
    document.getElementById("slide1").style.backgroundImage = "url('img/ritka.jpg')";
    activephoto = 0;
    mixingSound.play();
}
function setImg2() {
    document.getElementById("slide1").style.backgroundImage = "url('img/maniek.jpg')";
    activephoto = 1;
    mixingSound.play();
}

function nextPhoto() {
    let arrowRight = document.querySelector('#arrow-right');
    let photosCount = photos.length;
    mixingSound.play();
    var whatPhoto = activephoto + 1;
    if (whatPhoto===photosCount) {
        whatPhoto = 0;
    }
    activephoto = activephoto + 1;
    if (activephoto==photosCount) {
        activephoto = 0;
    }
    arrowRight.classList.add('arrowslideR');
    setTimeout(() => {  arrowRight.classList.remove('arrowslideR'); }, 700);
    setTimeout(() => { document.getElementById("slide1").style.backgroundImage = `url(${photos[whatPhoto]})`;}, 100); 
}

function prevPhoto() {
    let arrowLeft = document.querySelector('#arrow-left');
    let photosCount = photos.length;
    mixingSound.play();
    var whatPhoto = activephoto - 1;
    if (whatPhoto===-1) {
        whatPhoto = photosCount-1;
    }
    activephoto = activephoto - 1;
    if (activephoto==-1) {
        activephoto = photosCount-1;
    }
    
    arrowLeft.classList.add('arrowslideL');
    setTimeout(() => {  arrowLeft.classList.remove('arrowslideL'); }, 700);
    setTimeout(() => { document.getElementById("slide1").style.backgroundImage = `url(${photos[whatPhoto]})`; }, 100); 
}

function setImg() {
    blocks = document.getElementsByClassName('block');
    for (let i = 0; i < blocks.length-1; i++) {
        //blocks[i].style.cssText = "background-image: url(maniek.jpg)";
        blocks[i].style.backgroundImage = `url(${photos[activephoto]})`;
    }
    openSlider();
}

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

selectImgBtn.addEventListener('click', () => openSlider());
arrowLeft.addEventListener('click', () => prevPhoto());
arrowRight.addEventListener('click', () => nextPhoto());
dot1.addEventListener('click', () => setImg1());
dot2.addEventListener('click', () => setImg2());
selectBtn.addEventListener('click', () => setImg());