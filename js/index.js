const catBtns = document.querySelectorAll(".cat-btn");

catBtns.forEach(catBtn =>  {
    catBtn.addEventListener("click", () => {
        catBtn.classList.add("cat-foc");
    })
})

const beachBtn = document.querySelector(".beach-btn");
const beachImg = document.querySelectorAll(".beach-img");

const cityBtn = document.querySelector(".city-btn");
const cityImg = document.querySelectorAll(".city-img");

const natureBtn = document.querySelector(".nature-btn");
const natureImg = document.querySelectorAll(".nature-img");

const culturalBtn = document.querySelector(".cultural-btn");
const culturalImg = document.querySelectorAll(".cultural-img");

const adventureBtn = document.querySelector(".adventure-btn");
const adventureImg = document.querySelectorAll(".adventure-img");


beachBtn.addEventListener("click", () => {
    
    beachImg.forEach(img => img.style.display = "block")
    cityImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

cityBtn.addEventListener("click", () => {
    cityImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

natureBtn.addEventListener("click", () => {
    natureImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

culturalBtn.addEventListener("click", () => {
    culturalImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

adventureBtn.addEventListener("click", () => {
    adventureImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
})