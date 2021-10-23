
// nav logic
    let nav = document.querySelector(".nav-list");
    let burger = document.querySelector(".burger")
let close = document.querySelector(".close");
let blur = document.getElementById("body");
let pop = document.querySelector(".cart-pop");
    

function openNav() {
    nav.classList.add("active-list")
    burger.classList.add("deactive");
    close.classList.add("active")

    }
function closeNav() {
 nav.classList.remove("active-list")
    burger.classList.remove("deactive");
    close.classList.remove("active")
}
    

//logic for cart page

let cart_btn = document.querySelector(".cart-btn");

function showCart() {
    cart_btn.classList.add("active-cart");
    cart_btn.classList.add("active");
    pop.classList.add("active-cart");

    pop.classList.add("active");

    // console.log(pop);
    // blur.classList.add("blur");
    
}
function closeCart() {
    cart_btn.classList.remove("active-cart");
    pop.classList.remove("active-cart");

    cart_btn.classList.remove("active");
    pop.classList.remove("active");

    // blur.classList.remove("blur");
}
