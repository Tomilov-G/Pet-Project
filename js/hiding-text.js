const seoTextFirstBlock = document.getElementById("seo-first__block")
const seoTextSecondBlock = document.getElementById("seo-second__block")
const seoTextThirdBlock = document.getElementById("seo-third__block")


const rollUp = document.querySelector(".roll_up")
const moreDetailed = document.querySelector(".more-detailed")


moreDetailed.addEventListener("click", () => {
    seoTextFirstBlock.style.display = "block"
    seoTextSecondBlock.style.display = "block"
    seoTextThirdBlock.style.display = "block"
    
    moreDetailed.style.display = "none"
    rollUp.style.display = "block"
})


rollUp.addEventListener("click", () => {

    seoTextFirstBlock.style.display = "none"
    seoTextSecondBlock.style.display = "none"
    seoTextThirdBlock.style.display = "none"

    moreDetailed.style.display = "block"
    rollUp.style.display = "none"

    moreDetailed.scrollIntoView({ behavior: "smooth" })
})