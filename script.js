function clrChange() {
    document.querySelector('.template').style.backgroundColor = '#0a76fa';
    rotatingText.style.transition = 'transform 1s linear';
            rotatingText.style.transform = 'rotate(90deg)';
}

function clr() {
    document.querySelector('.template').style.backgroundColor = 'red';
}
function clr1() {
    document.querySelector('.template').style.backgroundColor = '#b1b2b3';
}

function restoreBackgroundColor() {
    document.querySelector('.template').style.backgroundColor = '#f0f0f0';
}