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
    specBtn.style.backgroundColor = "black";
    specBtn.style.color = "white";

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    allImg.forEach(img => {
        if(img.classList.contains("d-none")){
            img.style.display = "none";
        } else{
            img.style.display = "block"
        }
    })
})

beachBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    beachBtn.style.backgroundColor = "black";
    beachBtn.style.color = "white";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    beachImg.forEach(img => img.style.display = "block");
    cityImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

cityBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "black";
    cityBtn.style.color = "white";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    cityImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

natureBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "black";
    natureBtn.style.color = "white";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    natureImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

culturalBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "black";
    culturalBtn.style.color = "white";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    culturalImg.forEach(img => img.style.display = "block");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

adventureBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "black";
    adventureBtn.style.color = "white";

    adventureImg.forEach(img => img.style.display = "block");
    culturalImg.forEach(img => img.style.display = "none");
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
})