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
    specBtn.style.backgroundColor = "black";
    specBtn.style.color = "white";

    threeToFivebtn.style.backgroundColor = "white";
    threeToFivebtn.style.color = "black";

    sixToSevenBtn.style.backgroundColor = "white";
    sixToSevenBtn.style.color = "black";

    eightPlusBtn.style.backgroundColor = "white";
    eightPlusBtn.style.color = "black";

    allIti.forEach(iti => iti.style.display = "block");
})


threeToFivebtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    threeToFivebtn.style.backgroundColor = "black";
    threeToFivebtn.style.color = "white";

    sixToSevenBtn.style.backgroundColor = "white";
    sixToSevenBtn.style.color = "black";

    eightPlusBtn.style.backgroundColor = "white";
    eightPlusBtn.style.color = "black";
    

    threeToFiveIti.style.display = "block";
    sixToSevenIti.style.display = "none";
    eightPlusIti.style.display = "none";
})

sixToSevenBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    threeToFivebtn.style.backgroundColor = "white";
    threeToFivebtn.style.color = "black";

    sixToSevenBtn.style.backgroundColor = "black";
    sixToSevenBtn.style.color = "white";

    eightPlusBtn.style.backgroundColor = "white";
    eightPlusBtn.style.color = "black";
    
    threeToFiveIti.style.display = "none";
    sixToSevenIti.style.display = "block";
    eightPlusIti.style.display = "none";
})

eightPlusBtn.addEventListener("click", () => {

    specBtn.style.backgroundColor = "white";
    specBtn.style.color = "black";

    threeToFivebtn.style.backgroundColor = "white";
    threeToFivebtn.style.color = "black";

    sixToSevenBtn.style.backgroundColor = "white";
    sixToSevenBtn.style.color = "black";

    eightPlusBtn.style.backgroundColor = "black";
    eightPlusBtn.style.color = "white";

    eightPlusIti.style.display = "block";
    threeToFiveIti.style.display = "none";
    sixToSevenIti.style.display = "none"; 
})