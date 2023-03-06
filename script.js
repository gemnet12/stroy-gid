//const houseContainer = document.querySelector('.house-animation');
//const roof = document.querySelector('.house-roof');
//const house = document.querySelector('.house-dom');
//
//window.onload = () => {
//    house.style.transform = 'translateX(-2000px)';
//    setTimeout(() => {
//        roof.style.transform = 'translateY(1600px)';
//    }, 1000)
//}

const modal = document.querySelector('#modal');
const headModalButton = document.querySelector('#callback-modal');
const formModal = document.querySelector('.form-modal');

headModalButton.addEventListener('click', (e) => {
    modal.classList.replace('modal','modal-active');
})

modal.addEventListener('click', (e) => {
    modal.classList.replace('modal-active', 'modal');
})

formModal.addEventListener('click', (e) => {
    e.stopPropagation();
})