let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");
if(window.localStorage.getItem("color")) {
    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`li[data-color=${window.localStorage.getItem("color")}]`).classList.add("active");
}
lis.forEach((li) => {
    li.addEventListener("click", function(e) {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        window.localStorage.setItem("color", e.target.getAttribute("data-color"));
        exp.style.backgroundColor = window.localStorage.getItem("color");
    });
});