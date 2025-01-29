const seoTextFirstBlock = document.getElementById("seo-first__block")
const seoTextSecondBlock = document.getElementById("seo-second__block")
const seoTextThirdBlock = document.getElementById("seo-third__block")


const BtnRollUp = document.querySelector(".roll_up")
const BtnMoreDetailed = document.querySelector(".more-detailed")

if (BtnMoreDetailed) {
    BtnMoreDetailed.addEventListener("click", () => {
        seoTextFirstBlock.classList.toggle("is-active")
        seoTextSecondBlock.classList.toggle("is-active")
        seoTextThirdBlock.classList.toggle("is-active")
        
        BtnMoreDetailed.classList.add("is-none")
        BtnRollUp.classList.add("is-active")
    })
}


if (BtnRollUp) {
    BtnRollUp.addEventListener("click", () => {

    seoTextFirstBlock.classList.remove("is-active")
    seoTextSecondBlock.classList.remove("is-active")
    seoTextThirdBlock.classList.remove("is-active")

    BtnMoreDetailed.classList.remove("is-none")
    BtnRollUp.classList.remove("is-active")

    BtnMoreDetailed.scrollIntoView({ behavior: "smooth" })
    })
}