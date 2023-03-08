let imageInput = document.querySelector('#imgInput');
let uploadedImage = '';
let addOwnImageLabel = document.querySelector('#selectBtndiv label');
let dots = document.querySelector('#dots');
let photosLs = JSON.parse(localStorage.getItem('ownPhotos'));
let deleteUploadedPhotosBtn = document.querySelector('#deleteUploadedPhotosBtn');
let imageToCrop = '';
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
                document.getElementById("slide").style.backgroundImage = `url(${photos[newDotId-1]})`;
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
    document.getElementById("slide").style.backgroundImage = "url('img/ritka.jpg')";
    setImg();
    localStorage.removeItem('activePhoto');
}

function checkLocalStorageSize() {
    var _lsTotal = 0,
      _xLen,
      _x;
    for (_x in localStorage) {
      if (!localStorage.hasOwnProperty(_x)) {
        continue;
      }
      _xLen = (localStorage[_x].length + _x.length) * 2;
      _lsTotal += _xLen;
    }
    let localStorageSize = parseInt((_lsTotal / 1024).toFixed(2));
    console.log(localStorageSize);
    if (localStorageSize>7500) {
        document.getElementById('ownPhotosWarningdiv').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('ownPhotosWarningdiv').style.opacity = 0;
        }, 4000);
        gameField.classList.remove('fade');
        return false
    }
    else {
        return true
    }
}
function checkPhotoBeforeUpload(sourceImg) {
    let sourceImgWidth = 0;
    let sourceImgHeight = 0;
    let sourceImgElement = document.createElement('img');
    let imageProportions = 0;
    sourceImgElement.src = sourceImg;
    sourceImgElement.classList.add('sourceImgElement');
    document.getElementById('photos').appendChild(sourceImgElement);
    document.getElementById('photos').style.display = 'block';
    document.getElementById('photos').style.visibility = 'hidden';
    let sourceImgElementsInDOM = document.querySelectorAll('.sourceImgElement');
    setTimeout(() => {
        sourceImgHeight = sourceImgElementsInDOM[sourceImgElementsInDOM.length - 1].getBoundingClientRect().height;
        sourceImgWidth = sourceImgElementsInDOM[sourceImgElementsInDOM.length - 1].getBoundingClientRect().width;
        document.getElementById('photos').removeChild(sourceImgElementsInDOM[sourceImgElementsInDOM.length - 1]);
    }, 10);
    setTimeout(() => {
        document.getElementById('photos').style.display = 'none';
        console.log(`${sourceImgHeight} ${sourceImgWidth}`);
        if (sourceImgHeight<sourceImgWidth) {
            imageProportions = sourceImgHeight / sourceImgWidth;
        }
        else {
            imageProportions = sourceImgWidth / sourceImgHeight;
        }
        console.log(imageProportions);
        if (imageProportions<0.92) {
            document.getElementById('imageAspectRatiodiv').style.display = 'block';
            imageToCrop = sourceImg;
        }
        else {
            setTimeout(() => {
                addUploadedImageToGame(uploadedImage);
                gameField.classList.remove('fade');
                document.getElementById('imageAspectRatiodiv').style.display = 'none';
            }, 500);
        }
    }, 20);
}
function addUploadedImageToGame(sourceImg) {
    photos.push(sourceImg);
    blocks = document.getElementsByClassName('block');
    for (let i = 0; i < blocks.length-1; i++) {
        blocks[i].style.backgroundImage = `url(${sourceImg})`;
    }
    document.getElementById("slide").style.backgroundImage = `url(${uploadedImage})`;
    openSlider();
    alertdiv.style.display = 'none';
    if (alertdiv.hasChildNodes() == true) {
        while (alertdiv.firstChild) {
            alertdiv.removeChild(alertdiv.lastChild);
        }
    }    
    let newDot = document.createElement('div');
    let newDotId = dots.childElementCount + 1;
    newDot.id = 'dot' + newDotId;
    newDot.className = 'dot';
    dots.appendChild(newDot);
    newDot.addEventListener('click', () => {
        document.getElementById("slide").style.backgroundImage = `url(${photos[newDotId-1]})`;
        activephoto = newDotId - 1;
        mixingSound.play();
    })
    activephoto = newDotId - 1;
    localStorage.setItem('ownPhotos', JSON.stringify(photos));
    saveActivePhotoToLs(newDotId-1);
}

addOwnImageLabel.addEventListener('click', () => {
    // let alertMessage = document.createElement('p');
    // alertMessage.innerHTML = "<strong>Info!</strong> <span>The photo should have an aspect ratio 1:1!</span>";
    // alertdiv.appendChild(alertMessage);
    click.play();
    // alertdiv.style.display = 'block';
    // setTimeout(() => {
    //     alertdiv.style.display = 'none';
    //     if (alertdiv.hasChildNodes() == true) {
    //         while (alertdiv.firstChild) {
    //             alertdiv.removeChild(alertdiv.lastChild);
    //         }
    //     }
    // }, 5500);
})

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        gameField.classList.add('fade');
        setTimeout(() => {
            if (checkLocalStorageSize()) {
                uploadedImage = reader.result;
                checkPhotoBeforeUpload(uploadedImage);
            }
        }, 200);
    });
    reader.readAsDataURL(this.files[0]);
})

deleteUploadedPhotosBtn.addEventListener('click', () => {
    deleteUploadedPhotos();
})

document.getElementById('stretchImageBtn').addEventListener('click', () => {
    setTimeout(() => {
        addUploadedImageToGame(uploadedImage);
        gameField.classList.remove('fade');
        document.getElementById('imageAspectRatiodiv').style.display = 'none';
    }, 200);
})

function crop(url, aspectRatio) {
    return new Promise(resolve => {
        const inputImage = new Image();
        inputImage.onload = () => {
            const inputWidth = inputImage.naturalWidth;
            const inputHeight = inputImage.naturalHeight;
            const inputImageAspectRatio = inputWidth / inputHeight;
            let outputWidth = inputWidth;
            let outputHeight = inputHeight;
            if (inputImageAspectRatio > aspectRatio) {
                outputWidth = inputHeight * aspectRatio;
            } else if (inputImageAspectRatio < aspectRatio) {
                outputHeight = inputWidth / aspectRatio;
            }
            if (outputHeight>1500 || outputWidth>1500) {
                outputHeight = outputHeight / 2;
                outputWidth = outputWidth / 2;
            }
            const outputX = (outputWidth - inputWidth) * .5;
            const outputY = (outputHeight - inputHeight) * .5;
            const outputImage = document.createElement('canvas');
            outputImage.width = outputWidth;
            outputImage.height = outputHeight;
            const ctx = outputImage.getContext('2d');
            ctx.drawImage(inputImage, outputX, outputY);
            resolve(outputImage);
        };
        inputImage.src = url;
    });
};

document.getElementById('cropImageBtn').addEventListener('click', () => {
    crop(imageToCrop, 1 / 1).then(canvas => {
        let image = new Image();
        image = canvas.toDataURL();
        setTimeout(() => {
            addUploadedImageToGame(image);
            document.getElementById('imageAspectRatiodiv').style.display = 'none';
            gameField.classList.remove('fade');
        }, 800);
    });
})
loadOwnImages();
loadActivePhotoFromLs();