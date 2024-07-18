//burgerMenu
let burgerBtn = document.querySelector(".header__content-top-mobile-burger");
let phoneHeaderMobile = document.querySelector(
    ".header__content-top-mobile-phone"
);
let navigationMenuMobile = document.querySelector(
    ".header__content-navigation-mobile"
);
let linksFromNavMenuMobile = document.querySelectorAll(
    ".header__content-navigation-mobile-link"
);
//надо,чтобы при модалке закрывалась менюшка
let btnFromNavMenuMobile = document.querySelector(
    ".header__content-navigation-mobile-btn"
);

burgerBtn.addEventListener("click", () => {
    if (burgerBtn.classList.contains("active-burger")) {
        burgerBtn.classList.remove("active-burger");
        phoneHeaderMobile.style.display = "block";
        navigationMenuMobile.classList.remove("active-menu");
        document.querySelector("body").style.overflow = "scroll";
    } else {
        burgerBtn.classList.add("active-burger");
        phoneHeaderMobile.style.display = "none";
        navigationMenuMobile.classList.add("active-menu");
        document.querySelector("body").style.overflow = "hidden";
    }
});
linksFromNavMenuMobile.forEach((link) => {
    link.addEventListener("click", () => {
        burgerBtn.classList.remove("active-burger");
        phoneHeaderMobile.style.display = "block";
        navigationMenuMobile.classList.remove("active-menu");
        document.querySelector("body").style.overflow = "scroll";
    });
});
btnFromNavMenuMobile.addEventListener("click", () => {
    burgerBtn.classList.remove("active-burger");
    phoneHeaderMobile.style.display = "block";
    navigationMenuMobile.classList.remove("active-menu");
    document.querySelector("body").style.overflow = "scroll";
});

//Swipers
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 100,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        768: {
            spaceBetween: 40,
        },
        1180: {
            slidesPerView: 6,
            spaceBetween: 100,
        },
    },
});

let carsColorSwiper = document.querySelectorAll(
    ".models__cars-card-images .mySwiper2"
);

carsColorSwiper.forEach((card) => {
    var swiper = new Swiper(card, {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },
    });
});
