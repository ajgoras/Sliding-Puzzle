let imageInput = document.querySelector('#imgInput');
let uploadedImage = '';
let addOwnImageLabel = document.querySelector('#selectBtndiv label');
let dots = document.querySelector('#dots');

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
}

addOwnImageLabel.addEventListener('click', () => {
    let alertMessage = document.createElement('p');
    alertMessage.innerHTML = "<strong>Info!</strong> <span>The photo should have an aspect ratio 1:1!</span>";
    alertdiv.appendChild(alertMessage);
    click.play();
    alertdiv.style.display = 'block';
    setTimeout(() => {
        alertdiv.style.display = 'none';
        alertdiv.removeChild(alertdiv.lastChild);
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
        alertdiv.removeChild(alertdiv.lastChild);
    });
    reader.readAsDataURL(this.files[0]);
})
