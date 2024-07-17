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
