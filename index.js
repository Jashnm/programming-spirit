
const result = document.querySelector(".spirit-result");
const resultPro = document.querySelector(".pro");
const resultAspiring = document.querySelector(".asp");
const resultTechie = document.querySelector(".techie");

const classRemove = className => {
    className.classList.remove('box-hidden');
}
const classAdd = className => {
    className.classList.add('box-hidden');
}

const programmer = document.getElementById("1").onchange = () => {
    classRemove(result);
    classRemove(resultPro); 
}
const aspiring = document.getElementById("2").onchange = () => {
    classRemove(result);
    classRemove(resultAspiring);
}
const notTechie = document.getElementById("3").onchange = () => {
    classRemove(result);
    classRemove(resultTechie);
}

document.addEventListener("click", () => {
    if((event.target.closest(".pro")) || (event.target.closest(".asp")) || (event.target.closest(".techie")))
    return;

    classAdd(result);
    classAdd(resultPro);
    classAdd(resultAspiring);
    classAdd(resultTechie);
    elonMusk.style.display="none";
})

let collapse = document.getElementsByClassName("collapse");

for(let i=0; i<collapse.length; i++) {
    collapse[i].addEventListener("click", () => {
        collapse[i].classList.toggle("active");

        const btnCollapsed = collapse[i].nextElementSibling;

        if(btnCollapsed.style.display === "block")
        btnCollapsed.style.display = "none";
        else
        btnCollapsed.style.display = "block";
    })
};

const clickBtn = document.querySelector(".click-btn")
const elonMusk = document.getElementById("elon");

clickBtn.addEventListener("click", () => {
    if(elonMusk.style.display==="block")
    elonMusk.style.display="none";
    else
    elonMusk.style.display="block";

})