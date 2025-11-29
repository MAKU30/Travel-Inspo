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

const allIti = document.querySelectorAll(".all-iti");
const allBtn = document.querySelector(".all-btn");

const threeToFivebtn = document.querySelector(".t-f");
const threeToFiveIti = document.querySelector(".fiv-day");

const sixToSevenBtn = document.querySelector(".s-s");
const sixToSevenIti = document.querySelector(".sev-day");


const eightPlusBtn = document.querySelector(".e-plus");
const eightPlusIti = document.querySelector(".eight-day");

allBtn.addEventListener("click", () => {
    allIti.forEach(iti => iti.style.display = "block");
})


threeToFivebtn.addEventListener("click", () => {
    threeToFiveIti.style.display = "block";
    sixToSevenIti.style.display = "none";
    eightPlusIti.style.display = "none";
})

sixToSevenBtn.addEventListener("click", () => {
    threeToFiveIti.style.display = "none";
    sixToSevenIti.style.display = "block";
    eightPlusIti.style.display = "none";
})

eightPlusBtn.addEventListener("click", () => {
    eightPlusIti.style.display = "block";
    threeToFiveIti.style.display = "none";
    sixToSevenIti.style.display = "none"; 
})