window.addEventListener('keydown', playSound);
const allKeys = document.querySelectorAll('.key');
function playSound(key) {
    const keyCode = key?.keyCode ?? key.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    if(!audio)  return;
    audio.currentTime = 0;
    audio.play();

    showEffect(keyCode);
}

function showEffect(keyCode) {
    const key = document.querySelector(`div[data-key='${keyCode}']`);
    key.classList.add('playing');
}

allKeys.forEach(key => {
    key.addEventListener('transitionend', removeEffect);
});

function removeEffect({ propertyName, target }) {
    if(propertyName !== 'transform') return;
    target.classList.remove('playing');
}