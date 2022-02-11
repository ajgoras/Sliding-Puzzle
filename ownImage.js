let imageInput = document.querySelector('#imgInput');
let uploadedImage = '';
let addOwnImageLabel = document.querySelector('#selectBtndiv label');
let dots = document.querySelector('#dots');
let photosLs = JSON.parse(localStorage.getItem('ownPhotos'));
let deleteUploadedPhotosBtn = document.querySelector('#deleteUploadedPhotosBtn');

function loadOwnImages() {
    if (photosLs != null) {
        for (let i = 0; i < photosLs.length; i++) {
            photos[i] = photosLs[i];
        }
        for (let i = 2; i < photosLs.length; i++) {
            let newDot = document.createElement('div');
            let newDotId = dots.childElementCount + 1;
            newDot.id = 'dot' + newDotId;
            newDot.className = 'dot';
            dots.appendChild(newDot);
            newDot.addEventListener('click', () => {
                document.getElementById("slide1").style.backgroundImage = `url(${photos[newDotId-1]})`;
                activephoto = newDotId-1;
                mixingSound.play();
            })
        }
    }
}

function deleteUploadedPhotos() {
    for (let i = 3; i < photos.length+1; i++) {
        removeDotId = 'dot' + i;
        dotToRemove = document.getElementById(removeDotId);
        dots.removeChild(dotToRemove)
    }
    photos = [
        p1 = document.getElementById('photo0').src,
        p2 = document.getElementById('photo1').src
    ]
    localStorage.removeItem('ownPhotos');
    activephoto = 0;
    document.getElementById("slide1").style.backgroundImage = "url('img/ritka.jpg')";
    setImg();
}

function addUploadedImageToGame(sourceImg) {
    photos.push(sourceImg);
    let newDot = document.createElement('div');
    let newDotId = dots.childElementCount + 1;
    newDot.id = 'dot' + newDotId;
    newDot.className = 'dot';
    dots.appendChild(newDot);
    newDot.addEventListener('click', () => {
        document.getElementById("slide1").style.backgroundImage = `url(${photos[newDotId-1]})`;
        activephoto = newDotId-1;
        mixingSound.play();
    })
    localStorage.setItem('ownPhotos', JSON.stringify(photos));
}

addOwnImageLabel.addEventListener('click', () => {
    let alertMessage = document.createElement('p');
    alertMessage.innerHTML = "<strong>Info!</strong> <span>The photo should have an aspect ratio 1:1!</span>";
    alertdiv.appendChild(alertMessage);
    click.play();
    alertdiv.style.display = 'block';
    setTimeout(() => {
        alertdiv.style.display = 'none';
        if (alertdiv.hasChildNodes() == true) {
            while (alertdiv.firstChild) {
                alertdiv.removeChild(alertdiv.lastChild);
            }
        }
    }, 5500);
})

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        blocks = document.getElementsByClassName('block');
        for (let i = 0; i < blocks.length-1; i++) {
            blocks[i].style.backgroundImage = `url(${uploadedImage})`;
        }
        addUploadedImageToGame(uploadedImage);
        openSlider();
        alertdiv.style.display = 'none';
        if (alertdiv.hasChildNodes() == true) {
            while (alertdiv.firstChild) {
                alertdiv.removeChild(alertdiv.lastChild);
            }
        }
    });
    reader.readAsDataURL(this.files[0]);
})

deleteUploadedPhotosBtn.addEventListener('click', () => {
    deleteUploadedPhotos();
})

loadOwnImages();