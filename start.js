
const menuToggle = document.getElementById("menu-b");
const menu = document.getElementById("in_main-menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

window.addEventListener("resize", ()=>{
    if (window.innerWidth > 768){
        menu.classList.remove("active");
    }
});
