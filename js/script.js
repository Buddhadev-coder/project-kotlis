const btn = document.getElementById("share_btn");
const list = document.getElementById("share_list");


btn.addEventListener("click", () => {

    list.classList.toggle("opacity-100");
    list.classList.toggle("right-0");
});



const btn_2 = document.getElementById("icon-2");
const list_2 = document.getElementById("icon-list-2");

btn_2.addEventListener("click", (e) => {
    e.stopPropagation(); // stop bubbling
    list_2.classList.toggle("opacity-100");
    list_2.classList.toggle("right-0");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!btn_2.contains(e.target) && !list_2.contains(e.target)) {
        list_2.classList.remove("opacity-100");
        list_2.classList.remove("right-0");
    }
});

const btn_3 = document.getElementById("moble-menu_btn");
const list_4 = document.getElementById("mobile-menu");

btn_3.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        list_4.classList.toggle("opacity-100");
        list_4.classList.toggle("left-0");
    }


});


var swiper = new Swiper(".mySwiper", {
    speed: 800,
    spaceBetween: 10,
    slidesPerView: 3,
    resistanceRatio: 0.6,
    longSwipes: true,
    longSwipesRatio: 0.2,
    longSwipesMs: 400,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",

    },
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        type: "fraction",
    },
});