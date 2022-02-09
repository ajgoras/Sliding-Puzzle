let imageInput = document.querySelector('#imgInput');
let uploadedImage = '';
let addOwnImageLabel = document.querySelector('#selectBtndiv label');

addOwnImageLabel.addEventListener('click', () => {
    let alertMessage = document.createElement('p');
    alertMessage.innerHTML = "<strong>Info!</strong> <span>The photo should have an aspect ratio 1:1!</span>";
    alertdiv.appendChild(alertMessage);
    click.play();
    alertdiv.style.display = 'block';
    setTimeout(() => {
        alertdiv.style.display = 'none';
        alertdiv.removeChild(alertdiv.lastChild);
    }, 4500);
})

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        blocks = document.getElementsByClassName('block');
        for (let i = 0; i < blocks.length-1; i++) {
            blocks[i].style.backgroundImage = `url(${uploadedImage})`;
        }
        openSlider();
        alertdiv.style.display = 'none';
        alertdiv.removeChild(alertdiv.lastChild);
    });
    reader.readAsDataURL(this.files[0]);
})
