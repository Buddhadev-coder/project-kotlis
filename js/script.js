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
const submenuBtns = document.querySelectorAll(".mobile_menu_btn");

submenuBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {

        // ✔ Run submenu only on mobile
         

        e.preventDefault(); // Stop <a> jump

        const submenu = btn.nextElementSibling;

        if (!submenu.classList.contains("open")) {
            submenu.classList.remove("hidden");
            submenu.classList.add("open");
            submenu.style.height = submenu.scrollHeight + "px";
        }
        else {
            submenu.style.height = submenu.scrollHeight + "px";
            setTimeout(() => submenu.style.height = "0px");
            submenu.classList.remove("open");

            submenu.addEventListener(
                "transitionend",
                () => submenu.classList.add("hidden"),
                { once: true }
            );
        }
    });
});



var swiper = new Swiper(".mySwiper", {
    speed: 800,
    slidesPerView: 1,
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
    breakpoints: {
        320: {     // Extra small mobile
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {     // Small mobile
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {     // Large mobile
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {     // Tablets portrait
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {     // Tablets landscape
            slidesPerView: 1,
            spaceBetween: 10,
        },
        992: {     // Small laptop
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {    // Laptop
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1280: {    // Desktop
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1440: {    // Large desktop
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }

});

document.getElementById("nextBtn").addEventListener("click", () => {
    swiper.slideNext();
});
document.getElementById("prevBtn").addEventListener("click", () => {
    swiper.slidePrev();
});

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    selector: "*[data-gallery]",
    zoomable: false,
    height: "auto",
});