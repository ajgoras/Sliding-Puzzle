var activephoto = 0;
var isSliderActive = 0;

let photos = [
    p1 = document.getElementById('photo0').src,
    p2 = document.getElementById('photo1').src
]
var mixing = new Audio('mixing.mp3');
function setImg1() {
    document.getElementById("slide1").src = "ritka.jpg"
    activephoto = 0;
    mixing.play();
}
function setImg2() {
    document.getElementById("slide1").src = "maniek.jpg"
    activephoto = 1;
    mixing.play();
}

function nextPhoto() {
    mixing.play();
    var whatPhoto = activephoto + 1;
    if (whatPhoto===2) {
        whatPhoto = 0;
    }
    activephoto = activephoto + 1;
    if (activephoto==2) {
        activephoto = 0;
    }
    document.getElementById("slide1").src = photos[whatPhoto];

    document.getElementById('arrow-right').className = 'arrowslideR';
    setTimeout(() => {  document.getElementById('arrow-right').className = 'null'; }, 700);
}

function prevPhoto() {
    mixing.play();
    var whatPhoto = activephoto - 1;
    if (whatPhoto===-1) {
        whatPhoto = 1;
    }
    activephoto = activephoto - 1;
    if (activephoto==-1) {
        activephoto = 1;
    }
    document.getElementById("slide1").src = photos[whatPhoto];

    document.getElementById('arrow-left').className = 'arrowslideL';
    setTimeout(() => {  document.getElementById('arrow-left').className = 'null'; }, 700);
}

function setImg() {
    tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length-1; i++) {
        //tiles[i].style.cssText = "background-image: url(maniek.jpg)";
        if (activephoto==0) {
            tiles[i].style.backgroundImage = "url('ritka.jpg')";
        }
        if (activephoto==1) {
            tiles[i].style.backgroundImage = "url('maniek.jpg')";
        }
    }
    openSlider();
}
var click = new Audio('click.mp3');

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
    document.getElementById('selectImgBtn').className = 'bounce-4';
    setTimeout(() => {  document.getElementById('selectImgBtn').className = 'null'; }, 700);

}
