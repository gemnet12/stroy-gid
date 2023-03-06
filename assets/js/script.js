const houseContainer = document.querySelector('.house-animation');
const roof = document.querySelector('.house-roof');
const house = document.querySelector('.house-dom');

window.onload = () => {
    house.style.transform = 'translateX(-2000px)';
    setTimeout(() => {
        roof.style.transform = 'translateY(1600px)';
    }, 1000)
}