// Бургер-меню

// Замена иконок 

const vkIcon = document.body.querySelector(".vk")
const instIcon = document.body.querySelector(".inst")

const burger = document.createElement('img')
burger.src = "../assets/icons/burger.png"
burger.className = "burger-icon"

const phoneCall = document.createElement('img')
phoneCall.src = "../assets/icons/phonecall.svg"
phoneCall.className = "phoneCall-icon"


function handleResize() {
    const screenWidth = window.innerWidth
    if (screenWidth <= 620) {
        if (document.body.contains(vkIcon)) {
            vkIcon.replaceWith(burger);
        }
        if (document.body.contains(instIcon)) {
            instIcon.replaceWith(phoneCall);
        }
    } else {
        if (document.body.contains(burger)) {
            burger.replaceWith(vkIcon);
        }
        if (document.body.contains(phoneCall)) {
            phoneCall.replaceWith(instIcon);
        }
    }
}
handleResize()

window.addEventListener("resize", handleResize)



// Переход на FaceTime при нажатии на иконку Телефона

phoneCall.addEventListener("click", () => {
    window.location.href = "tel:+7 (342) 2 474 222";
});


// Открытие бургер-меню при нажатии на иконку 
const openBurgerMenu = document.querySelector('.burger-menu')

burger.addEventListener("click", () => {
    openBurgerMenu.style.display = "block"
})


// Закрытие бургер-меню при нажатии на иконку-крестик

const closeBurgerMenu = document.querySelector('.close-icon')

closeBurgerMenu.addEventListener("click", () => {
    openBurgerMenu.style.display = "none"
})













