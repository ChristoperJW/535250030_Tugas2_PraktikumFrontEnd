const button = document.getElementById('Tombol');
const idCard = document.getElementById('card');

button.addEventListener('click', function() {
    idCard.classList.toggle('show');
});