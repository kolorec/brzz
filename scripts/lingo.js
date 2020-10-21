const container = document.getElementById('container');
const button2 = document.querySelector('button');
button2.addEventListener('click', () => {
    container.classList.toggle('container');
    button2.classList.toggle('buttonClicked');
});
    
const flagClick = document.querySelector('flag');
flagClick.addEventListener('click', () => {
    container.classList.remove('container');
    button2.classList.remove('buttonClicked');
});