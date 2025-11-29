const desBtns = document.querySelectorAll(".des-btn");
const specBtn = document.querySelector(".spec");


desBtns.forEach(desBtn => {
    desBtn.addEventListener("click", () => {
        if(specBtn.classList.contains("spec")){
            specBtn.classList.remove("spec")
            desBtn.classList.add("des-foc");
        } else{
            desBtn.classList.add("des-foc");
        }
    })
})

const allBtn = document.querySelector(".all-btn");
const allImg = document.querySelectorAll(".all-img");

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

allBtn.addEventListener("click", () => {
    allImg.forEach(img => {
        if(img.classList.contains("d-none")){
            img.style.display = "none";
        } else{
            img.style.display = "block"
        }
    })
})

beachBtn.addEventListener("click", () => {
    beachImg.forEach(img => img.style.display = "block");
    cityImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

cityBtn.addEventListener("click", () => {
    cityImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

natureBtn.addEventListener("click", () => {
    natureImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

culturalBtn.addEventListener("click", () => {
    culturalImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

adventureBtn.addEventListener("click", () => {
    adventureImg.forEach(img => img.style.display = "block");
    culturalImg.forEach(img => img.style.display = "none");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
})