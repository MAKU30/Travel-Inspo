
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
    
    beachBtn.style.backgroundColor = "blue";
    beachBtn.style.color = "white";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    beachImg.forEach(img => img.style.display = "block")
    cityImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

cityBtn.addEventListener("click", () => {
    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "blue";
    cityBtn.style.color = "white";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    cityImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

natureBtn.addEventListener("click", () => {
    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "blue";
    natureBtn.style.color = "white";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    natureImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

culturalBtn.addEventListener("click", () => {

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "blue";
    culturalBtn.style.color = "white";

    adventureBtn.style.backgroundColor = "white";
    adventureBtn.style.color = "black";

    culturalImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    adventureImg.forEach(img => img.style.display = "none");
})

adventureBtn.addEventListener("click", () => {

    beachBtn.style.backgroundColor = "white";
    beachBtn.style.color = "black";

    cityBtn.style.backgroundColor = "white";
    cityBtn.style.color = "black";

    natureBtn.style.backgroundColor = "white";
    natureBtn.style.color = "black";

    culturalBtn.style.backgroundColor = "white";
    culturalBtn.style.color = "black";

    adventureBtn.style.backgroundColor = "blue";
    adventureBtn.style.color = "white";

    adventureImg.forEach(img => img.style.display = "block")
    beachImg.forEach(img => img.style.display = "none");
    natureImg.forEach(img => img.style.display = "none");
    cityImg.forEach(img => img.style.display = "none");
    culturalImg.forEach(img => img.style.display = "none");
})