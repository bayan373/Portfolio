const header=document.querySelector("header");
const menuBar=document.querySelector("#menu-bars");

menuBar.addEventListener("click",(eo) => {

    menuBar.classList.toggle("icon-remove");
    header.classList.toggle("active");
    
})

window.addEventListener("scroll",(eo) => {

    menuBar.classList.remove("icon-remove");
    header.classList.remove("active");
    
});

let typed=new Typed(".typing-text",{
    strings:['web developer','front end developer', 'web designer', 'graphic designer','programmer' ],
    loop:true,
    typeSpeed:150
});

VanillaTilt.init(document.querySelectorAll(".tilt"),{
    max:25
});

