const button1 = document.getElementById('TombolShow');
const button2 = document.getElementById('TombolHide');
const idCard = document.getElementById('card');

button1.addEventListener('click', function() {
    idCard.classList.add('show');
    TombolShow.style.display='none';
    TombolHide.style.display='block'
});

button2.addEventListener('click', function() {
    idCard.classList.remove('show');
    TombolShow.style.display='block';
    TombolHide.style.display='none';
});