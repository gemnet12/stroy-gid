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

//const modal = document.querySelector('#modal');
//const headModalButton = document.querySelectorAll('#callback-modal,#callback-modal-mob');
//const formModal = document.querySelector('.form-modal');
//
//headModalButton.forEach((btn) => {
//    btn.addEventListener('click', (e) => {
//        modal.classList.replace('modal','modal-active');
//    })
//})
//
//modal.addEventListener('click', (e) => {
//    modal.classList.replace('modal-active', 'modal');
//})
//
//formModal.addEventListener('click', (e) => {
//    e.stopPropagation();
//})

const closeSideMenu = document.querySelector('#close-side-menu');

closeSideMenu.addEventListener('click', (e) => {
    const navBar = document.querySelector('nav');
    navBar.style.display = 'none';
    menuExpand.style.display = 'block';
})

const menuExpand = document.querySelector('#menu');

menuExpand.addEventListener('click', (e) => {
    const navBar = document.querySelector('nav');
    menuExpand.style.display = 'none';
    navBar.style.display = 'block';
})
