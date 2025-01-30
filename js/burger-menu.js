// Бургер-меню

// Константы 

const vkIcon = document.body.querySelector(".vk")
const instIcon = document.body.querySelector(".inst")

const burger = document.createElement('img')
burger.src = "../assets/icons/burger.png"
burger.classList.add("burger-icon")

const phoneCall = document.createElement('img')
phoneCall.src = "../assets/icons/phonecall.svg"
phoneCall.classList.add("phoneCall-icon")

const PHONE_NUMBER = "tel:+7 (342) 2 474 222"
const MOBILE_BREAKPOINT = 620

const openBurgerMenu = document.querySelector('.burger-menu')
const closeBurgerMenu = document.querySelector('.close-icon')


// Функция, которая меняте иконки

function handleResize() {
    const screenWidth = window.innerWidth
    if (screenWidth <= MOBILE_BREAKPOINT) {
        if (vkIcon) {
            vkIcon.replaceWith(burger);
        }
        if (instIcon) {
            instIcon.replaceWith(phoneCall);
        }
    } else {
        if (burger) {
            burger.replaceWith(vkIcon);
        }
        if (phoneCall) {
            phoneCall.replaceWith(instIcon);
        }
    }
}

window.addEventListener("resize", handleResize)
document.addEventListener("DOMContentLoaded", handleResize);


// Переход на FaceTime при нажатии на иконку Телефона

phoneCall.addEventListener("click", () => {
    window.location.href = PHONE_NUMBER;
});


// Открытие бургер-меню при нажатии на иконку 

if (burger) {
    burger.addEventListener("click", () => {
        openBurgerMenu.classList.toggle("is-active")
    })    
}


// Закрытие бургер-меню при нажатии на иконку-крестик
if (closeBurgerMenu) {
    closeBurgerMenu.addEventListener("click", () => {
        openBurgerMenu.classList.remove("is-active")
    })
}















