
let sidemenu = document.querySelector(".sidemenu");
let openmenu = document.querySelector(".openmenu");
let closemenu = document.querySelector(".closemenu");

openmenu.addEventListener("click", ()=> {
    sidemenu.style.right = "0";
})

closemenu.addEventListener("click", ()=> {
    sidemenu.style.right = "-200px";
})
