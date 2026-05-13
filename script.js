window.addEventListener("scroll", function(){

    let navbar = document.querySelector("nav");

    if(window.scrollY > 50){
        navbar.style.backgroundColor = "blue";
    }
    else{
        navbar.style.backgroundColor = "black";
    }

});