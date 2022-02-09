const imageInput = document.querySelector('#imgInput');
let uploadedImage = '';

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        blocks = document.getElementsByClassName('block');
        for (let i = 0; i < blocks.length-1; i++) {
            blocks[i].style.backgroundImage = `url(${uploadedImage})`;
        }
    });
    reader.readAsDataURL(this.files[0]);
})

addOwnImageBtn.addEventListener('click', () => {
    let ownImagediv = document.querySelector('#ownImagediv');
    if (ownImagediv.style.display == 'flex') {
        ownImagediv.style.display = 'none';
    }
    else {
        ownImagediv.style.display = 'flex';
    }
    addOwnImageBtn.classList.add('bounce');
    click.play();
    setTimeout(() => {
        addOwnImageBtn.classList.remove('bounce');
    }, 700);
})